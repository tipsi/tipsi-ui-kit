import React, { Component, PropTypes } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import themeable from '../utils/themeable'
import Item from './Item'

class Carousel extends Component {
  static propTypes = {
    children: PropTypes.node,
    spacer: PropTypes.number,
    styles: PropTypes.object,
  }

  static Item = Item

  render() {
    const { children, spacer, styles, ...rest } = this.props

    return (
      <ScrollView
        {...rest}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}>
        {children}
        {spacer &&
          <View style={{ width: spacer }} />
        }
      </ScrollView>
    )
  }
}

const baseStyles = StyleSheet.create({
  container: {
    padding: 10,
  },
})

export default themeable(
  'Carousel',
  baseStyles
)(Carousel)
