import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import hoistStatics from 'hoist-non-react-statics'
import { ThemePropType } from './CustomPropTypes'
import getComponentName from './getComponentName'
import ThemesRegister from './ThemesRegister'
import mapValues from './mapValues'
import memoize from './memoize'

function extendStyles(baseStyles, ...otherStyles) {
  const nextStyles = otherStyles.filter(style => style)
  return mapValues(baseStyles, (style, name) => (
    StyleSheet.flatten(
      [style, ...nextStyles.map(type => type[name])]
    )
  ))
}

function resolvePassedThemes(passedThemes) {
  if (Array.isArray(passedThemes)) {
    return passedThemes
  } else if (typeof passedThemes === 'string') {
    return passedThemes.split(' ')
  } else if (typeof passedThemes === 'object') {
    return [passedThemes]
  }
  return []
}

function themeable(namespace, base, themes) {
  const registerBase = ThemesRegister.getBase(namespace)
  const registerThemes = ThemesRegister.getThemes(namespace)
  function createStyles(passedThemes) {
    const resolvedThemes = resolvePassedThemes(passedThemes)
    const styles = [base, registerBase]
    resolvedThemes.forEach((theme) => {
      if (typeof theme === 'string') {
        styles.push(
          themes[theme],
          registerThemes[theme]
        )
      } else {
        styles.push(theme)
      }
    })
    return extendStyles(...styles)
  }
  return memoize(createStyles)
}

export default (namespace, baseStyles, themes) => {
  const createStyles = themeable(namespace, baseStyles, themes)

  return (WrappedComponent) => {
    const displayName = getComponentName(WrappedComponent)

    class ThemedComponent extends Component {
      static propTypes = {
        theme: ThemePropType,
      }

      static displayName = `Themed(${displayName})`;

      render() {
        const { theme, ...rest } = this.props

        return (
          <WrappedComponent
            {...rest}
            styles={createStyles(theme)}
          />
        )
      }
    }

    return hoistStatics(
      ThemedComponent,
      WrappedComponent
    )
  }
}
