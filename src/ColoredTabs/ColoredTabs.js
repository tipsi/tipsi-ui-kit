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

  constructor(props) {
    super(props)
    this.state = { selected: props.selected, children: props.children }
  }

  handleTabPress = (id) => {
    this.setState({
      selected: id,
    })
    this.props.onPress(id)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tabContainer}>
          {Children.map(this.props.children.filter(c => c), child => (
            child.props.id === this.state.selected ?
              cloneElement(child, { active: true, onPress: this.handleTabPress }) :
              cloneElement(child, { active: false, onPress: this.handleTabPress })
          ))}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContainer: {
    height: 60,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
})
