import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import register from '../core/utils/register'
import ColoredTabs from '../../src/ColoredTabs'

register.addExample({
  type: 'components',
  title: '<ColoredTabs />',
  description: 'Star-rating component',
  examples: [{
    title: 'Default',
    description: 'Without props',
    render: () => (
      <ColoredTabs>
        <ColoredTabs.TabItem id="0" name="One" color="crimson" />
        <ColoredTabs.TabItem id="1" name="Two" color="orange" />
        <ColoredTabs.TabItem id="2" name="Three" color="chartreuse" />
        <ColoredTabs.TabItem id="3" name="Four" color="dodgerblue" />
      < /ColoredTabs>
    ),
  }],
})

// <ColoredTabs.TabItem name="One" color="crimson" />
// <ColoredTabs.TabItem name="Two" color="orange" />
// <ColoredTabs.TabItem name="Three" color="chartreuse" />
// <ColoredTabs.TabItem name="Four" color="dodgerblue" />
