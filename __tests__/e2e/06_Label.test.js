import test from 'tape-async'
import helper from 'tipsi-appium-helper'

const { driver, select, idFromXPath } = helper

test('<Label />', async (t) => {
  const labelGroupId = select({
    ios: idFromXPath(`
      //XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/
      XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/
      XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/
      XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther/XCUIElementTypeOther
    `),
    android: idFromXPath(`//
      android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/
      android.widget.FrameLayout[1]/android.view.View[1]/android.view.View[2]/
      android.view.View[1]/android.widget.ScrollView[1]/android.view.View[1]/
      android.view.View
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
      const id = `${labelGroupId}[${label.id}]`
      const currentLabelId = select({
        ios: `${id}/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeStaticText`,
        android: idFromXPath(`${id}/android.view.View[2]/android.widget.TextView[1]`),
      })
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
