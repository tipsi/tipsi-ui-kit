import React, { Component, PropTypes } from 'react'
import { View, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import ThemeConstants from '../utils/ThemeConstants'
import themeable from '../utils/themeable'

class CarouselItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    active: PropTypes.bool,
    onPress: PropTypes.func,
    onRemove: PropTypes.func,
    styles: PropTypes.object,
  }

  render() {
    const {
      children,
      active,
      onRemove,
      onPress,
      styles,
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
        style={styles.container}
        onPress={onPress}
        {...rest}>
        {active &&
          <View style={styles.active} />
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

const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
    minWidth: 20,
    minHeight: 20,
    borderWidth: ThemeConstants.BOX_BORDER_WIDTH,
    borderRadius: ThemeConstants.BOX_BORDER_RADIUS,
    borderColor: ThemeConstants.LIGHT_GRAY,
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
    borderTopLeftRadius: ThemeConstants.BOX_BORDER_RADIUS,
    borderTopRightRadius: ThemeConstants.BOX_BORDER_RADIUS,
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

export default themeable(
  'CarouselItem',
  baseStyles
)(CarouselItem)
