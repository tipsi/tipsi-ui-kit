import React from 'react'
import { View } from 'react-native'
import register from '../core/utils/register'
import RangeSlider from '../../src/RangeSlider'

const Wrapper = ({ children }) => ( // eslint-disable-line react/prop-types
  <View
    style={{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      margin: 10,
    }}>
    {children}
  </View>
)

register.addExample({
  type: 'components',
  title: '<RangeSlider />',
  description: 'RangeSlider component',
  examples: [{
    title: 'Min, Max and Values',
    description: 'Use min, max and values props to specify you range params.',
    render: () => (
      <Wrapper>
        <RangeSlider
          min={0}
          max={10}
          values={[2, 8]}
        />
      </Wrapper>
    ),
  }, {
    title: 'Step',
    description: 'Use step prop to specify values step change.',
    render: () => (
      <Wrapper>
        <RangeSlider
          min={10}
          max={100}
          step={5}
          values={[25, 75]}
        />
      </Wrapper>
      ),
  }, {
    title: 'Custom Value Renderer',
    description: 'Use valueRenderer prop to specify custom value renderer.',
    render: () => (
      <Wrapper>
        <RangeSlider
          min={1}
          max={100}
          values={[20, 80]}
          valueRenderer={value => `$${value}`}
        />
      </Wrapper>
      ),
  }, {
    title: 'Lifecycle',
    description: 'Available handlers: onValuesChangeStart, onValuesChange and onValuesChangeFinish.',
    render: ({ action }) => (// eslint-disable-line react/prop-types
      <Wrapper>
        <RangeSlider
          min={0}
          max={20}
          step={2}
          values={[2, 18]}
          onValuesChangeStart={action('onValuesChangeStart')}
          onValuesChange={action('onValuesChange')}
          onValuesChangeFinish={action('onValuesChangeFinish')}
        />
      </Wrapper>
    ),
  }, {
    title: 'Single Marker',
    description: 'Specify only one argument in value array to use only one marker in slider.',
    render: () => (
      <Wrapper>
        <RangeSlider values={[5]} />
      </Wrapper>
    ),
  }],
})
