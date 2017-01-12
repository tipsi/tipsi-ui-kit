import test from 'tape-async'
import helper from 'tipsi-appium-helper'

const { driver, select, idFromXPath } = helper

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
      .waitForVisible(carouselId, 60000)
      .waitForVisible(carouselItemId, 60000)

    t.pass('<Carousel /> example should be visible')
  } catch (error) {
    await helper.screenshot()
    await helper.source()

    throw error
  }
})
