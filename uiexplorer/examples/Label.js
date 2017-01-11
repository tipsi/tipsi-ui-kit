import React from 'react'
import { View } from 'react-native'
import register from '../core/utils/register'
import Label from '../../src/Label'
import ColorPallete from '../../src/utils/ColorPallete'

const colors = {
  WineLabelPick: {
    backgroundColor: ColorPallete.GREEN,
  },
  WineLabelNoted: {
    backgroundColor: ColorPallete.BROWN,
  },
  WineLabelSale: {
    backgroundColor: ColorPallete.RED,
  },
  WineLabelStaff: {
    backgroundColor: ColorPallete.YELLOW,
  },
}

register.addExample({
  type: 'components',
  title: '<Label />',
  description: 'Label component',
  examples: [{
    title: 'WineLabelSale',
    description: 'Label style for "On Sale"',
    render: () => (
      <Label text="On Sale" style={colors.WineLabelSale} />
    ),
  }, {
    title: 'WineLabelPick',
    description: 'Label style for "Value Pick"',
    render: () => (
      <Label text="Value Pick" style={colors.WineLabelPick} />
    ),
  }, {
    title: 'WineLabelStaff',
    description: 'Label style for "Staff Pick"',
    render: () => (
      <Label text="Staff Pick" style={colors.WineLabelStaff} />
    ),
  }, {
    title: 'WineLabelNoted',
    description: 'Label style for "%VINTAGE_TYPE% Vintage"',
    render: () => (
      <Label text="Old Vintage" style={colors.WineLabelNoted} />
    ),
  }, {
    title: 'Multiple Labels',
    description: 'Labels\' wrapper has flexDirection: row',
    render: () => (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Label text="On Sale" style={colors.WineLabelSale} />
        <Label text="Value Pick" style={colors.WineLabelPick} />
        <Label text="Staff Pick" style={colors.WineLabelStaff} />
        <Label text="Super Vintage" style={colors.WineLabelNoted} />
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
