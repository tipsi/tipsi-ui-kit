import test from 'tape-async'
import helper from 'tipsi-appium-helper'

const { driver, select, idFromXPath } = helper

test('<Dash />', async (t) => {
  const dashItemId = select({
    ios: idFromXPath(`//
      XCUIElementTypeScrollView/*/XCUIElementTypeOther[1]/
      XCUIElementTypeOther[2]/*/XCUIElementTypeOther
    `),
    android: idFromXPath(`//
      android.widget.ScrollView[1]/android.view.ViewGroup[1]/
      android.view.ViewGroup[1]/android.view.ViewGroup
    `),
  })

  try {
    await helper.openExampleFor('<Dash />')

    const elements = await driver
      .waitForVisible(dashItemId, 30000)
      .elements(dashItemId)

    t.ok(elements.value.length > 10, '<Dash /> example should be visible')
  } catch (error) {
    await helper.screenshot()
    await helper.source()

    throw error
  }
})
