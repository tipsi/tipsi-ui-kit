import test from 'tape-async'
import helper from 'tipsi-appium-helper'

const { driver, platform, select, idFromXPath } = helper

helper.extend('swipe', async (selector, direction, speed) => {
  const mapDirection = helper.select({
    ios: { up: 'down', down: 'up', left: 'right', right: 'left' },
    android: { up: 'swipeUp', down: 'swipeDown', left: 'swipeLeft', right: 'swipeRight' },
  })
  const naxtDirection = mapDirection[direction]
  if (helper.platform('ios')) {
    const element = await helper.driver.element(selector)
    return helper.driver.execute(
      'mobile: scroll',
      { direction: naxtDirection, element: element.value.ELEMENT }
     )
  }
  return helper.driver[naxtDirection](
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
      android.view.ViewGroup[1]/android.widget.TextView[2]
    `),
  })
  const elementsCount = 5

  try {
    await helper.openExampleFor('<Carousel />', 60000)

    await driver.waitForVisible(carouselId, 5000)

    t.pass('<Carousel /> example should be visible')

    if (platform('android')) {
      const firstElementText = await driver.getText(carouselItemId)
      // await driver.swipeLeft(carouselId, 2000)
      await helper.swipe(carouselId, 'left', 2000)
      const afterSwipeElementText = await driver.getText(carouselItemId)

      t.notSame(
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
