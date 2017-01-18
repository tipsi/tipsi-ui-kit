import { PropTypes } from 'react'

export const StylePropType = PropTypes.oneOfType([
  PropTypes.object,
  PropTypes.number,
])

export const ThemePropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.object,
  PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ])
  ),
])
