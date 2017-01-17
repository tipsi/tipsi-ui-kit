import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import StarButton from './StarButton'
import themeable from '../utils/themeable'

const range = [0, 1, 2, 3, 4]

class StarRating extends Component {
  static propTypes = {
    size: PropTypes.number,
    count: PropTypes.number,
    rating: PropTypes.number,
    styles: PropTypes.object,
  }

  static defaultProps = {
    size: 20,
    rating: 0,
  }

  render() {
    const { size, count, rating, styles } = this.props

    return (
      <View style={styles.container}>
        {range.map(position => (
          <StarButton
            key={position}
            size={size}
            fullness={rating - position}
          />
        ))}
        {typeof count === 'number' &&
          <Text
            style={{
              fontSize: size,
              paddingLeft: (5 * size) / 20,
            }}>
            {count}
          </Text>
        }
      </View>
    )
  }
}

const baseStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
})

export default themeable(
  'StarRating',
  baseStyles
)(StarRating)
