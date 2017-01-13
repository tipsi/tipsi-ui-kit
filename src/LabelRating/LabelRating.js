import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import StylePropType from '../utils/StylePropType'
import ColorPallete from '../utils/ColorPallete'

export default class LabelRating extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    style: StylePropType,
    titleStyle: StylePropType,
    ratingStyle: StylePropType,
  }

  static defaultProps = {
    rating: 0,
    style: {},
    titleStyle: {},
    ratingStyle: {},
  }

  render() {
    const {
      title,
      rating,
      style,
      titleStyle,
      ratingStyle,
    } = this.props

    const containerStyles = [styles.container, style]
    const titleContainerStyles = [styles.titleContainer]
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
        <View
          style={ratingContainerStyles}>
          <Text
            style={ratingTextStyles}>
            {rating}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    padding: 2,
    margin: 3,
    backgroundColor: ColorPallete.RED,
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  titleContainer: {
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 4,
    paddingRight: 4,
    marginRight: 2,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 18,
    color: 'white',
  },
  ratingsContainer: {
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingsText: {
    fontSize: 18,
    color: ColorPallete.TEXTCOLOR,
  },
})
