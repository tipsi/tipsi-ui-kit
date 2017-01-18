// Source code from: https://github.com/obipawan/react-native-measureme
// Autor: Pawan Kumar (obipawan)

import React, { Component } from 'react'
import { View } from 'react-native'
import { StylePropType } from './CustomPropTypes'

module.exports = function measure(ComposedComponent) {
  return class extends Component {
    static propTypes = { style: StylePropType }

    state = { width: 0, height: 0, initialRender: false }

    measure = ({ nativeEvent: { layout: { width = 0, height = 0 } = {} } = {} }) => {
      this.setState({ width, height, initialRender: true })
    }

    render() {
      return (
        this.state.initialRender ?
          <ComposedComponent {...this.props} {...this.state} onLayout={this.measure} /> :
          <View style={this.props.style} onLayout={this.measure} />
      )
    }
  }
}
