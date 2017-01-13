import React, { Component, PropTypes } from 'react'
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from 'react-native'
// import StylePropType from '../utils/StylePropType'

export default class TabItem extends Component {
  static propTypes = {
    id: PropTypes.string,
    active: PropTypes.bool,
    color: PropTypes.string,
    name: PropTypes.string,
    onPress: PropTypes.func,
  }

  static defaultProps = {
    active: false,
    onPess: () => (console.log('onPess')),
  }

  constructor(props) {
    super(props)
    this.state = {
      currentStyle: props.active ? styles.tabContainerActive : styles.tabContainer,
      active: props.active,
    }
    console.log('constructor state ' + this.state)
  }

  handlePress = () => {
    // this.setState({ active: true })
    this.props.onPress(this.props.id)
  }

  render() {
    const {
      color,
      name,
    } = this.props

    console.log('item render ' + this.props.id + ' ' + this.state.active + ' ' + this.props.active)
    // this.setState({ active: this.props.active })

    return (
      <TouchableWithoutFeedback
        onPress={this.handlePress}>
        <View
          style={[
            this.props.active ? styles.tabContainerActive : styles.tabContainer,
               { backgroundColor: color },
          ]}>
          <Text style={styles.text}>{name.toUpperCase()}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  tabContainer: {
    margin: -5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  tabContainerActive: {
    margin: -5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    zIndex: 1,
  },
  text: {
    textAlign: 'center',
    color: 'white',
    padding: 8,
    fontWeight: '500',
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
