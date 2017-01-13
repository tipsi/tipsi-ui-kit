import React, { PropTypes } from 'react'
import {
  StyleSheet,
  PanResponder,
  View,
  Platform,
} from 'react-native'
import DefaultMarker from './Marker'
import { createArray, valueToPosition, positionToValue } from './converters'

export default class Slider extends React.Component {
  static propTypes = {
    values: PropTypes.arrayOf(PropTypes.number),

    onValuesChangeStart: PropTypes.func,
    onValuesChange: PropTypes.func,
    onValuesChangeFinish: PropTypes.func,

    sliderLength: PropTypes.number,
    touchDimensions: PropTypes.object,

    customMarker: PropTypes.func,

    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,

    optionsArray: PropTypes.array,

    containerStyle: View.propTypes.style,
    trackStyle: View.propTypes.style,
    selectedStyle: View.propTypes.style,
    unselectedStyle: View.propTypes.style,
    markerStyle: View.propTypes.style,
    pressedMarkerStyle: View.propTypes.style,
  }

  static defaultProps = {
    values: [0],
    onValuesChangeStart: () => {},
    onValuesChange: () => {},
    onValuesChangeFinish: () => {},
    step: 1,
    min: 0,
    max: 10,
    touchDimensions: {
      height: 50,
      width: 50,
      borderRadius: 15,
      slipDisplacement: 200,
    },
    customMarker: DefaultMarker,
    sliderLength: 280,
  }

  constructor(props) {
    super(props)

    this.optionsArray = this.props.optionsArray || createArray(
      this.props.min,
      this.props.max,
      this.props.step
    )
    this.stepLength = this.props.sliderLength / this.optionsArray.length

    const initialValues = this.props.values.map(
      value => valueToPosition(value, this.optionsArray, this.props.sliderLength)
    )

    this.state = {
      pressedOne: true,
      valueOne: this.props.values[0],
      valueTwo: this.props.values[1],
      pastOne: initialValues[0],
      pastTwo: initialValues[1],
      positionOne: initialValues[0],
      positionTwo: initialValues[1],
    }
  }

