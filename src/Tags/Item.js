import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import StylePropType from '../utils/StylePropType'

export default class Item extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    active: PropTypes.bool,
    style: StylePropType,
    nameStyle: StylePropType,
    activeStyle: StylePropType,
  }

  static defaultProps = {
    active: false,
  }

  render() {
    const { name, active, style, nameStyle, activeStyle } = this.props

    return (
      <View
        style={[
          styles.container,
          style,
          active && styles.active,
          active && activeStyle,
        ]}>
        <Text style={[styles.name, nameStyle]}>
          {name}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 14,
    paddingRight: 14,
    margin: 3,
    backgroundColor: '#82909d',
  },
  active: {
    backgroundColor: '#742948',
  },
  name: {
    color: 'white',
    fontWeight: '600',
  },
})
