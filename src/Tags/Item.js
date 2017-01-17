import React, { Component, PropTypes } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import ThemeConstants from '../utils/ThemeConstants'
import themeable from '../utils/themeable'

class TagsItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    active: PropTypes.bool,
    styles: PropTypes.object,
    onPress: PropTypes.func,
  }

  static defaultProps = {
    active: false,
    theme: 'light',
  }

  render() {
    const { name, active, styles, onPress } = this.props
    const containerStyles = [styles.container]
    const nameStyles = [styles.name]

    if (active) {
      containerStyles.push(styles.active)
      nameStyles.push(styles.activeName)
    }

    return (
      <TouchableOpacity onPress={onPress}>
        <View style={containerStyles}>
          <Text style={nameStyles}>
            {name}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const baseStyles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 14,
    paddingRight: 14,
    margin: 3,
    borderWidth: ThemeConstants.BOX_BORDER_WIDTH,
    borderRadius: ThemeConstants.BOX_BORDER_RADIUS,
    borderColor: ThemeConstants.LIGHT_GRAY,
    backgroundColor: '#ffffff',
  },
  active: {
    backgroundColor: '#742948',
  },
  name: {
    fontWeight: '600',
    color: '#4a4a4a',
  },
  activeName: {
    color: 'white',
  },
})

const dark = StyleSheet.create({
  container: { backgroundColor: '#82909d' },
  name: { color: 'white' },
})

export default themeable(
  'TagsItem',
  baseStyles,
  { dark }
)(TagsItem)
