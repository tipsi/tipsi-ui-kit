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
      <RangeSlider accessibilityLabel={'defaultSlider'} />
    ),
  }, {
    title: 'Like screenshot, on dark background',
    description: 'Prop: style, valueRenderer',
    render: () => (
      <View style={{ backgroundColor: '#1C1C1C' }}>
        <RangeSlider
          accessibilityLabel={'customSlider'}
          min={10} max={100}
          startValues={[25, 75]}
          textStyle={styles.textWhite}
          trackStyle={{ height: 3 }}
          valueRenderer={value => (`$${value}`)}
        />
      </View>
      ),
  }, {
    title: 'With Callbacks',
    description: 'Prop: onValuesChange',
    render: ({ action }) => (// eslint-disable-line react/prop-types
      <RangeSlider
        accessibilityLabel={'sliderWithCallbacks'}
        onValuesChangeFinish={() => (console.log('custom ACTION'))}
        onValuesChange={action('onValuesChange')}
      />
      ),
  }, {
    title: 'Single slider',
    description: 'Prop: startValues',
    render: () => (
      <RangeSlider
        startValues={[5]}
      />
      ),
  }] })


const styles = StyleSheet.create({
  textWhite: {
    color: '#FFFFFF',
  },
})
