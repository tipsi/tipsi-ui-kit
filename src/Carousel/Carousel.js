import React, { Component, PropTypes } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Item from './Item'
import Separator from './Separator'
import StylePropType from '../utils/StylePropType'

export default class Carousel extends Component {
  static propTypes = {
    children: PropTypes.node,
    spacer: PropTypes.number,
    contentContainerStyle: StylePropType,
  }

  static Item = Item
  static Separator = Separator

  render() {
    const { children, spacer, contentContainerStyle, ...rest } = this.props

    return (
      <ScrollView
        horizontal
        contentContainerStyle={[
          styles.container,
          contentContainerStyle,
        ]}
        {...rest}>
        {children}
        {spacer &&
          <View style={{ width: spacer }} />
        }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})
