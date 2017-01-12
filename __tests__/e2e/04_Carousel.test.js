import test from 'tape-async'
import helper from 'tipsi-appium-helper'

const { driver, select, idFromXPath } = helper

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

  try {
    await helper.openExampleFor('<Carousel />')

    await driver
      .waitForVisible(carouselId, 30000)
      .waitForVisible(carouselItemId)

    t.pass('<Carousel /> example should be visible')
  } catch (error) {
    await helper.screenshot()
    await helper.source()

    throw error
  }
})
