import React from 'react'
import { View, Text } from 'react-native'
import register from '../core/utils/register'
import ColorPallete from '../../src/utils/ColorPallete'

const Square = ({ color, name }) => (
  <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column' }}>
    <View style={{ width: 50, height: 50, backgroundColor: color }} />
    <Text style={{ fontSize: 10 }}>{name}</Text>
  </View>
)

register.addExample({
  type: 'utils',
  title: 'ColorPallete',
  description: 'Default color pallete',
  examples: [{
    title: 'Base Colors',
    description: 'The primary, secondary, success, warning, and alert ' +
                 'colors are used to give more context to UI elements and actionss.',
    render: () => (
      <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
        <Square color={ColorPallete.PRIMARY} name="PRIMARY" />
        <Square color={ColorPallete.SECONDARY} name="SECONDARY" />
        <Square color={ColorPallete.SUCCESS} name="SUCCESS" />
        <Square color={ColorPallete.WARNING} name="WARNING" />
        <Square color={ColorPallete.ALERT} name="ALERT" />
      </View>
    ),
  }, {
    title: 'Other',
    description: '...',
    render: () => (
      <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
        <Square color={ColorPallete.MAIN} name="MAIN" />
      </View>
    ),
  }],
})
