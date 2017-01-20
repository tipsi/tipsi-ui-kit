import React from 'react'
import register from '../core/utils/register'
import FileTabs from '../../src/FileTabs'

register.addExample({
  type: 'components',
  title: '<FileTabs />',
  description: 'Star-rating component',
  examples: [{
    title: 'Simple example',
    description: 'Props: no props',
    render: () => ( // eslint-disable-line react/prop-types
      <FileTabs >
        <FileTabs.Item id="0" name="One" color="crimson" />
        <FileTabs.Item id="1" name="Two" color="orange" />
        <FileTabs.Item id="2" name="Three" color="chartreuse" />
        <FileTabs.Item id="3" name="Four" color="dodgerblue" />
      </FileTabs>
    ),
  }, {
    title: 'Simple example 2',
    description: 'Props: no props',
    render: () => ( // eslint-disable-line react/prop-types
      <FileTabs >
        <FileTabs.Item id="0" name="One" color="crimson" />
        <FileTabs.Item id="1" name="Two" color="orange" />
        <FileTabs.Item id="2" name="Three" color="chartreuse" />
        <FileTabs.Item id="3" name="Four" color="dodgerblue" />
      </FileTabs>
    ),
  }, {
    title: 'Simple example 3',
    description: 'Props: onPress',
    render: ({ action }) => ( // eslint-disable-line react/prop-types
      <FileTabs onPress={action('Example onPress id = ')}>
        <FileTabs.Item id="0" name="One" color="crimson" />
        <FileTabs.Item id="1" name="Two" color="orange" />
        <FileTabs.Item id="2" name="Three" color="chartreuse" />
        <FileTabs.Item id="3" name="Four" color="dodgerblue" />
      </FileTabs>
    ),
  }],
})
