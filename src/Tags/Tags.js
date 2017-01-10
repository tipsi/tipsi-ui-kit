import React, { Component, PropTypes, Children, cloneElement } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import StylePropType from '../utils/StylePropType'
import Item from './Item'

export default class Tags extends Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
    theme: PropTypes.oneOf(['light', 'dark']),
    style: StylePropType,
    titleStyle: StylePropType,
  }

  static defaultProps = {
    theme: 'light',
  }

  static Item = Item

  render() {
    const { title, children, theme, style, titleStyle } = this.props

    return (
      <View style={[styles.container, style]}>
        {title &&
          <Text
            style={[
              styles.title,
              theme === 'dark' && styles.titleDark,
              titleStyle,
            ]}>
            {title}
          </Text>
        }
        <View style={styles.children}>
          {Children.map(children, child => cloneElement(child, { theme }))}
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
  titleDark: {
    color: 'white',
  },
  children: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
})
