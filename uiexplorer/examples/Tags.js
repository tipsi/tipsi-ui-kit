import React from 'react'
import register from '../core/utils/register'
import Tags from '../../src/Tags'

register.addExample({
  type: 'components',
  title: '<Tags />',
  description: 'Tags component',
  examples: [{
    title: 'Default',
    description: 'Tags.Item`s as children of Tags',
    render: () => (
      <Tags>
        <Tags.Item name="Most Recent" />
        <Tags.Item name="Price" />
        <Tags.Item name="Red" />
        <Tags.Item name="White" />
        <Tags.Item name="Sparkling" />
        <Tags.Item name="Other" />
        <Tags.Item name="Beer" />
        <Tags.Item name="Spirits" />
      </Tags>
    ),
  }, {
    title: 'Title',
    description: 'Tags Prop: title',
    render: () => (
      <Tags title="Fruits">
        <Tags.Item name="Strawberries" />
        <Tags.Item name="Grape" />
        <Tags.Item name="Watermelon" />
        <Tags.Item name="Banana" />
        <Tags.Item name="Orange" />
        <Tags.Item name="Peach" />
        <Tags.Item name="Mango" />
        <Tags.Item name="Pineapple" />
      </Tags>
    ),
  }, {
    title: 'Active',
    description: 'Tags.Item Prop: active',
    render: () => (
      <Tags>
        <Tags.Item name="Beef" />
        <Tags.Item name="Cheese" />
        <Tags.Item name="Lamb" active />
        <Tags.Item name="Seafood" />
        <Tags.Item name="Vegitables" active />
        <Tags.Item name="Chiken" />
        <Tags.Item name="Pork" />
        <Tags.Item name="Turkey" />
      </Tags>
    ),
  }],
})
