export default async function androidSwipe(selector, direction) {
  return await this.driver[direction < 0 ? 'swipeDown' : 'swipeUp'](
    selector,
    2000
  )
}
