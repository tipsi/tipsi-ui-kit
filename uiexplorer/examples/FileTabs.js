import React from 'react'
import register from '../core/utils/register'
import FileTabs from '../../src/FileTabs'

register.addExample({
  type: 'components',
  title: '<FileTabs />',
  description: 'Star-rating component',
  examples: [{
    title: 'Simple example 2',
    description: 'Props: color',
    render: () => ( // eslint-disable-line react/prop-types
      <FileTabs >
        <FileTabs.Item id="0" name="Red" color="crimson" />
        <FileTabs.Item id="1" name="Orange" color="orange" />
        <FileTabs.Item id="2" name="Green" color="chartreuse" />
        <FileTabs.Item id="3" name="Blue" color="dodgerblue" />
      </FileTabs>
    ),
  }, {
    title: 'Simple example',
    description: 'Props: default',
    render: () => ( // eslint-disable-line react/prop-types
      <FileTabs >
        <FileTabs.Item id="0" name="Left" />
        <FileTabs.Item id="1" name="Center" />
        <FileTabs.Item id="2" name="Right" />
      </FileTabs>
    ),
  }, {
    title: 'Simple example 3',
    description: 'Props: theme',
    render: () => ( // eslint-disable-line react/prop-types
      <FileTabs >
        <FileTabs.Item id="0" name="One" theme="alert" />
        <FileTabs.Item id="1" name="Two" theme="success" />
        <FileTabs.Item id="2" name="Three" theme="warning" />
        <FileTabs.Item id="3" name="Four" theme="black" />
      </FileTabs>
    ),
  }, {
    title: 'Simple example 4',
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
