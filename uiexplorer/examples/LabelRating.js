import React from 'react'
import { View } from 'react-native'
import register from '../core/utils/register'
import LabelRating from '../../src/LabelRating'

register.addExample({
  type: 'components',
  title: '<LabelRating />',
  description: 'Label rating component',
  examples: [{
    title: 'Title and Rating',
    description: 'Label rating with title and rating props',
    render: () => (
      <LabelRating title="WS" rating={92} />
    ),
  }, {
    title: 'Types',
    description: 'Predefined types',
    render: () => (
      <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
        <LabelRating title="SZ" rating={75} />
        <LabelRating title="RP" rating={88} type="primary" />
        <LabelRating title="SK" rating={72} type="success" />
        <LabelRating title="OE" rating={60} type="warning" />
        <LabelRating title="WS" rating={92} type="alert" />
      </View>
    ),
  }, {
    title: 'Custom Theme',
    description: 'Change fontSize via theme object',
    render: () => (
      <LabelRating
        title="NT"
        rating={22}
        type="alert"
        theme={{
          titleText: {
            fontSize: 30,
          },
          ratingText: {
            fontSize: 30,
          },
        }}
      />
    ),
  }],
})