  componentWillMount() {
    const customPanResponder = (start, move, end) => (
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onStartShouldSetPanResponderCapture: () => true,
        onMoveShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponderCapture: () => true,
        onPanResponderGrant: () => start(),
        onPanResponderMove: (evt, gestureState) => move(gestureState),
        onPanResponderTerminationRequest: () => true,
        onPanResponderRelease: (evt, gestureState) => end(gestureState),
        onPanResponderTerminate: (evt, gestureState) => end(gestureState),
        onShouldBlockNativeResponder: () => true,
      })
    )

    this.panResponderOne = customPanResponder(this.startOne, this.moveOne, this.endOne)
    this.panResponderTwo = customPanResponder(this.startTwo, this.moveTwo, this.endTwo)
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.onePressed || this.state.twoPressed) {
      return
    }

    let position
    const nextState = {}
    if (nextProps.values[0] !== this.state.valueOne) {
      position = valueToPosition(nextProps.values[0], this.optionsArray, this.props.sliderLength)
      nextState.valueOne = nextProps.values[0]
      nextState.pastOne = position
      nextState.positionOne = position
    }
    if (nextProps.values[1] !== this.state.valueTwo) {
      position = valueToPosition(nextProps.values[1], this.optionsArray, this.props.sliderLength)
      nextState.valueTwo = nextProps.values[1]
      nextState.pastTwo = position
      nextState.positionTwo = position
    }

    if (Object.keys(nextState).length) {
      this.setState(nextState)
    }
  }

  startOne = () => {
    this.props.onValuesChangeStart()
    this.setState({
      onePressed: !this.state.onePressed,
    })
  }

  startTwo = () => {
    this.props.onValuesChangeStart()
    this.setState({
      twoPressed: !this.state.twoPressed,
    })
  }

  moveOne = (gestureState) => {
    const unconfined = gestureState.dx + this.state.pastOne
    const bottom = 0
    const trueTop = this.state.positionTwo - this.stepLength
    const top = (trueTop === 0) ? 0 : trueTop || this.props.sliderLength
    let confined = unconfined
    if (unconfined < bottom) {
      confined = bottom
    } else if (unconfined > top) {
      confined = top
    }
    const value = positionToValue(
      this.state.positionOne,
      this.optionsArray,
      this.props.sliderLength
    )
    const { slipDisplacement } = this.props.touchDimensions

    if (Math.abs(gestureState.dy) < slipDisplacement || !slipDisplacement) {
      this.setState({ positionOne: confined })
    }

    if (value !== this.state.valueOne) {
      this.setState({ valueOne: value }, () => {
        const change = [this.state.valueOne]
        if (this.state.valueTwo) {
          change.push(this.state.valueTwo)
        }
        this.props.onValuesChange(change)
      })
    }
  }

  moveTwo = (gestureState) => {
    const unconfined = gestureState.dx + this.state.pastTwo
    const bottom = this.state.positionOne + this.stepLength
    const top = this.props.sliderLength
    let confined = unconfined
    if (unconfined < bottom) {
      confined = bottom
    } else if (unconfined > top) {
      confined = top
    }
    const value = positionToValue(
      this.state.positionTwo,
      this.optionsArray,
      this.props.sliderLength
    )
    const { slipDisplacement } = this.props.touchDimensions

    if (Math.abs(gestureState.dy) < slipDisplacement || !slipDisplacement) {
      this.setState({ positionTwo: confined })
    }
    if (value !== this.state.valueTwo) {
      this.setState({ valueTwo: value }, () => {
        this.props.onValuesChange([
          this.state.valueOne,
          this.state.valueTwo,
        ])
      })
    }
  }

  endOne = () => {
    this.setState({
      pastOne: this.state.positionOne,
      onePressed: !this.state.onePressed,
    }, () => {
      const change = [this.state.valueOne]
      if (this.state.valueTwo) {
        change.push(this.state.valueTwo)
      }
      this.props.onValuesChangeFinish(change)
    })
  }

  endTwo = () => {
    this.setState({
      pastTwo: this.state.positionTwo,
      twoPressed: !this.state.twoPressed,
    }, () => {
      this.props.onValuesChangeFinish([
        this.state.valueOne,
        this.state.valueTwo,
      ])
    })
  }

  render() {
    const { positionOne, positionTwo } = this.state
    const { selectedStyle, unselectedStyle, trackStyle, sliderLength } = this.props
    const twoMarkers = positionTwo

    const trackOneLength = positionOne
    const trackOneStyle = twoMarkers ? unselectedStyle : selectedStyle || styles.selectedTrack
    const trackThreeLength = twoMarkers ? sliderLength - (positionTwo) : 0
    const trackThreeStyle = unselectedStyle
    const trackTwoLength = sliderLength - trackOneLength - trackThreeLength
    const trackTwoStyle = twoMarkers ? selectedStyle || styles.selectedTrack : unselectedStyle
    const Marker = this.props.customMarker
    const { borderRadius } = this.props.touchDimensions
    const touchStyle = {
      borderRadius: borderRadius || 0,
    }

    const markerContainerOne = { top: -24, left: trackOneLength - 24 }
    const markerContainerTwo = { top: -24, right: trackThreeLength - 24 }

    return (
      <View style={[styles.container, this.props.containerStyle]}>
        <View style={[styles.fullTrack, { width: sliderLength }]}>
          <View style={[styles.track, trackStyle, trackOneStyle, { width: trackOneLength }]} />
          <View style={[styles.track, trackStyle, trackTwoStyle, { width: trackTwoLength }]} />
          {twoMarkers &&
            <View
              style={[
                styles.track,
                trackStyle,
                trackThreeStyle,
                { width: trackThreeLength },
              ]}
            />
          }
          <View
            style={[
              styles.markerContainer,
              markerContainerOne,
              positionOne > (sliderLength / 2) && styles.topMarkerContainer,
            ]}>
            <View
              style={[styles.touch, touchStyle]}
              ref={component => this.markerOne = component}
              {...this.panResponderOne.panHandlers}>
              <Marker
                pressed={this.state.onePressed}
                markerStyle={[styles.marker, this.props.markerStyle]}
                pressedMarkerStyle={this.props.pressedMarkerStyle}
                currentValue={this.state.valueOne}
              />
            </View>
          </View>
          {twoMarkers && (positionOne !== this.props.sliderLength) &&
            <View style={[styles.markerContainer, markerContainerTwo]}>
              <View
                style={[styles.touch, touchStyle]}
                ref={component => this.markerTwo = component}
                {...this.panResponderTwo.panHandlers}>
                <Marker
                  pressed={this.state.twoPressed}
                  markerStyle={this.props.markerStyle}
                  pressedMarkerStyle={this.props.pressedMarkerStyle}
                  currentValue={this.state.valueTwo}
                />
              </View>
            </View>
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 50,
  },
  fullTrack: {
    flexDirection: 'row',
  },
  track: {
    ...Platform.select({
      ios: {
        marginTop: -1,
        height: 2,
        borderRadius: 2,
        backgroundColor: '#A7A7A7',
      },
      android: {
        height: 2,
        backgroundColor: '#CECECE',
      },
    }),
  },
  selectedTrack: {
    ...Platform.select({
      ios: {
        backgroundColor: '#095FFF',
      },
      android: {
        backgroundColor: '#0D8675',
      },
    }),
  },
  markerContainer: {
    position: 'absolute',
    width: 48,
    height: 48,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topMarkerContainer: {
    zIndex: 1,
  },
  touch: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
})
