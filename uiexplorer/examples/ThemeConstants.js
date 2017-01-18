import React from 'react'
import { View, Text } from 'react-native'
import register from '../core/utils/register'
import ThemeConstants from '../../src/utils/ThemeConstants'

const Square = ({ color, name }) => (
  <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column' }}>
    <View style={{ width: 50, height: 50, backgroundColor: color }} />
    <Text style={{ fontSize: 10 }}>{name}</Text>
  </View>
)

register.addExample({
  type: 'utils',
  title: 'ThemeConstants',
  description: 'Default colors, paddings, borders and other styles.',
  examples: [{
    title: 'Base Colors',
    description: 'The primary, secondary, success, warning, and alert ' +
                 'colors are used to give more context to UI elements and actionss.',
    render: () => (
      <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
        <Square color={ThemeConstants.PRIMARY} name="PRIMARY" />
        <Square color={ThemeConstants.SECONDARY} name="SECONDARY" />
        <Square color={ThemeConstants.SUCCESS} name="SUCCESS" />
        <Square color={ThemeConstants.WARNING} name="WARNING" />
        <Square color={ThemeConstants.ALERT} name="ALERT" />
      </View>
    ),
  }],
})
