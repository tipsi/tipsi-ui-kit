function extractBaseName(namespace) {
  return namespace.split('.')[0]
}

function extractThemeName(namespace) {
  return namespace.replace(/(.*?)\./, '')
}

export default {
  themes: {},
  set(themes) {
    this.themes = themes
  },
  get(namespace) {
    return this.themes[namespace] || {}
  },
  getBase(namespace) {
    const name = extractBaseName(namespace)
    return this.themes[name] || {}
  },
  getThemes(namespace) {
    const name = extractBaseName(namespace)
    return Object.keys(this.themes)
      .filter(nextNamespace => (
        nextNamespace !== name &&
        extractBaseName(nextNamespace) === name
      ))
      .reduce((memo, nextNamespace) => {
        const theme = extractThemeName(nextNamespace)
        return {
          ...memo,
          [theme]: this.themes[nextNamespace],
        }
      }, {})
  },
}
