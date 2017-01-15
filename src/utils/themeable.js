import { StyleSheet } from 'react-native'

function memoize(func) {
  const memo = {}
  return (...args) => {
    const result = memo[args]
    if (result) {
      return result
    }
    return (memo[args] = func(...args))
  }
}

function createTypeResolver(themes = {}) {
  return (type = {}) => {
    if (typeof type === 'string') {
      return themes[type] || {}
    }
    return type
  }
}

export default function themeable(main, themes = {}) {
  const typeResover = createTypeResolver(themes)
  function createStyles(...types) {
    const styles = {}
    const nextTypes = types.map(typeResover)
    Object.keys(main).forEach(
      (name) => {
        styles[name] = StyleSheet.flatten(
          [main[name], ...nextTypes.map(type => type[name])]
        )
      }
    )
    return styles
  }
  return memoize(createStyles)
}
