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
    description: 'Props: step, defaultValue',
    render: () => (
      <Counter step={5} defaultValue={25} />
    ),
  }, {
    title: 'minValue: 0, maxValue: 10',
    description: 'Props: defaultValue, minValue, maxValue',
    render: () => (
      <Counter
        defaultValue={5}
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
