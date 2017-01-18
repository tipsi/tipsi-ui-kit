import React, { Component } from 'react'
import hoistStatics from 'hoist-non-react-statics'
import { ThemePropType, StylePropType } from './CustomPropTypes'
import getComponentName from './getComponentName'
import ThemeRegister from './ThemeRegister'
import mapValues from './mapValues'
import memoize from './memoize'

function extendStyles(baseStyles, ...otherStyles) {
  const nextStyles = otherStyles.filter(style => style)
  return mapValues(baseStyles, (style, name) => (
    [style, ...nextStyles.map(type => type[name])]
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

function themeable(namespace, base, themes, options) {
  const registerBase = ThemeRegister.getBase(namespace)
  const registerThemes = ThemeRegister.getThemes(namespace)
  function createStyles(passedThemes, style) {
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
    if (style) {
      styles.push({ [options.styleContainer]: style })
    }
    return extendStyles(...styles)
  }
  return memoize(createStyles)
}

const defaultOptions = {
  styleContainer: 'container',
}

export default (namespace, baseStyles, themes = {}, options = defaultOptions) => {
  const createStyles = themeable(namespace, baseStyles, themes, options)

  return (WrappedComponent) => {
    const displayName = getComponentName(WrappedComponent)

    class ThemedComponent extends Component {
      static propTypes = {
        theme: ThemePropType,
        style: StylePropType,
      }

      static displayName = `Themed(${displayName})`

      render() {
        const { theme, style, ...rest } = this.props

        return (
          <WrappedComponent
            {...rest}
            styles={createStyles(theme, style)}
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
