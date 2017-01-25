import test from 'tape-async'
import helper from 'tipsi-appium-helper'

const { driver, select, idFromXPath } = helper

test('<Counter />', async (t) => {
  const counterGroupId = select({
    ios: idFromXPath(`//
      XCUIElementTypeScrollView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/
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
      ${counterGroupId}/XCUIElementTypeOther[2]/XCUIElementTypeStaticText[1]
    `),
    android: idFromXPath(`
      ${counterGroupId}/android.view.View[3]/android.widget.TextView[1]
    `),
  })

  try {
    await helper.openExampleFor('<Counter />')
    await driver.waitForVisible(counter, 20000)

    const NUMBER_OF_CLICKS = 3
    const buttons = [
      { button: plus, expectedValue: '3' },
      { button: minus, expectedValue: '0' },
    ]

    for (const { button, expectedValue } of buttons) {
      for (let i = 0; i < NUMBER_OF_CLICKS; i += 1) {
        await driver.click(button)
      }

      const countText = await driver.waitForVisible(counter, 10000).getText(counter)
      t.equal(countText, expectedValue, `Counter should be changed into ${expectedValue}`)
    }

    t.pass('<Counter /> example should be visible')
  } catch (error) {
    await helper.screenshot()
    await helper.source()

    throw error
  }
})
