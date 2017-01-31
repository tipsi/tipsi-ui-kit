import test from 'tape-async'
import helper from 'tipsi-appium-helper'

const { driver, select, idFromXPath } = helper

test('<Search />', async (t) => {
  const textInputId = select({
    ios: idFromXPath(`//
      XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther
      /XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther
      /XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]
      /XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther
      /XCUIElementTypeScrollView/XCUIElementTypeOther
      /XCUIElementTypeOther/XCUIElementTypeOther[2]
      /XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTextField
    `),
    android: idFromXPath(`//
      android.widget.LinearLayout[1]/android.widget.FrameLayout[1]
      /android.widget.FrameLayout[1]/android.view.ViewGroup[1]
      /android.view.ViewGroup[2]/android.view.ViewGroup[1]
      /android.widget.ScrollView[1]/android.view.ViewGroup[1]
      /android.view.ViewGroup[1]/android.widget.EditText[1]
    `),
  })
  const suggestionsId = select({
    ios: idFromXPath(`//
      XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther
      /XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther
      /XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]
      /XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther
      /XCUIElementTypeScrollView/XCUIElementTypeOther/XCUIElementTypeOther
      /XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther[3]`),
    android: idFromXPath(`//
      android.widget.LinearLayout[1]/android.widget.FrameLayout[1]
      /android.widget.FrameLayout[1]/android.view.ViewGroup[1]
      /android.view.ViewGroup[2]/android.view.ViewGroup[1]
      /android.widget.ScrollView[1]/android.view.ViewGroup[1]
      /android.view.ViewGroup[1]/android.view.ViewGroup[7]/android.widget.ScrollView[1]
      `),
  })

  try {
    await helper.openExampleFor('<Search />', 60000)
    await driver.waitForVisible(textInputId, 30000)
    t.pass('<Search /> example should be visible')
    await driver.click(textInputId)
    t.pass('Search field should be editable')
    await driver.keys('Bl')
    await driver.waitForVisible(suggestionsId, 30000)
    t.pass('User should see suggestions')
  } catch (error) {
    await helper.screenshot()
    await helper.source()

    throw error
  }
})
