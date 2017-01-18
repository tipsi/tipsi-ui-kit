import test from 'tape-async'
import helper from 'tipsi-appium-helper'

const { driver, select, idFromXPath } = helper

test('<Counter />', async (t) => {
  const counterGroupId = select({
    ios: idFromXPath(`//
      XCUIElementTypeScrollView[1]/*/*/
      XCUIElementTypeOther[2]/XCUIElementTypeOther[1]
    `),
    android: idFromXPath(`//
      android.widget.ScrollView[1]/android.view.View[1]/android.view.View[1]
    `),
  })

  const plus = select({
    ios: idFromXPath(`
      ${counterGroupId}/XCUIElementTypeOther[tabId]
    `),
    android: idFromXPath(`
      ${counterGroupId}/android.view.View[tabId]
    `),
  })

  const minus = select({
    ios: idFromXPath(`
      ${counterGroupId}/XCUIElementTypeOther[tabId]
    `),
    android: idFromXPath(`
      ${counterGroupId}/android.view.View[tabId]
    `),
  })

  const counter = select({
    ios: idFromXPath(`
      ${counterGroupId}/XCUIElementTypeOther[tabId]
    `),
    android: idFromXPath(`
      ${counterGroupId}/android.view.View[tabId]
    `),
  })

  try {
    await helper.openExampleFor('<Counter />')

    await driver.waitForVisible(counter, 20000)

    for (let i = 0; i < 3; i += 1) {
      await driver.click(plus)
      t.pass(`plus ${1} clicked`)
    }

    t.pass('<Counter /> example should be visible')
  } catch (error) {
    await helper.screenshot()
    await helper.source()

    throw error
  }
})
