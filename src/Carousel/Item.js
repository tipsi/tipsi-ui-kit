import React, { Component, PropTypes } from 'react'
import { View, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import StylePropType from '../utils/StylePropType'

export default class CarouselItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    active: PropTypes.bool,
    onPress: PropTypes.func,
    onRemove: PropTypes.func,
    style: StylePropType,
    activeStyle: StylePropType,
  }

  render() {
    const {
      children,
      active,
      onRemove,
      onPress,
      style,
      activeStyle,
      ...rest
    } = this.props
    const isAndroid = Platform.OS === 'android'
    const Container = onPress ? TouchableOpacity : View
    const remove = (
      <TouchableOpacity style={styles.remove} onPress={onRemove}>
        <View style={styles.removeCircle} />
        <Icon name="times-circle" style={styles.removeIcon} />
      </TouchableOpacity>
    )
    const item = (
      <Container
        style={[styles.container, style]}
        onPress={onPress}
        {...rest}>
        {active &&
          <View style={[styles.active, activeStyle]} />
        }
        {!isAndroid && onRemove && remove}
        {children}
      </Container>
    )

    if (isAndroid && onRemove) {
      return (
        <View style={styles.gap}>
          {item}
          {remove}
        </View>
      )
    }

    return item
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minWidth: 20,
    minHeight: 20,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#dadada',
    backgroundColor: 'white',
    marginHorizontal: 4,
    position: 'relative',
  },
  active: {
    position: 'absolute',
    top: -1,
    left: -1,
    right: -1,
    height: 3,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    backgroundColor: '#742948',
  },
  remove: {
    position: 'absolute',
    top: -9,
    right: Platform.select({ ios: -7, android: -3 }),
    backgroundColor: 'transparent',
  },
  removeIcon: {
    color: '#742948',
    fontSize: 20,
  },
  removeCircle: {
    top: 2,
    width: 17,
    height: 17,
    position: 'absolute',
    borderRadius: 50,
    backgroundColor: 'white',
  },
  gap: {
    marginTop: Platform.select({ ios: 0, android: 8 }),
  },
})
