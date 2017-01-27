import React from 'react'
import register from '../core/utils/register'
import { FileTabs } from '../../src'

register.addExample({
  type: 'components',
  title: '<FileTabs />',
  description: 'Star-rating component',
  examples: [{
    title: 'Simple example',
    description: 'Props: color',
    render: () => ( // eslint-disable-line react/prop-types
      <FileTabs selected="2" >
        <FileTabs.Item id="0" title="Red" color="crimson" />
        <FileTabs.Item id="1" title="Orange" color="orange" />
        <FileTabs.Item id="2" title="Green" color="chartreuse" />
        <FileTabs.Item id="3" title="Blue" color="dodgerblue" />
      </FileTabs>
    ),
  }, {
    title: 'Simple example 2',
    description: 'Props: default',
    render: () => ( // eslint-disable-line react/prop-types
      <FileTabs >
        <FileTabs.Item id="0" title="Left" />
        <FileTabs.Item id="1" title="Center" />
        <FileTabs.Item id="2" title="Right" />
      </FileTabs>
    ),
  }, {
    title: 'Simple example 3',
    description: 'Props: theme',
    render: () => ( // eslint-disable-line react/prop-types
      <FileTabs >
        <FileTabs.Item id="0" title="One" theme="alert" />
        <FileTabs.Item id="1" title="Two" theme="success" />
        <FileTabs.Item id="2" title="Three" theme="warning" />
        <FileTabs.Item id="3" title="Four" theme="black" />
      </FileTabs>
    ),
  }, {
    title: 'Simple example 4',
    description: 'Props: onPress',
    render: ({ action }) => ( // eslint-disable-line react/prop-types
      <FileTabs onPress={action('Example onPress id = ')}>
        <FileTabs.Item id="0" title="One" color="crimson" />
        <FileTabs.Item id="1" title="Two" color="orange" />
        <FileTabs.Item id="2" title="Three" color="chartreuse" />
        <FileTabs.Item id="3" title="Four" color="dodgerblue" />
      </FileTabs>
    ),
  }],
})
