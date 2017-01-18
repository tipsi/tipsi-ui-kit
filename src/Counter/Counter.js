import React, { Component, PropTypes, Children, cloneElement } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class Counter extends Component {
  static propTypes = {
    startValue: PropTypes.number,
    step: PropTypes.number,
    onValueChange: PropTypes.func,
    // title: PropTypes.string,
    // children: PropTypes.node,
    // theme: PropTypes.oneOf(['light', 'dark']),
    // style: StylePropType,
    // titleStyle: StylePropType,
  }

  static defaultProps = {
    startValue: 1,
    step: 1,
    onValueChange: value => (console.log(value)),
  }

  state = { count: this.props.startValue }

  onPressPlus = () => {
    this.setState({ count: this.state.count + this.props.step })
    this.props.onValueChange(this.state.count)
  }

  onPressMinus = () => {
    this.setState({ count: this.state.count - this.props.step })
    this.props.onValueChange(this.state.count)
  }

  render() {
    // const { title, children, theme, style, titleStyle } = this.props

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
    // justifyContent: 'space-around',
    // alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    width: 40,
    height: 40,
    // padding: 10,
    fontSize: 20,
    borderWidth: 2,
    borderColor: 'gainsboro',
    textAlignVertical: 'center',
    // justifyContent: 'space-around',
    // alignItems: 'center',
    textAlign: 'center',
  },
  center: {
    width: 80,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    // justifyContent: 'space-around',
    // alignItems: 'center',
    // textAlign: 'center',
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
