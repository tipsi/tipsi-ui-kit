import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import themeable from '../utils/themeable'
import ThemeConstants from '../utils/ThemeConstants'

class Expand extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    children: PropTypes.node,
    defaultExpanded: PropTypes.bool,
    icon: PropTypes.object,
    expandedIcon: PropTypes.object,
    styles: PropTypes.object,
  }

  static defaultProps = {
    description: '',
    children: null,
    defaultExpanded: false,
    icon: { name: 'chevron-down', color: ThemeConstants.LIGHT_GRAY, size: 12 },
    expandedIcon: { name: 'chevron-up', color: ThemeConstants.LIGHT_GRAY, size: 12 },
    styles: null,
  }

  state = { expanded: this.props.defaultExpanded }

  onPress = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    const { title, description, children, styles, icon, expandedIcon } = this.props
    const { expanded } = this.state
    const disclosureIndicator = expanded ? <Icon {...expandedIcon} /> : <Icon {...icon} />
    return (
      <TouchableOpacity onPress={this.onPress} activeOpacity={1}>
        <View style={styles.container}>
          <View style={styles.titleWrapper}>
            <Text
              numberOfLines={1}
              style={styles.titleText}>
              {title}
            </Text>
            {disclosureIndicator}
          </View>
          {Boolean(description) &&
            <View style={styles.descriptionWrapper}>
              <Text
                numberOfLines={expanded ? 0 : 1}
                style={styles.descriptionText}>
                {description}
              </Text>
            </View>
          }
          {expanded && children}
        </View>
      </TouchableOpacity>
    )
  }
}

const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 3,
    marginRight: 3,
  },
  titleWrapper: {
    marginBottom: 5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: 14,
  },
  descriptionText: {
    fontSize: 14,
  },
  descriptionWrapper: {
    marginBottom: 5,
  },
})

export default themeable(
  'Expand',
  baseStyles,
)(Expand)
