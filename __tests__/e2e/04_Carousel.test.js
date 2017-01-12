import test from 'tape-async'
import helper from 'tipsi-appium-helper'

const { driver, platform, select, idFromXPath } = helper

helper.extend('swipe', async (selector, direction, speed) => {
  const mapDirection = helper.select({
    ios: { up: 'down', down: 'up', left: 'right', right: 'left' },
    android: { up: 'swipeUp', down: 'swipeDown', left: 'swipeLeft', right: 'swipeRight' },
  })
  const nextDirection = mapDirection[direction]
  if (helper.platform('ios')) {
    const element = await helper.driver.element(selector)
    return helper.driver.execute(
      'mobile: scroll',
      { direction: nextDirection, element: element.value.ELEMENT }
     )
  }
  return helper.driver[nextDirection](
    selector,
    speed
  )
})

test('<Carousel />', async (t) => {
  const carouselId = select({
    ios: idFromXPath(`//
      XCUIElementTypeOther[1]/XCUIElementTypeOther[2]/*/*/
      XCUIElementTypeScrollView
    `),
    android: idFromXPath(`//
      android.view.ViewGroup[1]/android.view.ViewGroup[2]/
      android.widget.HorizontalScrollView[1]
    `),
  })
  const carouselItemId = select({
    ios: idFromXPath(`
      ${carouselId}/XCUIElementTypeOther/XCUIElementTypeOther/
      XCUIElementTypeOther[2]/XCUIElementTypeStaticText[1]
    `),
    android: idFromXPath(`
      ${carouselId}/android.view.ViewGroup[1]/
      android.view.ViewGroup/android.widget.TextView[2]
    `),
  })
  const elementsCount = 5

  try {
    await helper.openExampleFor('<Carousel />')

    await driver.waitForVisible(carouselId, 30000)

    t.pass('<Carousel /> example should be visible')

    if (platform('android')) {
      const firstElementText = await driver
        .waitForVisible(carouselItemId, 30000)
        .getText(carouselItemId)
      await helper.swipe(carouselId, 'left', 2000)
      const afterSwipeElementText = await driver
        .waitForVisible(carouselItemId, 30000)
        .getText(carouselItemId)

      t.notEqual(
        afterSwipeElementText,
        firstElementText,
        '<Carousel /> should be swipeable'
      )
    } else {
      const elementsText = await driver.getText(carouselItemId)

      t.same(
        elementsText.length,
        elementsCount,
        '<Carousel /> should render five items'
      )
    }
  } catch (error) {
    await helper.screenshot()
    await helper.source()

    throw error
  }
})
