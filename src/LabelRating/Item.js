import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import StylePropType from '../utils/StylePropType'

export default class Item extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    rating: PropTypes.string,
    style: StylePropType,
    titleStyle: StylePropType,
    ratingStyle: StylePropType,
  }

  render() {
    const {
      title,
      rating,
      style,
      titleStyle,
      ratingStyle,
    } = this.props

    const isRatingAvailable = rating && rating.length > 0

    const containerStyles = [styles.container, style]

    const titleContainerStyles = [styles.titleContainer]
    if (isRatingAvailable) {
      titleContainerStyles.push(styles.titleContainerRightSpace)
    }

    const titleTextStyles = [styles.titleText, titleStyle]
    const ratingContainerStyles = [styles.ratingsContainer]
    const ratingTextStyles = [styles.ratingsText, ratingStyle]

    return (
      <View
        style={containerStyles}>
        <View
          style={titleContainerStyles}>
          <Text
            style={titleTextStyles}>
            {title}
          </Text>
        </View>
        {isRatingAvailable &&
          <View
            style={ratingContainerStyles}>
            <Text
              style={ratingTextStyles}>
              {rating}
            </Text>
          </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    padding: 2,
    margin: 3,
    flexDirection: 'row',
    backgroundColor: '#D0011B',
  },
  titleContainer: {
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 4,
    paddingRight: 4,
    backgroundColor: 'transparent',
  },
  titleContainerRightSpace: {
    marginRight: 2,
  },
  titleText: {
    fontSize: 22,
    color: '#FFFFFF',
  },
  ratingsContainer: {
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: 'white',
  },
  ratingsText: {
    fontSize: 22,
    color: '#4A4A4A',
  },
})
