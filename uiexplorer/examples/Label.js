import React from 'react'
import { View } from 'react-native'
import register from '../core/utils/register'
import Label from '../../src/Label'

register.addExample({
  type: 'components',
  title: '<Label />',
  description: 'Label component',
  examples: [{
    title: 'Label',
    description: 'Label theme "alert"',
    render: () => (
      <Label text="On Sale" theme="alert" />
    ),
  }, {
    title: 'Label',
    description: 'Label theme "success"',
    render: () => (
      <Label text="Value Pick" theme="success" />
    ),
  }, {
    title: 'Label',
    description: 'Label theme "warning"',
    render: () => (
      <Label text="Staff Pick" theme="warning" />
    ),
  }, {
    title: 'Label',
    description: 'Label theme "black"',
    render: () => (
      <Label text="Old Vintage" theme="black" />
    ),
  }, {
    title: 'Multiple Labels',
    description: 'Labels\' wrapper has flexDirection: row',
    render: () => (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Label text="On Sale" theme="alert" />
        <Label text="Value Pick" theme="success" />
        <Label text="Staff Pick" theme="warning" />
        <Label text="Super Vintage" theme="black" />
      </View>
    ),
  }, {
    title: 'Custom Text and Custom Background',
    description: 'Label with custom text and style props',
    render: () => (
      <Label text="Custom Text" style={{ backgroundColor: 'blue' }} />
    ),
  }],
})
