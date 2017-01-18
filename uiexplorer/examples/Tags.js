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
    title: 'Default Themes',
    description: 'You can use following default themes: dark',
    render: () => (
      <Tags theme="dark">
        <Tags.Item name="Beef" theme="dark" />
        <Tags.Item name="Cheese" theme="dark" />
        <Tags.Item name="Lamb" theme="dark" active />
        <Tags.Item name="Seafood" theme="dark" />
      </Tags>
    ),
  }, {
    title: 'onPress',
    description: 'Tags.Item Prop: onPress',
    render: ({ action }) => ( // eslint-disable-line react/prop-types
      <Tags>
        <Tags.Item name="Beef" onPress={action('onPress: Beef')} />
        <Tags.Item name="Cheese" onPress={action('onPress: Cheese')} />
        <Tags.Item name="Lamb" onPress={action('onPress: Lamb')} />
        <Tags.Item name="Seafood" onPress={action('onPress: Seafood')} />
        <Tags.Item name="Vegitables" onPress={action('onPress: Vegitables')} />
        <Tags.Item name="Chiken" onPress={action('onPress: Chiken')} />
        <Tags.Item name="Pork" onPress={action('onPress: Pork')} />
        <Tags.Item name="Turkey" onPress={action('onPress: Turkey')} />
      </Tags>
    ),
  }, {
    title: 'Toggle',
    description: 'Example how can create toogle tags',
    state: { active: [] },
    render: ({ state, setState }) => { // eslint-disable-line react/prop-types
      const toggle = name => () => {
        const { active } = state
        if (active.includes(name)) {
          setState({
            active: active.filter(item => item !== name),
          })
        } else {
          setState({
            active: [...active, name],
          })
        }
      }
      const active = name => state.active.includes(name)

      return (
        <Tags>
          <Tags.Item
            name="One"
            active={active('One')}
            onPress={toggle('One')}
          />
          <Tags.Item
            name="Two"
            active={active('Two')}
            onPress={toggle('Two')}
          />
          <Tags.Item
            name="Three"
            active={active('Three')}
            onPress={toggle('Three')}
          />
        </Tags>
      )
    },
  }],
})
