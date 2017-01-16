export default {
  themes: {},
  set(themes) {
    this.themes = themes
  },
  get(theme) {
    return this.themes[theme] || {}
  },
}
