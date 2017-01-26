import React from 'react'
import register from '../core/utils/register'
import { Counter } from '../../src'

register.addExample({
  type: 'components',
  title: '<Counter />',
  description: 'Counter component',
  examples: [{
    title: 'Default',
    description: 'Props: without props',
    render: () => (
      <Counter />
    ),
  }, {
    title: 'Start values',
    description: 'Props: step, startValue',
    render: () => (
      <Counter step={5} startValue={25} />
    ),
  }, {
    title: 'minValue: 0, maxValue: 10',
    description: 'Props: startValue, minValue, maxValue',
    render: () => (
      <Counter
        startValue={5}
        minValue={0}
        maxValue={10}
      />
    ),
  }, {
    title: 'Simple example',
    description: 'Props: onValueChange',
    render: ({ action }) => ( // eslint-disable-line react/prop-types
      <Counter onValueChange={action('current value')} />
    ),
  }],
})
