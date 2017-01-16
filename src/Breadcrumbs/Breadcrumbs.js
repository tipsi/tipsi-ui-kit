import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { StylePropType } from '../utils/CustomPropTypes'

export default class Breadcrumbs extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.string),
    separatorFirst: PropTypes.bool,
    style: StylePropType,
    itemStyle: StylePropType,
    underlineStyle: StylePropType,
    separatorStyle: StylePropType,
  }

  static defaultProps = {
    separatorFirst: false,
  }

  render() {
    const { items, separatorFirst, style, itemStyle, underlineStyle, separatorStyle } = this.props

    return (
      <View style={[styles.container, style]}>
        {separatorFirst &&
          <Icon
            name="angle-right"
            color="#9399a5"
            size={20}
            style={[styles.separator, styles.separatorFirst, separatorStyle]}
          />
        }
        {items.map((item, key) => (
          <View key={key} style={styles.item}>
            <View>
              <Text
                key={key}
                style={[styles.text, itemStyle]}>
                {item.toUpperCase()}
              </Text>
              <View style={[styles.underline, underlineStyle]} />
            </View>
            {key < items.length - 1 &&
              <Icon
                name="angle-right"
                color="#9399a5"
                size={20}
                style={[styles.separator, separatorStyle]}
              />
            }
          </View>
        ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  item: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
  },
  underline: {
    alignSelf: 'center',
    width: 20,
    height: 3,
    marginTop: 3,
    borderRadius: 5,
    backgroundColor: '#742948',
  },
  separator: {
    marginTop: Platform.select({
      ios: -2,
      android: 0,
    }),
    marginLeft: 10,
    marginRight: 10,
  },
  separatorFirst: {
    marginLeft: 5,
  },
})
