import React, { Component, PropTypes } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import StylePropType from '../utils/StylePropType'

export default class TagsItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    active: PropTypes.bool,
    theme: PropTypes.oneOf(['light', 'dark']),
    style: StylePropType,
    nameStyle: StylePropType,
    activeStyle: StylePropType,
    activeNameStyle: StylePropType,
    onPress: PropTypes.func,
  }

  static defaultProps = {
    active: false,
    theme: 'light',
  }

  render() {
    const {
      name,
      active,
      theme,
      style,
      nameStyle,
      activeStyle,
      activeNameStyle,
      onPress,
    } = this.props
    const themeStyles = themes[theme]
    const containerStyles = [...themeStyles.container, style]
    const nameStyles = [...themeStyles.name, nameStyle]

    if (active) {
      containerStyles.push(themeStyles.active, activeStyle)
      nameStyles.push(themeStyles.activeName, activeNameStyle)
    }

    return (
      <TouchableOpacity onPress={onPress}>
        <View
          style={containerStyles}>
          <Text
            style={nameStyles}>
            {name}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 14,
    paddingRight: 14,
    margin: 3,
  },
  containerDark: {
    backgroundColor: '#82909d',
  },
  containerLight: {
    borderWidth: 1,
    borderColor: '#dadada',
    backgroundColor: '#ffffff',
  },
  active: {
    backgroundColor: '#742948',
  },
  name: {
    fontWeight: '600',
  },
  nameDark: {
    color: 'white',
  },
  nameLight: {
    color: '#4a4a4a',
  },
  activeNameLight: {
    color: 'white',
  },
})

const themes = {
  light: {
    container: [styles.container, styles.containerLight],
    name: [styles.name, styles.nameLight],
    active: [styles.active],
    activeName: [styles.activeNameLight],
  },
  dark: {
    container: [styles.container, styles.containerDark],
    name: [styles.name, styles.nameDark],
    active: [styles.active],
    activeName: [],
  },
}
