
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

import React, { Component, PropTypes } from 'react'

import MultiSlider from '@ptomasroos/react-native-multi-slider'


class RangeSlider extends Component {
  static propTypes = {
    startValues: PropTypes.arrayOf(PropTypes.number),
    sliderLength: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,

    onValuesChangeStart: PropTypes.func,
    onValuesChange: PropTypes.func,
    onValuesChangeFinish: PropTypes.func,

    customMarker: PropTypes.func,
    textStyle: Text.propTypes.style,
    markerStyle: View.propTypes.style,
    selectedStyle: View.propTypes.style,
    unselectedStyle: View.propTypes.style,
    trackStyle: View.propTypes.style,
  }

  static defaultProps = {
    min: 0,
    max: 10,
    startValues: [2, 8],
    onValuesChange: (newValues) => {
      console.log('changing', newValues)
    },
  }

  constructor(props) {
    super(props)
    this.state = { values: props.startValues }
  }

  sliderOneValuesChange = (newValues) => {
    this.setState({
      values: newValues,
    })
    this.props.onValuesChange(newValues)
  }

  render() {
    return (
      <View >
        <View style={styles.topTextContainer}>
          <Text style={this.props.textStyle}>
            ${this.state.values[0]}
          </Text>
          <Text style={this.props.textStyle}>
            ${this.state.values[1]}
          </Text>
        </View>
        <View style={styles.sliderContainer} >
          <MultiSlider
            min={this.props.min}
            max={this.props.max}
            onValuesChangeStart={this.props.onValuesChangeStart}
            onValuesChange={this.sliderOneValuesChange}
            onValuesChangeFinish={this.props.onValuesChangeFinish}
            values={this.props.startValues}
            sliderLength={this.props.sliderLength}
            customMarker={this.props.customMarker}
            markerStyle={this.props.markerStyle}
            trackStyle={this.props.trackStyle}
            selectedStyle={this.props.selectedStyle}
            unselectedStyle={this.props.unselectedStyle}
          />
        </View>
      </View>
    )
  }
}


export default RangeSlider

const styles = StyleSheet.create({
  topTextContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 10,
  },
  sliderContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-around',
  },
  trackStyle: {
    borderColor: '#FF0000',
    height: 20,
  },
  markerStyle: {
    backgroundColor: '#0000FF',
    borderColor: '#FF0000',
    borderWidth: 2,
  },
})
