import React from 'react'
import register from '../core/utils/register'
import LabelRating from '../../src/LabelRating'

register.addExample({
  type: 'components',
  title: '<LabelRating />',
  description: 'Label rating component',
  examples: [{
    title: 'Default',
    description: 'LabelRating.Item`s as children of LabelRating',
    render: () => (
      <LabelRating>
        <LabelRating.Item title="WS" rating="92" />
        <LabelRating.Item title="RP" rating="88" />
        <LabelRating.Item title="SK" rating="72" />
        <LabelRating.Item title="OE" rating="60" />
        <LabelRating.Item title="EX" rating="44" />
        <LabelRating.Item title="ZP" rating="31" />
        <LabelRating.Item title="ZQ" rating="08" />
      </LabelRating>
    ),
  }, {
    title: 'LabelRating.Item`s with title and rating',
    description: 'LabelRating.Item Props: title, rating',
    render: () => (
      <LabelRating>
        <LabelRating.Item title="WS" rating="92" />
        <LabelRating.Item title="RP" rating="88" />
      </LabelRating>
    ),
  }, {
    title: 'LabelRating.Item`s with title and rating',
    description: 'LabelRating.Item Props: title, rating (note: rating can be undefined)',
    render: () => (
      <LabelRating>
        <LabelRating.Item title="WS" />
        <LabelRating.Item title="RP" rating="88" />
        <LabelRating.Item title="SK" />
        <LabelRating.Item title="OE" rating="60" />
      </LabelRating>
    ),
  }],
})
