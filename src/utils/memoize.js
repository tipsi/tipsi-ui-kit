export default function memoize(func) {
  const memo = {}
  return (...args) => {
    const result = memo[args]
    if (result) {
      return result
    }
    return (memo[args] = func(...args))
  }
}
