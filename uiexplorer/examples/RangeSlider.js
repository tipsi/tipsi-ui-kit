import React from 'react'
import register from '../core/utils/register'
import RangeSlider from '../../src/RangeSlider'

register.addExample({
  type: 'components',
  title: '<RangeSlider />',
  description: 'RangeSlider component',
  examples: [{
    title: 'Default',
    description: 'Without props',
    render: () => (
      <RangeSlider />
    ),
  }] })

  // ,{
  //   title: 'Rating',
  //   description: 'Prop: rating (Number)',
  //   render: () => (
  //     <StarRating rating={3} />
  //   ),
  // }, {
  //   title: 'Half rating',
  //   description: 'Prop: rating (Number)',
  //   render: () => (
  //     <StarRating rating={4.5} />
  //   ),
  // }, {
  //   title: 'Count',
  //   description: 'Prop: count (Number)',
  //   render: () => (
  //     <StarRating rating={1} count={10} />
  //   ),
  // }, {
  //   title: 'Size',
  //   description: 'Prop: size (Number)',
  //   render: () => (
  //     <StarRating rating={2} count={15} size={30} />
  //   ),
  // }],
// })
