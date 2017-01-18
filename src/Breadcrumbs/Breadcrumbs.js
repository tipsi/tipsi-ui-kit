import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import themeable from '../utils/themeable'

class Breadcrumbs extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.string),
    separatorFirst: PropTypes.bool,
    styles: PropTypes.object,
  }

  static defaultProps = {
    separatorFirst: false,
  }

  render() {
    const { items, separatorFirst, styles } = this.props

    return (
      <View style={styles.container}>
        {separatorFirst &&
          <Icon
            name="angle-right"
            color="#9399a5"
            size={20}
            style={[styles.separator, styles.separatorFirst]}
          />
        }
        {items.map((item, key) => (
          <View key={key} style={styles.item}>
            <View>
              <Text
                key={key}
                style={styles.text}>
                {item.toUpperCase()}
              </Text>
              <View style={styles.underline} />
            </View>
            {key < items.length - 1 &&
              <Icon
                name="angle-right"
                color="#9399a5"
                size={20}
                style={styles.separator}
              />
            }
          </View>
        ))}
      </View>
    )
  }
}

const baseStyles = StyleSheet.create({
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

export default themeable(
  'Breadcrumbs',
  baseStyles
)(Breadcrumbs)
