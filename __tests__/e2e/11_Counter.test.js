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
      ${counterGroupId}/XCUIElementTypeOther[3]
    `),
    android: idFromXPath(`
      ${counterGroupId}/android.view.View[4]
    `),
  })

  const minus = select({
    ios: idFromXPath(`
      ${counterGroupId}/XCUIElementTypeOther[1]
    `),
    android: idFromXPath(`
      ${counterGroupId}/android.view.View[2]
    `),
  })

  const counter = select({
    ios: idFromXPath(`
      ${counterGroupId}/XCUIElementTypeOther[2]
    `),
    android: idFromXPath(`
      ${counterGroupId}/android.view.View[3]
    `),
  })

  try {
    await helper.openExampleFor('<Counter />')

    await driver.waitForVisible(counter, 20000)

    for (let i = 0; i < 3; i += 1) {
      await driver.click(plus)
      t.pass(`plus clicked ${i + 1} time`)
    }

    for (let i = 3; i > 0; i -= 1) {
      await driver.click(minus)
      t.pass(`minus clicked ${4 - i} time`)
    }

    t.pass('<Counter /> example should be visible')
  } catch (error) {
    await helper.screenshot()
    await helper.source()

    throw error
  }
})
