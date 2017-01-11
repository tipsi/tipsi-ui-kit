import React from 'react'
import register from '../core/utils/register'
import WineRatings from '../../src/WineRatings'

register.addExample({
  type: 'components',
  title: '<WineRatings />',
  description: 'Wine Ratings component',
  examples: [{
    title: 'Default',
    description: 'WineRatings.Item`s as children of WineRatings',
    render: () => (
      <WineRatings>
        <WineRatings.Item title="WS" rating="92" />
        <WineRatings.Item title="RP" rating="88" />
        <WineRatings.Item title="SK" rating="72" />
        <WineRatings.Item title="OE" rating="60" />
        <WineRatings.Item title="EX" rating="44" />
        <WineRatings.Item title="ZP" rating="31" />
        <WineRatings.Item title="ZQ" rating="08" />
      </WineRatings>
    ),
  }, {
    title: 'WineRatings.Item`s with title and rating',
    description: 'Tags.Item Props: title, rating',
    render: () => (
      <WineRatings>
        <WineRatings.Item title="WS" rating="92" />
        <WineRatings.Item title="RP" rating="88" />
      </WineRatings>
    ),
  }, {
    title: 'WineRatings.Item`s with title and rating',
    description: 'Tags.Item Props: title, rating (note: rating can be undefined)',
    render: () => (
      <WineRatings>
        <WineRatings.Item title="WS" />
        <WineRatings.Item title="RP" rating="88" />
        <WineRatings.Item title="SK" />
        <WineRatings.Item title="OE" rating="60" />
      </WineRatings>
    ),
  }],
})
