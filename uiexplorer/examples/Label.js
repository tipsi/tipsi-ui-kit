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
      <View style={{ flexDirection: 'row' }}>
        <Label text="On Sale" theme="alert" />
      </View>
    ),
  }, {
    title: 'Label',
    description: 'Label theme "success"',
    render: () => (
      <View style={{ flexDirection: 'row' }}>
        <Label text="Value Pick" theme="success" />
      </View>
    ),
  }, {
    title: 'Label',
    description: 'Label theme "warning"',
    render: () => (
      <View style={{ flexDirection: 'row' }}>
        <Label text="Staff Pick" theme="warning" />
      </View>
    ),
  }, {
    title: 'Label',
    description: 'Label theme "black"',
    render: () => (
      <View style={{ flexDirection: 'row' }}>
        <Label text="Old Vintage" theme="black" />
      </View>
    ),
  }, {
    title: 'Multiple Labels',
    description: 'Labels\' wrapper has flexDirection: row',
    render: () => (
      <View style={{ flexDirection: 'row' }}>
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
      <View style={{ flexDirection: 'row' }}>
        <Label text="Custom Text" style={{ backgroundColor: 'blue' }} />
      </View>
    ),
  }],
})
