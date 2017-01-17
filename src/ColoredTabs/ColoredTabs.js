import React, { Component, PropTypes, Children, cloneElement } from 'react'
import { View, StyleSheet } from 'react-native'
import Item from './Item'

export default class ColoredTabs extends Component {
  static propTypes = {
    children: PropTypes.node,
    selected: PropTypes.string,
    onPress: PropTypes.func,
  }

  static Item = Item

  state = { selected: this.props.selected }

  handleTabPress = (id) => {
    this.setState({
      selected: id,
    })
    this.props.onPress(id)
  }

  render() {
    return (
      <View style={styles.wrapper}>
        {Children.map(this.props.children, child => cloneElement(child, {
          active: child.props.id === this.state.selected,
          onPress: this.handleTabPress,
        }))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: 60,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
})
