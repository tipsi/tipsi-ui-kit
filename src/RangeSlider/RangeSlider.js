import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, PanResponder } from 'react-native'
import Marker from './Marker'
import {
  createArray,
  valueToPosition,
  positionToValue,
} from './converters'
import themeable from '../utils/themeable'
import ThemeConstants from '../utils/ThemeConstants'

class RangeSlider extends Component {
  static propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    values: PropTypes.arrayOf(PropTypes.number),

    optionsArray: PropTypes.array,

    sliderLength: PropTypes.number,
    touchDimensions: PropTypes.object,

    valueRenderer: PropTypes.func,

    styles: PropTypes.object,

    onValuesChange: PropTypes.func,
    onValuesChangeStart: PropTypes.func,
    onValuesChangeFinish: PropTypes.func,
  }

  static defaultProps = {
    min: 0,
    max: 10,
    step: 1,
    values: [0],

    sliderLength: 280,
    touchDimensions: {
      height: 50,
      width: 50,
      borderRadius: 15,
      slipDisplacement: 200,
    },

    valueRenderer: value => value,

    onValuesChange: () => {},
    onValuesChangeStart: () => {},
    onValuesChangeFinish: () => {},
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
      confined,
      this.optionsArray,
      this.props.sliderLength
    )
    const { slipDisplacement } = this.props.touchDimensions

    if (Math.abs(gestureState.dy) < slipDisplacement || !slipDisplacement) {
      this.setState({ positionOne: confined, valueOne: value })
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
      confined,
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

  renderValueLabel(value) {
    const { valueRenderer, styles } = this.props
    const valueLabel = valueRenderer(value)
    if (typeof valueLabel !== 'string' &&
        typeof valueLabel !== 'number') {
      return valueLabel
    }
    return (
      <Text style={styles.valueText}>
        {valueLabel}
      </Text>
    )
  }

  render() {
    const { valueOne, valueTwo, positionOne, positionTwo } = this.state
    const { sliderLength, touchDimensions, styles } = this.props
    const twoMarkers = positionTwo

    const trackOneLength = positionOne
    const trackOneStyle = twoMarkers ? styles.unselectedTrack : styles.selectedTrack
    const trackThreeLength = twoMarkers ? sliderLength - (positionTwo) : 0
    const trackThreeStyle = styles.unselectedTrack
    const trackTwoLength = sliderLength - trackOneLength - trackThreeLength
    const trackTwoStyle = twoMarkers ? styles.selectedTrack : styles.unselectedTrack
    const sliderLengthStyle = { width: sliderLength }
    const touchStyle = { borderRadius: touchDimensions.borderRadius || 0 }

    const markerContainerOne = { top: -24, left: trackOneLength - 24 }
    const markerContainerTwo = { top: -24, right: trackThreeLength - 24 }

    return (
      <View style={styles.container}>
        <View
          style={[
            styles.valueContainer,
            !twoMarkers && styles.twoMarkersValueContainer,
            sliderLengthStyle,
          ]}>
          <View style={styles.valueWrapper}>
            {this.renderValueLabel(valueOne)}
          </View>
          {twoMarkers &&
            <View style={styles.valueWrapper}>
              {this.renderValueLabel(valueTwo)}
            </View>
          }
        </View>
        <View style={[styles.fullTrack, sliderLengthStyle]}>
          <View style={[styles.track, trackOneStyle, { width: trackOneLength }]} />
          <View style={[styles.track, trackTwoStyle, { width: trackTwoLength }]} />
          {twoMarkers &&
            <View
              style={[
                styles.track,
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
                currentValue={valueOne}
                markerStyle={styles.marker}
                pressedMarkerStyle={styles.pressedMarker}
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
                  currentValue={valueTwo}
                  markerStyle={styles.marker}
                  pressedMarkerStyle={styles.pressedMarker}
                />
              </View>
            </View>
          }
        </View>
      </View>
    )
  }
}

const baseStyles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 40,
  },
  fullTrack: {
    flexDirection: 'row',
  },
  track: {
    height: 3,
    marginTop: -1,
    borderRadius: 2,
    backgroundColor: '#A7A7A7',
  },
  selectedTrack: {
    backgroundColor: ThemeConstants.SECONDARY,
  },
  unselectedTrack: {
    backgroundColor: ThemeConstants.LIGHT_GRAY,
  },
  valueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  twoMarkersValueContainer: {
    justifyContent: 'space-around',
  },
  valueWrapper: {
    marginBottom: 7,
  },
  valueText: {
    fontSize: 18,
    color: ThemeConstants.MEDIUM_GRAY,
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
  marker: {
    width: 17,
    height: 17,
    backgroundColor: ThemeConstants.SECONDARY,
    borderColor: '#FFFFFF',
    borderWidth: 1.5,
    borderRadius: 30,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 1,
    shadowOpacity: 0.2,
    elevation: 1,
  },
  pressedMarker: {
    height: 20,
    width: 20,
    borderRadius: 20,
  },
  touch: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
})

const primary = StyleSheet.create({
  selectedTrack: { backgroundColor: ThemeConstants.PRIMARY },
  marker: { backgroundColor: ThemeConstants.PRIMARY },
})

const success = StyleSheet.create({
  selectedTrack: { backgroundColor: ThemeConstants.SUCCESS },
  marker: { backgroundColor: ThemeConstants.SUCCESS },
})

const warning = StyleSheet.create({
  selectedTrack: { backgroundColor: ThemeConstants.WARNING },
  marker: { backgroundColor: ThemeConstants.WARNING },
})

const alert = StyleSheet.create({
  selectedTrack: { backgroundColor: ThemeConstants.ALERT },
  marker: { backgroundColor: ThemeConstants.ALERT },
})

export default themeable('RangeSlider', baseStyles, {
  primary,
  success,
  warning,
  alert,
})(RangeSlider)
