import test from 'tape-async'
import helper from 'tipsi-appium-helper'

const { driver, select, idFromXPath } = helper

test('<Label />', async (t) => {
  const labelId = select({
    ios: idFromXPath(`//
      XCUIElementTypeScrollView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[2]/
      XCUIElementTypeOther[2]/XCUIElementTypeOther[1]/XCUIElementTypeOther[%GROUP_ID%]/
      XCUIElementTypeStaticText[1]
    `),
    android: idFromXPath(`//
      android.widget.ScrollView[1]/android.view.View[1]/android.view.View[2]/
      android.view.View[%GROUP_ID%]/android.widget.TextView[1]
    `),
  })

  const range = ['On Sale', 'Value Pick', 'Staff Pick', 'Super Vintage']

  try {
    await helper.openExampleFor('<Label />')

    for (const [index, label] of range.entries()) {
      const correctIndex = index + 1
      const currentLabelId = select({
        ios: labelId.replace('%GROUP_ID%', correctIndex),
        android: labelId.replace('%GROUP_ID%', correctIndex + 1),
      })
      const text = await driver.waitForVisible(currentLabelId, 20000).getText(currentLabelId)
      t.equal(text, label, `${correctIndex} label is ${label}`)
    }

    t.pass('<Label /> example should be visible')
  } catch (error) {
    await helper.screenshot()
    await helper.source()

    throw error
  }
})
