import React from 'react'
import register from '../core/utils/register'
import Breadcrumbs from '../../src/Breadcrumbs'

register.addExample({
  type: 'components',
  title: '<Breadcrumbs />',
  description: 'Breadcrumbs component',
  examples: [{
    title: 'Default',
    description: 'Breadcrumbs Props: items',
    render: () => (
      <Breadcrumbs items={['red', '$20-$30', 'map']} />
    ),
  }, {
    title: 'Separator first',
    description: 'Breadcrumbs Props: separatorFirst',
    render: () => (
      <Breadcrumbs items={['Belgian Beers', 'Preview']} separatorFirst />
    ),
  }],
})
