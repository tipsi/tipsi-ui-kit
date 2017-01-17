// Source code from: https://github.com/obipawan/react-native-dash
// Autor: Pawan Kumar (obipawan)

import React, { PropTypes } from 'react'
import { View } from 'react-native'
import measure from '../utils/measure'

const Dash = ({
    dashGap,
    dashLength,
    dashThickness,
    dashColor: backgroundColor,
    style = {},
    ...props }) => {
  let length = props.width
  const { flexDirection = 'row' } = style
  let width = dashLength
  let height = dashThickness
  let marginRight = dashGap
  let marginBottom = 0
  if (flexDirection === 'column') {
    length = props.height
    width = dashThickness
    height = dashLength
    marginRight = 0
    marginBottom = dashGap
  }

  const n = Math.ceil(length / (dashGap + dashLength))
  const dash = []
  for (let i = 0; i < n; i++) { // eslint-disable-line no-plusplus
    dash.push(
      <View key={i} style={{ backgroundColor, width, height, marginRight, marginBottom }} />
    )
  }
  return (
    <View style={[style, { flexDirection }]}>
      {dash}
    </View>
  )
}

Dash.propTypes = {
  style: View.propTypes.style,
  dashGap: PropTypes.number.isRequired,
  dashLength: PropTypes.number.isRequired,
  dashThickness: PropTypes.number.isRequired,
  dashColor: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}

Dash.defaultProps = {
  dashGap: 3.5,
  dashLength: 3,
  dashThickness: 1,
  dashColor: '#c7d1dc',
}

export default measure(Dash)
