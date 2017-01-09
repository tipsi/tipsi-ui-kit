import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import StylePropType from '../utils/StylePropType'
import Item from './Item'

export default class Tags extends Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
    style: StylePropType,
    titleStyle: StylePropType,
  }

  static Item = Item

  render() {
    const { title, children, style, titleStyle } = this.props

    return (
      <View style={[styles.container, style]}>
        {title &&
          <Text style={[styles.title, titleStyle]}>
            {title}
          </Text>
        }
        <View style={styles.children}>
          {children}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginLeft: 3,
    marginBottom: 13,
    fontSize: 15,
    fontWeight: '600',
  },
  children: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
})
