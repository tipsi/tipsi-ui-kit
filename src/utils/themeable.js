import { StyleSheet } from 'react-native'
import ThemesRegister from './ThemesRegister'
import mapValues from './mapValues'
import memoize from './memoize'

function createStylesResolver(themes = {}) {
  return (type = {}) => {
    if (typeof type === 'string') {
      return themes[type] || {}
    }
    return type
  }
}

function extendStyles(baseStyles, ...nextStyles) {
  return mapValues(baseStyles, (style, name) => (
    StyleSheet.flatten(
      [style, ...nextStyles.map(type => type[name])]
    )
  ))
}

export default function themeable(namespace, base, themes = {}) {
  const nextBase = extendStyles(base, ThemesRegister.get(namespace))
  const nextThemes = mapValues(themes, (themeStyles, name) => (
    extendStyles(themeStyles, ThemesRegister.get(`${namespace}.${name}`))
  ))
  const stylesResover = createStylesResolver(nextThemes)
  function createStyles(...styles) {
    const nextTypes = styles.map(stylesResover)
    return extendStyles(nextBase, ...nextTypes)
  }
  return memoize(createStyles)
}
