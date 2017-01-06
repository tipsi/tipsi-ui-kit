import test from 'tape-async'
import helper from 'tipsi-appium-helper'

const { driver, select, idFromXPath } = helper

test('<StarRating />', async (t) => {
  const starsAndTextId = select({
    ios: idFromXPath(`//
      XCUIElementTypeScrollView/*/*/XCUIElementTypeOther[2]/
      XCUIElementTypeOther/XCUIElementTypeStaticText
    `),
    android: idFromXPath(`//
      android.widget.ScrollView[1]/android.view.ViewGroup[1]/*/
      android.widget.TextView
    `),
  })

  try {
    await helper.openExampleFor('<StarRating />')
    const elements = await driver.elements(starsAndTextId)

    t.same(
      elements.value.length,
      27,
      'Should render five <StarRating /> components'
    )
  } catch (error) {
    await helper.screenshot()
    await helper.source()

    throw error
  }
})
