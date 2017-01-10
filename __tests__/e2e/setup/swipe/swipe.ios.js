export default async function iosSwipe(selector, direction) {
  const element = await this.driver.element(selector)
  return this.driver.execute(
    'mobile: scroll',
    { direction: direction < 0 ? 'up' : 'down', element: element.value.ELEMENT }
  )
}
