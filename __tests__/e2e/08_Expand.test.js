import test from 'tape-async'
import helper from 'tipsi-appium-helper'

const { driver, select, idFromXPath } = helper

test('<Expand />', async (t) => {
  // await driver.pause(1000000)
  const expandGroupId = select({
    ios: idFromXPath(`//
      XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/
      XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther
      /XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther
      /XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther
    `),
    android: idFromXPath(`//
      android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/
      android.widget.FrameLayout[1]/android.view.ViewGroup[1]/
      android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.widget.ScrollView[1]
    `),
  })
  const expandItemId = select({
    ios: idFromXPath(`${expandGroupId}/XCUIElementTypeOther[2]/XCUIElementTypeOther`),
    android: idFromXPath(`${expandGroupId}/android.view.ViewGroup[1]/
                          android.view.ViewGroup[1]/android.view.ViewGroup[2]
                        `),
  })

  try {
    await helper.openExampleFor('<Expand />', 60000)
    await driver.waitForVisible(expandItemId, 10000)
    t.pass('<Expand /> example should be visible')

    const height = await driver.getElementSize(expandItemId, 'height')
    await driver.click(expandItemId)
    t.pass('Can click on first expand item')
    t.notEqual(height, await driver.getElementSize(expandItemId, 'height'), 'Height of the element should be changed after the click')
  } catch (error) {
    await helper.screenshot()
    await helper.source()

    throw error
  }
})
