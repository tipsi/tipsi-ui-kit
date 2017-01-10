import { range, uniqBy } from 'lodash'
import helper from 'tipsi-appium-helper'

/**
 * Skywalker helps navigate on listView
 * @param  {String} parent Parent xPath selector
 * @param  {String} child  Child xPath selector
 * @param  {Function} callback Callback that applies to every visible item
 * @param  {Function} uniqHandler Callback that check uniqueness of elements
 * @return {Array} Array of elements
 */
helper.extend('skywalker', async function skywalker(parent, child, callback, uniqHandler) {
  /**
   * // Principles
   * 1. Every scroll hides only full visible elements
   * 2. Pull down only visible elements
   *
   * // Steps
   * 3. Get height of parent
   * 4. Get height of first child
   * 5. Get all visible elements
   * 6. Get height of last visible element
   * 7. Calculate margin between items
   * 8. Filter only visible items
   * 9. Apply callback to visible items
   * 10. Move list by formula (visible item height * N) + (marginHeight * (N - 1))
   */

  // MAIN ARRAY
  const nextArray = []
  const firstChildHeight = await this.driver
    .getElementSize(`${child}[1]`)
    .then(({ height }) => height)

  let endOfScreen = false
  let lastVisibleChildId = null

  // const parentLocation = await this.driver.getLocationInView(parent)

  do {
    const childrenIds = await this.driver.pause(5000).elements(child).then(({ value }) => value)
    const childrenLength = childrenIds.length
    const children = range(1, childrenLength + 1)
    const visibleChildren = []
    const hiddenChildren = []
    for (const x of children) {
      let childHeight = 0
      try {
        childHeight = await this.driver
          .getElementSize(`${child}[${x}]`)
          .then(({ height }) => height)
      } catch (e) {
        // Do nothing
      }

      if (childHeight >= firstChildHeight) {
        visibleChildren.push(childrenIds[x - 1].ELEMENT)
      } else {
        hiddenChildren.push({ id: childrenIds[x - 1].ELEMENT, childHeight })
      }
    }

    const tempArray = await this.mapOverVisible(visibleChildren, callback)
    nextArray.push(...tempArray)

    const parentItemId = visibleChildren[visibleChildren.length - 1]

    // Should be in future elementIdRect
    const { value: { y } } = await this.driver.elementIdLocationInView(parentItemId)
    const { value: { height } } = await this.driver.elementIdSize(parentItemId)
    const currentLastVisibleChildId = await callback(parentItemId)
    endOfScreen = lastVisibleChildId === currentLastVisibleChildId
    lastVisibleChildId = currentLastVisibleChildId

    if (childrenLength === 1) {
      endOfScreen = true
    }

    await this.swipe(parent, (y + height) - 1)
  } while (!endOfScreen)

  // back to top
  await this.swipe(parent, -20000)

  return uniqBy(nextArray, uniqHandler)
})
