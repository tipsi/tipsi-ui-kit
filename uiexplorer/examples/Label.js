import React from 'react'
import { View } from 'react-native'
import register from '../core/utils/register'
import Label from '../../src/Label'
import ColorPallete from '../../src/utils/ColorPallete'

const colors = {
  LabelPick: {
    backgroundColor: ColorPallete.GREEN,
  },
  LabelNoted: {
    backgroundColor: ColorPallete.BROWN,
  },
  LabelSale: {
    backgroundColor: ColorPallete.RED,
  },
  LabelStaff: {
    backgroundColor: ColorPallete.YELLOW,
  },
}

register.addExample({
  type: 'components',
  title: '<Label />',
  description: 'Label component',
  examples: [{
    title: 'Label Sale',
    description: 'Label style for "On Sale"',
    render: () => (
      <Label text="On Sale" style={colors.LabelSale} />
    ),
  }, {
    title: 'Label Pick',
    description: 'Label style for "Value Pick"',
    render: () => (
      <Label text="Value Pick" style={colors.LabelPick} />
    ),
  }, {
    title: 'Label Staff',
    description: 'Label style for "Staff Pick"',
    render: () => (
      <Label text="Staff Pick" style={colors.LabelStaff} />
    ),
  }, {
    title: 'Label Noted',
    description: 'Label style for "%VINTAGE_TYPE% Vintage"',
    render: () => (
      <Label text="Old Vintage" style={colors.LabelNoted} />
    ),
  }, {
    title: 'Multiple Labels',
    description: 'Labels\' wrapper has flexDirection: row',
    render: () => (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Label text="On Sale" style={colors.LabelSale} />
        <Label text="Value Pick" style={colors.LabelPick} />
        <Label text="Staff Pick" style={colors.LabelStaff} />
        <Label text="Super Vintage" style={colors.LabelNoted} />
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
