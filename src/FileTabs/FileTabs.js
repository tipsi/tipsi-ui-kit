import React, { Component, PropTypes, Children, cloneElement } from 'react'
import { View, StyleSheet } from 'react-native'
import Item from './Item'
import ThemeConstants from '../utils/ThemeConstants'
import themeable from '../utils/themeable'

class FileTabs extends Component {
  static propTypes = {
    children: PropTypes.node,
    selected: PropTypes.string,
    onPress: PropTypes.func,
    styles: PropTypes.object,
  }

  static defaultProps = {
    onPress: () => {},
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
    const { styles } = this.props
    return (
      <View style={styles.container}>
        {Children.map(this.props.children, child => cloneElement(child, {
          active: child.props.id === this.state.selected,
          onPress: this.handleTabPress,
        }))}
      </View>
    )
  }
}

const baseStyles = StyleSheet.create({
  container: {
    height: 60,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
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
})(FileTabs)
