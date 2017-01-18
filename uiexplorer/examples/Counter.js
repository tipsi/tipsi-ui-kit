import React from 'react'
import register from '../core/utils/register'
import Counter from '../../src/Counter'

register.addExample({
  type: 'components',
  title: '<Counter />',
  description: 'Counter component',
  examples: [{
  //   title: 'Simple example',
  //   description: 'Props: onPress',
  //   render: ({ action }) => ( // eslint-disable-line react/prop-types
  //     <Counter onValueChange={action('Example onPress id = ')} />
  //   ),
  // }, {
    title: 'Default',
    description: 'Props: without props',
    render: () => (
      <Counter />
      ),
  }],
})
