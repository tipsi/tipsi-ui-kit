import React from 'react'
import { View } from 'react-native'
import register from '../core/utils/register'
import { Label } from '../../src'

register.addExample({
  type: 'components',
  title: '<Label />',
  description: 'Label component',
  examples: [{
    title: 'Label',
    description: 'Label theme "default"',
    render: () => (
      <View style={{ flexDirection: 'row' }}>
        <Label title="Default" />
      </View>
    ),
  }, {
    title: 'Default themes',
    description: 'Labels\' wrapper has flexDirection: row',
    render: () => (
      <View style={{ flexDirection: 'row' }}>
        <Label title="On Sale" theme="alert" />
        <Label title="Value Pick" theme="success" />
        <Label title="Staff Pick" theme="warning" />
        <Label title="Super Vintage" theme="black" />
      </View>
    ),
  }, {
    title: 'Custom Text and Custom Background',
    description: 'Label with custom text and style props',
    render: () => (
      <View style={{ flexDirection: 'row' }}>
        <Label title="Custom Text" style={{ backgroundColor: 'blue' }} />
      </View>
    ),
  }],
})
