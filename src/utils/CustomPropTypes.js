import { PropTypes } from 'react'

export const StylePropType = PropTypes.oneOfType([
  PropTypes.object,
  PropTypes.number,
])

export const ThemePropType = PropTypes.oneOfType([
  PropTypes.object,
  PropTypes.string,
])

export const ColorPropType = PropTypes.oneOf([
  'secondary',
  'primary',
  'success',
  'warning',
  'alert',
])
