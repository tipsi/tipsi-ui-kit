const includes = (text = '', part = '') => (
  text.toLowerCase().includes(part.toLowerCase())
)

export default {
  list: {},
  addExample({ type, title = '', description = '', examples = [] }) {
    const list = this.list
    const item = { title, description, examples }
    if (list[type]) {
      list[type].push(item)
    } else {
      list[type] = [item]
    }
  },
  filter(search = '') {
    const list = this.list
    if (!search) {
      return list
    }
    const keys = Object.keys(list)
    return keys.reduce((memo, key) => ({
      ...memo,
      [key]: list[key].filter(({ title, description }) => (
        includes(title, search) || includes(description, search)
      )),
    }), {})
  },
}
