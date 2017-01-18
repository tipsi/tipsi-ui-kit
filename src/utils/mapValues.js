export default function mapValues(object, iteratee) {
  const newObject = {}
  Object.keys(object).forEach(
    key => newObject[key] = iteratee(object[key], key)
  )
  return newObject
}
