import React from 'react'
import register from '../core/utils/register'
import ColoredTabs from '../../src/ColoredTabs'

register.addExample({
  type: 'components',
  title: '<ColoredTabs />',
  description: 'Star-rating component',
  examples: [{
    title: 'Simple example',
    description: 'Props: onPress',
    render: ({ action }) => ( // eslint-disable-line react/prop-types
      <ColoredTabs onPress={action('Example onPress id = ')}>
        <ColoredTabs.Item id="0" name="One" color="crimson" />
        <ColoredTabs.Item id="1" name="Two" color="orange" />
        <ColoredTabs.Item id="2" name="Three" color="chartreuse" />
        <ColoredTabs.Item id="3" name="Four" color="dodgerblue" />
      < /ColoredTabs>
    ),
  }],
})
