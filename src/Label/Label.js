import React, { PureComponent, PropTypes } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import Svg, { LinearGradient, Rect, Defs, Stop } from 'react-native-svg'
import ThemeConstants from '../utils/ThemeConstants'
import themeable from '../utils/themeable'

class Label extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    styles: PropTypes.object.isRequired,
    colors: PropTypes.array,
  }

  static defaultProps = {
    colors: [],
  }

  render() {
    const { title, styles, colors, ...rest } = this.props
    const isGradientColors = Boolean(colors.length)
    const backgroundOnGradient = isGradientColors ? { backgroundColor: 'transparent' } : {}
    return (
      <View style={[styles.container, backgroundOnGradient]} {...rest}>
        {isGradientColors &&
          <Svg style={styles.gradientBackground}>
            <Defs>
              <LinearGradient id="grad" x1="50%" y1="0%" x2="50%" y2="100%">
                {colors.map((item, index) => (
                  <Stop offset={index.toString()} stopColor={item} key={item} />
                ))}
              </LinearGradient>
            </Defs>
            <Rect x="0" cy="0" width="100%" height="100%" rx="4" fill="url(#grad)" />
          </Svg>
        }
        <Text style={styles.title}>{title}</Text>
      </View>
    )
  }
}

const baseStyles = StyleSheet.create({
  container: {
    flex: 0,
    marginRight: 5,
    paddingTop: Platform.OS === 'ios' ? 2 : 1,
    paddingRight: 5,
    paddingBottom: 2,
    paddingLeft: 5,
    borderRadius: ThemeConstants.BOX_BORDER_RADIUS,
    height: 20,
    overflow: 'hidden',
    backgroundColor: ThemeConstants.SECONDARY,
  },
  title: {
    color: ThemeConstants.WHITE,
    fontSize: 12,
  },
  gradientBackground: {
    height: 20,
    left: 0,
    right: 0,
    position: 'absolute',
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

const black = StyleSheet.create({
  container: { backgroundColor: ThemeConstants.BLACK },
})

export default themeable('Label', baseStyles, {
  alert,
  warning,
  success,
  primary,
  black,
})(Label)
