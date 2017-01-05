import React from 'react'
import { storiesOf } from '@kadira/react-native-storybook'
import CenteredView from './helpers/CenteredView'
import StarRating from '../../src/StarRating'

storiesOf('StarRating')
  .addDecorator(getStory => (
    <CenteredView>
      {getStory()}
    </CenteredView>
  ))
  .add('default', () => (
    <StarRating />
  ))
  .add('rating', () => (
    <StarRating rating={3} />
  ))
  .add('half rating', () => (
    <StarRating rating={4.5} />
  ))
  .add('count', () => (
    <StarRating rating={1} count={10} />
  ))
  .add('size', () => (
    <StarRating rating={2} count={15} size={30} />
  ))
