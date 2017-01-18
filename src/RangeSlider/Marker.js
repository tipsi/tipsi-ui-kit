import React, { PropTypes } from 'react'
import { View, TouchableHighlight } from 'react-native'
import StylePropType from '../utils/StylePropType'

export default class DefaultMarker extends React.Component {
  static propTypes = {
    pressed: PropTypes.bool,
    markerStyle: StylePropType,
    pressedMarkerStyle: StylePropType,
  }

  render() {
    const { pressed, markerStyle, pressedMarkerStyle } = this.props

    return (
      <TouchableHighlight>
        <View style={[markerStyle, pressed && pressedMarkerStyle]} />
      </TouchableHighlight>
    )
  }
}
