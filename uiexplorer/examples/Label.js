import React from 'react'
import { View } from 'react-native'
import register from '../core/utils/register'
import Label from '../../src/Label'

register.addExample({
  type: 'components',
  title: '<Label />',
  description: 'Label component',
  examples: [{
    title: 'WineLabelSale',
    description: 'Label with predefined style "On Sale"',
    render: () => (
      <Label type="sale" />
    ),
  }, {
    title: 'WineLabelPick',
    description: 'Label with predefined style "Value Pick"',
    render: () => (
      <Label type="pick" />
    ),
  }, {
    title: 'WineLabelStaff',
    description: 'Label with predefined style "Staff Pick"',
    render: () => (
      <Label type="staff" />
    ),
  }, {
    title: 'WineLabelNoted',
    description: 'Label with predefined style "%VINTAGE_TYPE% Vintage"',
    render: () => (
      <Label type="noted" vintageType="Old" />
    ),
  }, {
    title: 'Multiple Labels',
    description: 'Labels\' wrapper has flexDirection: row',
    render: () => (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Label type="sale" />
        <Label type="pick" />
        <Label type="staff" />
        <Label type="noted" vintageType="Super" />
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
