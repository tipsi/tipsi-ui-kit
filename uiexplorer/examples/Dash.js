import React from 'react'
import register from '../core/utils/register'
import Dash from '../../src/Dash'

register.addExample({
  type: 'components',
  title: '<Dash />',
  description: 'Component to draw dashed or dotted lines',
  examples: [{
    title: 'Default',
    description: 'Without props',
    render: () => (
      <Dash />
    ),
  }, {
    title: 'Gap between two dashes',
    description: 'Prop: dashGap (Number)',
    render: () => (
      <Dash dashGap={10} />
    ),
  }, {
    title: 'Length of each dash',
    description: 'Prop: dashLength (Number)',
    render: () => (
      <Dash dashLength={10} />
    ),
  }, {
    title: 'Thickness of each dash',
    description: 'Prop: dashThickness (Number)',
    render: () => (
      <Dash dashThickness={4} dashLength={10} />
    ),
  }, {
    title: 'Color of each dash',
    description: 'Prop: dashColor (String)',
    render: () => (
      <Dash dashColor="black" />
    ),
  }, {
    title: 'Dash container style',
    description: 'Prop: style (View.PropTypes.Style)',
    render: () => (
      <Dash style={{ width: 200, alignSelf: 'center' }} />
    ),
  }],
})
