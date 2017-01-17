import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import themeable from '../utils/themeable'
import Item from './Item'

class Tags extends Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
    styles: PropTypes.object,
  }

  static defaultProps = {
    theme: 'light',
  }

  static Item = Item

  render() {
    const { title, children, styles } = this.props

    return (
      <View style={styles.container}>
        {title &&
          <Text style={styles.title}>
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

const baseStyles = StyleSheet.create({
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

const dark = StyleSheet.create({
  title: { color: 'white' },
})

export default themeable(
  'Tags',
  baseStyles,
  { dark }
)(Tags)
