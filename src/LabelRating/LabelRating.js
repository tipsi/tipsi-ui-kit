import React, { Component, PropTypes, Children, cloneElement } from 'react'
import { View, StyleSheet } from 'react-native'
import StylePropType from '../utils/StylePropType'
import Item from './Item'

export default class LabelRating extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: StylePropType,
  }

  static Item = Item

  render() {
    const {
      children,
      style,
    } = this.props

    const containerStyles = [styles.container, style]

    return (
      <View style={containerStyles}>
        <View style={styles.children}>
          {Children.map(children, child => cloneElement(child))}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  children: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
})
