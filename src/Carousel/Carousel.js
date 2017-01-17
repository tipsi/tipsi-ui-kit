import React, { Component, PropTypes } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import StylePropType from '../utils/StylePropType'
import Item from './Item'

export default class Carousel extends Component {
  static propTypes = {
    children: PropTypes.node,
    spacer: PropTypes.number,
    contentContainerStyle: StylePropType,
  }

  static Item = Item

  render() {
    const { children, spacer, contentContainerStyle, ...rest } = this.props

    return (
      <ScrollView
        {...rest}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[
          styles.container,
          contentContainerStyle,
        ]}>
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
