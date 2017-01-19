import React, { PureComponent, PropTypes } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import ThemeConstants from '../utils/ThemeConstants'
import themeable from '../utils/themeable'

class Label extends PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired,
    styles: PropTypes.object.isRequired,
  }

  render() {
    const { text, styles } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    )
  }
}

const baseStyles = StyleSheet.create({
  container: {
    flex: 0,
    marginRight: 5,
    ...Platform.select({
      ios: {
        paddingTop: 2,
      },
      android: {
        paddingTop: 1,
      },
    }),
    paddingRight: 5,
    paddingBottom: 2,
    paddingLeft: 5,
    borderRadius: 3,
    height: 20,
    overflow: 'hidden',
  },
  text: {
    color: '#fff',
    fontSize: 12,
  },
})

const primary = StyleSheet.create({
  container: { backgroundColor: ThemeConstants.PRIMARY },
})

const alert = StyleSheet.create({
  container: { backgroundColor: ThemeConstants.ALERT },
})

const warning = StyleSheet.create({
  container: { backgroundColor: ThemeConstants.WARNING },
})

const success = StyleSheet.create({
  container: { backgroundColor: ThemeConstants.SUCCESS },
})

const black = StyleSheet.create({
  container: { backgroundColor: ThemeConstants.BLACK },
})

export default themeable('Label', baseStyles, {
  alert,
  warning,
  success,
  primary,
  black,
})(Label)
