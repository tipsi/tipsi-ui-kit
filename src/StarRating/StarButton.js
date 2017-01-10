import React, { Component, PropTypes } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class StarButton extends Component {
  static propTypes = {
    size: PropTypes.number,
    fullness: PropTypes.number,
  }

  render() {
    const { size, fullness } = this.props

    let name = 'star'

    if (fullness < 0.5) {
      name = 'star-o'
    }
    if (fullness === 0.5) {
      name = 'star-half-o'
    }

    return (
      <Icon
        name={name}
        size={size}
        color="#f9cb00"
      />
    )
  }
}
