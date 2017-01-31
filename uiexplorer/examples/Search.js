import React from 'react'
import { View } from 'react-native'
import register from '../core/utils/register'
import { Search, Breadcrumbs } from '../../src'
/* eslint react/prop-types: 0 */

register.addExample({
  type: 'components',
  title: '<Search />',
  description: 'Search component',
  examples: [{
    title: 'Search',
    description: 'Prop: value(text), suggestions(array), beforeSuggestionsRenderer(node)',
    state: {
      value: '',
      suggestions: [
        'Il Roccolo Montepulciano d\'Abruzzo',
        'Chateau Branaire-Ducru Saint-Julien Bordeaux Blend',
        'Cabernet Sauvignon',
        'Merlot',
        'Petit Verdot',
        'Château d\'Yquem Sauternes Semillon',
        'Sauvignon Blanc',
        'Château Guiraud 1er Grand Cru Classe Sauternes Semillon',
        'Choroy Cabernet Sauvignon',
        'Château La Vieille Cure Fronsac Bordeaux Blend',
        'Cabernet Franc',
        'Crow Canyon Chardonnay',
        'Finca La Celia La Finca Oak Aged Tempranillo',
        'Château Lamothe Bergeron Haut-Medoc Bordeaux Blend',
      ],
      filteredSuggestions: [],
    },
    render: ({ state, setState }) => {
      const beforeSuggestionsRenderer = (
        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'stretch', marginBottom: 5, marginTop: 8 }}>
          <View style={{ height: 1, marginBottom: 15, backgroundColor: 'lightgray' }} />
          <View style={{ alignItems: 'center' }}>
            <Breadcrumbs items={['All', '$20-$30', '$30-$100']} />
          </View>
        </View>
      )
      const onClear = () => {
        setState({
          value: '',
          filteredSuggestions: [],
        })
      }
      const onRowClick = (rowData) => {
        setState({
          value: rowData,
          filteredSuggestions: [],
        })
      }
      const onChangeText = (text) => {
        let results = []
        if (text.length > 0) {
          results = state.suggestions.filter(
            elem => elem.toLowerCase().indexOf(text.toLowerCase()) > -1,
          )
        }
        setState({
          value: text,
          filteredSuggestions: results,
        })
      }
      return (
        <Search
          value={state.value}
          suggestions={state.filteredSuggestions}
          onChangeText={onChangeText}
          onClear={onClear}
          onRowClick={onRowClick}
          beforeSuggestionsRenderer={beforeSuggestionsRenderer}
        />
      )
    },
  }],
})
