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
      <LabelRating title="EXAMPLE" rating={15} />
    ),
  }, {
    title: 'Default Themes',
    description: 'You can use following themes: primary, success, warning, alert',
    render: () => (
      <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
        <LabelRating title="PR" rating={88} theme="primary" />
        <LabelRating title="SU" rating={72} theme="success" />
        <LabelRating title="WA" rating={60} theme="warning" />
        <LabelRating title="AL" rating={92} theme="alert" />
      </View>
    ),
  }, {
    title: 'Custom Theme',
    description: 'Change fontSize via theme object',
    render: () => (
      <LabelRating
        title="SIZE"
        rating={30}
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
