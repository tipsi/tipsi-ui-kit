import React, { Component, PropTypes } from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'

export default class ColoredTabsItem extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    active: PropTypes.bool,
    color: PropTypes.string,
    name: PropTypes.string.isRequired,
    onPress: PropTypes.func,
  }

  static defaultProps = {
    active: false,
    onPess: () => {},
  }

  handlePress = () => {
    this.props.onPress(this.props.id)
  }

  render() {
    const {
      color,
      name,
      active,
    } = this.props

    const containerStyles = [
      styles.container,
      { backgroundColor: color },
      active && styles.active,
    ]

    return (
      <TouchableWithoutFeedback
        onPress={this.handlePress}>
        <View
          style={containerStyles}>
          <Text style={styles.text}>{name}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: -5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  active: {
    height: 50,
    zIndex: 1,
  },
  text: {
    textAlign: 'center',
    color: 'white',
    padding: 8,
    fontWeight: '500',
  },
})
