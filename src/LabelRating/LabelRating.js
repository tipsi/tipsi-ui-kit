import React, { PureComponent, PropTypes } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ThemeConstants from '../utils/ThemeConstants'
import themeable from '../utils/themeable'

class LabelRating extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    styles: PropTypes.object,
  }

  static defaultProps = {
    rating: 0,
  }

  render() {
    const { title, rating, styles } = this.props

    return (
      <View
        style={styles.container}>
        <View
          style={styles.titleWrapper}>
          <Text
            style={styles.titleText}>
            {title}
          </Text>
        </View>
        <View
          style={styles.ratingWrapper}>
          <Text
            style={styles.ratingText}>
            {rating}
          </Text>
        </View>
      </View>
    )
  }
}

const baseStyles = StyleSheet.create({
  container: {
    borderRadius: 3,
    padding: 2,
    margin: 3,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: ThemeConstants.SECONDARY,
  },
  titleWrapper: {
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
  ratingWrapper: {
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: ThemeConstants.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingText: {
    fontSize: 18,
    color: ThemeConstants.MEDIUM_GRAY,
  },
})

const primary = StyleSheet.create({
  container: { backgroundColor: ThemeConstants.PRIMARY },
})

const alert = StyleSheet.create({
  container: { backgroundColor: ThemeConstants.ALERT },
})

const warning = StyleSheet.create({
  container: { backgroundColor: ThemeConstants.WARNING },
})

const success = StyleSheet.create({
  container: { backgroundColor: ThemeConstants.SUCCESS },
})

export default themeable('LabelRating', baseStyles, {
  alert,
  warning,
  success,
  primary,
})(LabelRating)
