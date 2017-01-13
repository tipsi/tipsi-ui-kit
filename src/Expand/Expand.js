import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Expand extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.node,
    defaultExpanded: PropTypes.bool,
  }

  static defaultProps = {
    expanded: false,
  }
  constructor(props) {
    super(props)
    this.state = { expanded: props.defaultExpanded }
  }

  onPress = () => {
    this.setState(
      { expanded: !this.state.expanded }
    )
  }

  render() {
    const { title, description, children } = this.props
    const { expanded } = this.state
    const iconName = expanded ? 'chevron-up' : 'chevron-down'

    return (
      <TouchableOpacity onPress={this.onPress} activeOpacity={1}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text numberOfLines={1}>
              {title}
            </Text>
            <Icon
              name={iconName}
              color="#9FADBA"
            />
          </View>
          {description &&
            <View style={styles.descriptionContainer}>
              <Text numberOfLines={expanded ? 0 : 1}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 3,
    marginRight: 3,
  },
  titleContainer: {
    marginBottom: 5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  descriptionContainer: {
    marginBottom: 5,
  },
  children: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
})
