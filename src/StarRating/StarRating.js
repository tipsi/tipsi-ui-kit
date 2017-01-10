import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import StarButton from './StarButton'

const range = [0, 1, 2, 3, 4]

export default class StarRating extends Component {
  static propTypes = {
    size: PropTypes.number,
    count: PropTypes.number,
    rating: PropTypes.number,
  }

  static defaultProps = {
    size: 20,
    rating: 0,
    disableCount: false,
  }

  render() {
    const { size, count, rating } = this.props

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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
})
