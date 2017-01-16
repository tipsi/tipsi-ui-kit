import React, { Component, PropTypes } from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'

export default class Item extends Component {
  static propTypes = {
    id: PropTypes.string,
    active: PropTypes.bool,
    color: PropTypes.string,
    name: PropTypes.string,
    onPress: PropTypes.func,
  }

  static defaultProps = {
    active: false,
    onPess: () => (console.log('onPess')),
  }

  handlePress = () => {
    this.props.onPress(this.props.id)
  }

  render() {
    const {
      color,
      name,
    } = this.props

    return (
      <TouchableWithoutFeedback
        onPress={this.handlePress}>
        <View
          style={[
            this.props.active ? styles.tabContainerActive : styles.tabContainer,
               { backgroundColor: color },
          ]}>
          <Text style={styles.text}>{name.toUpperCase()}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  tabContainer: {
    margin: -5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  tabContainerActive: {
    margin: -5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
