import React, { Component, PropTypes } from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import ThemeConstants from '../utils/ThemeConstants'
import themeable from '../utils/themeable'

class FileTabsItem extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    active: PropTypes.bool,
    color: PropTypes.string,
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func,
    styles: PropTypes.object,
  }

  static defaultProps = {
    active: false,
    color: undefined,
    onPress: () => {},
    styles: {},
  }

  handlePress = () => {
    this.props.onPress(this.props.id)
  }

  render() {
    const {
      color,
      title,
      active,
      styles,
    } = this.props

    const containerStyles = [
      styles.container,
      color && { backgroundColor: color },
      active && styles.active,
    ]

    return (
      <TouchableWithoutFeedback
        onPress={this.handlePress}>
        <View
          style={containerStyles}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const baseStyles = StyleSheet.create({
  container: {
    margin: -5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: ThemeConstants.SECONDARY,
  },
  active: {
    height: 50,
    zIndex: 1,
  },
  text: {
    textAlign: 'center',
    color: 'white',
    padding: 8,
    fontSize: 20,
    fontWeight: 'bold',
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

export default themeable('FileTabsItem', baseStyles, {
  alert,
  warning,
  success,
  primary,
  black,
})(FileTabsItem)
