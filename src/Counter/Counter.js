import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import themeable from '../utils/themeable'

class Counter extends Component {
  static propTypes = {
    startValue: PropTypes.number,
    step: PropTypes.number,
    onValueChange: PropTypes.func,
    styles: PropTypes.object,
  }

  static defaultProps = {
    startValue: 1,
    step: 1,
    onValueChange: () => {},
  }

  state = {
    count: this.props.startValue,
  }

  onPress = (step) => {
    const count = this.state.count + step
    this.setState({ count })
    this.props.onValueChange(count)
  }

  onPressPlus = () => this.onPress(this.props.step)

  onPressMinus = () => this.onPress(-this.props.step)

  render() {
    const { styles } = this.props

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onPressMinus} style={[styles.item, styles.left]}>
          <Text style={styles.expText}>
            -
          </Text>
        </TouchableOpacity>
        <View style={[styles.item, styles.center]}>
          <Text style={styles.centerText}>
            {this.state.count}
          </Text>
        </View>
        <TouchableOpacity onPress={this.onPressPlus} style={[styles.item, styles.right]}>
          <Text style={styles.expText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: 'gainsboro',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'aliceblue',
  },
  center: {
    width: 80,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    backgroundColor: '#ffffff',
  },
  left: {
    borderBottomLeftRadius: 3,
    borderTopLeftRadius: 3,
  },
  right: {
    borderBottomRightRadius: 3,
    borderTopRightRadius: 3,
  },
  expText: {
    fontSize: 25,
    lineHeight: 25,
    textAlign: 'center',
    // Temporary solution for an Android.
    // https://github.com/facebook/react-native/issues/7546
    // https://github.com/facebook/react-native/issues/10712
    marginBottom: Platform.select({
      ios: 0,
      android: 5,
    }),
  },
  centerText: {
    fontSize: 25,
    textAlign: 'center',
  },
})

export default themeable(
  'Counter',
  baseStyles,
)(Counter)
