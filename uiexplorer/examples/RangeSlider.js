import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import register from '../core/utils/register'
import RangeSlider from '../../src/RangeSlider'

register.addExample({
  type: 'components',
  title: '<RangeSlider />',
  description: 'RangeSlider component',
  examples: [{
    title: 'Default',
    description: 'Without props',
    render: () => (
      <RangeSlider />
    ),
  }, {
    title: 'Advanced',
    description: 'Prop: style',
    render: () => (
      <View style={{ backgroundColor: '#1C1C1C' }}>
        <RangeSlider
          min={10} max={100}
          startValues={[25, 75]}
          textStyle={styles.textWhite}
          markerStyle={styles.markerStyle}
          trackStyle={styles.trackStyle}
          selectedStyle={{ backgroundColor: '#BDBDBD', width: 10 }}
          unselectedStyle={{ backgroundColor: '#585858', width: 20 }}
        />
      </View>
      ),
  }, {
    title: 'With Callbacks',
    description: 'Prop: onValuesChange',
    render: ({ action }) => (// eslint-disable-line react/prop-types
      <RangeSlider
        onValuesChangeFinish={action('onValuesChangeFinish')}
        onValuesChangeStart={action('onValuesChangeStart')}
        onValuesChange={action('onValuesChange')}
      />
      ),
  }] })


const styles = StyleSheet.create({
  textWhite: {
    color: '#FFFFFF',
  },
  markerStyle: {
    width: 17,
    height: 17,
    backgroundColor: '#848484',
    borderColor: '#FFFFFF',
    borderWidth: 1.5,
  },
  trackStyle: {
    borderRadius: 5,
    width: 10,
  },
})
