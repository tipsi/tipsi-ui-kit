import React from 'react'
import { Text, Image, View } from 'react-native'
import register from '../core/utils/register'
import { Expand, Tags } from '../../src'

register.addExample({
  type: 'components',
  title: '<Expand />',
  description: 'Expand component',
  examples: [{
    title: 'Title and Description',
    description: 'Prop: title (String), description (String)',
    render: () => (
      <Expand
        title="Winemakers Notes:"
        description="The 2012 vintage in Napa Valley was about as close to ‘normal’ as it gets! Average rainfall ended with a nearly ideal budbreak, flowering and fruit set. The frost season was mild and while the harvest was a bit slow to start, it was beautifully abundant. We carefully harvest our Muscat block twice to get the best for both wines that we made this vintage. In September, we harvested clusters inside the canopy. These early clusters retained their bright acidity and classic Muscat character in a slightly sweet, low alcohol wine perfect for interesting food pairings."
      />
    ),
  }, {
    title: 'Default Expanded',
    description: 'Prop: defaultExpanded (Bool)',
    render: () => (
      <Expand
        title="Winemakers Notes:"
        description="The 2012 vintage in Napa Valley was about as close to ‘normal’ as it gets! Average rainfall ended with a nearly ideal budbreak, flowering and fruit set. The frost season was mild and while the harvest was a bit slow to start, it was beautifully abundant. We carefully harvest our Muscat block twice to get the best for both wines that we made this vintage. In September, we harvested clusters inside the canopy. These early clusters retained their bright acidity and classic Muscat character in a slightly sweet, low alcohol wine perfect for interesting food pairings."
        defaultExpanded
      />
    ),
  }, {
    title: 'Children',
    description: 'Also you can pass your own component as children.',
    render: () => (
      <Expand
        title="WHAT TYPE OF WINES DO YOU PREFER?">
        <Tags>
          <Tags.Item name="All" />
          <Tags.Item name="Red" />
          <Tags.Item name="White" />
          <Tags.Item name="Rose" />
          <Tags.Item name="Sparkling" />
          <Tags.Item name="Desert" />
        </Tags>
      </Expand>
    ),
  }, {
    title: 'Other',
    description: 'View, Text and Image componants as children.',
    render: () => (
      <Expand
        title="Region:"
        description="Napa Valley"
        defaultExpanded={false}>
        <View>
          <Text>
            California’s Napa Valley is the best-known,
            most prestigious wine region in America.
            And yet only about four percent of
            California’s wine comes from the vineyard lands of Napa Valley!
            Most of Napa Valley’s wineries are small operations,
            although a few large wineries, such as Robert Mondavi Winery,
            Beringer, and Sutter Home, are based in Napa County.
            Many Napa Valley wineries own large vineyards,
            which surround their properties like gorgeous manicured lawns.
            Other wineries don’t own vineyards but instead buy their grapes
            from independent grape growers or buy juice or bulk wine from other
            wine producers. And some Napa Valley wine producers don’t have
            their own wineries; they bring their grapes to custom-crush wine
            facilities, which they rent — all for the distinction of making “Napa Valley wine.”
          </Text>
        </View>
        <Image
          source={require('../img/Napa-Wine-Map-wine-folly.jpg')}
          style={{ width: 320, height: 400 }}
          resizeMode={Image.resizeMode.stretch}
        />
      </Expand>
    ),
  }],
})
