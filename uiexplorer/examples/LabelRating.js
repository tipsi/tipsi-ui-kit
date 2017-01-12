import React from 'react'
import { View } from 'react-native'
import register from '../core/utils/register'
import LabelRating from '../../src/LabelRating'
import ColorPallete from '../../src/utils/ColorPallete'

register.addExample({
  type: 'components',
  title: '<LabelRating />',
  description: 'Label rating component',
  examples: [{
    title: 'Title And Rating',
    description: 'Label rating with title and rating',
    render: () => (
      <LabelRating title="WS" rating="92" />
    ),
  }, {
    title: 'Title Only',
    description: 'Label rating with title',
    render: () => (
      <LabelRating title="WS" />
    ),
  }, {
    title: 'Custom Style',
    description: 'Label rating with title and rating, custom style',
    render: () => (
      <LabelRating title="WS" rating="92" style={{ backgroundColor: ColorPallete.GREEN }} />
    ),
  }, {
    title: 'Custom Title Style',
    description: 'Label rating with title and rating, custom title style',
    render: () => (
      <LabelRating title="WS" rating="92" titleStyle={{ fontSize: 22, color: ColorPallete.YELLOW }} />
    ),
  }, {
    title: 'Custom Rating Style',
    description: 'Label rating with title and rating, custom rating style',
    render: () => (
      <LabelRating title="WS" rating="92" ratingStyle={{ fontSize: 22, color: ColorPallete.BROWN }} />
    ),
  }, {
    title: 'Multiple LabelRatings',
    description: 'LabelRatings\' wrapper has flexDirection: row',
    render: () => (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <LabelRating title="WS" rating="92" />
        <LabelRating title="RP" rating="88" style={{ backgroundColor: ColorPallete.GREEN }} />
        <LabelRating title="SK" rating="72" style={{ backgroundColor: ColorPallete.BROWN }} />
        <LabelRating title="OE" rating="60" style={{ backgroundColor: ColorPallete.YELLOW }} />
      </View>
    ),
  }],
})
