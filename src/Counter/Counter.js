import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class Counter extends Component {
  static propTypes = {
    startValue: PropTypes.number,
    step: PropTypes.number,
    onValueChange: PropTypes.func,
  }

  static defaultProps = {
    startValue: 1,
    step: 1,
    onValueChange: value => (console.log(value)),
  }

  state = { count: this.props.startValue }

  onPressPlus = () => {
    const newCount = this.state.count + this.props.step
    this.setState({ count: newCount })
    this.props.onValueChange(newCount)
  }

  onPressMinus = () => {
    const newCount = this.state.count - this.props.step
    this.setState({ count: newCount })
    this.props.onValueChange(newCount)
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onPressMinus}>
          <Text style={[styles.item, styles.left]}>
            -
          </Text>
        </TouchableOpacity>
        <Text style={[styles.item, styles.center]}>
          {this.state.count}
        </Text>
        <TouchableOpacity onPress={this.onPressPlus}>
          <Text style={[styles.item, styles.right]}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    width: 40,
    height: 40,
    fontSize: 20,
    borderWidth: 2,
    borderColor: 'gainsboro',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  center: {
    width: 80,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  left: {
    fontSize: 30,
    borderBottomLeftRadius: 3,
    borderTopLeftRadius: 3,
    backgroundColor: 'aliceblue',
  },
  right: {
    fontSize: 27,
    borderBottomRightRadius: 3,
    borderTopRightRadius: 3,
    backgroundColor: 'aliceblue',
  },
})
