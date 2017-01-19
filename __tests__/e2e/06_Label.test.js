import test from 'tape-async'
import helper from 'tipsi-appium-helper'

const { driver, select, idFromXPath } = helper

test('<Label />', async (t) => {
  const labelId = select({
    ios: idFromXPath(`//
      XCUIElementTypeApplication[1]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[1]/
      XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/
      XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[2]/
      XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/
      XCUIElementTypeScrollView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[%GROUP_ID%]/
      XCUIElementTypeOther[2]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/
      XCUIElementTypeStaticText[1]
    `),
    android: idFromXPath(`//
      android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/
      android.view.View[1]/android.view.View[2]/android.view.View[1]/android.widget.ScrollView[1]/
      android.view.View[1]/android.view.View[%GROUP_ID%]/android.view.View[2]/
      android.widget.TextView[1]
    `),
  })

  const range = [
    { id: 1, text: 'On Sale' },
    { id: 2, text: 'Value Pick' },
    { id: 3, text: 'Staff Pick' },
  ]

  try {
    await helper.openExampleFor('<Label />')

    for (const label of range) {
      const currentLabelId = labelId.replace('%GROUP_ID%', label.id)
      const text = await driver.waitForVisible(currentLabelId, 20000).getText(currentLabelId)
      t.equal(text, label.text, `${label.id} label is ${label.text}`)
    }

    t.pass('<Label /> example should be visible')
  } catch (error) {
    await helper.screenshot()
    await helper.source()

    throw error
  }
})
