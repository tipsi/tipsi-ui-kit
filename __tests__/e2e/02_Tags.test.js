import test from 'tape-async'
import helper from 'tipsi-appium-helper'

const { driver, select, idFromXPath } = helper

test('<Tags />', async (t) => {
  const tagGroupId = select({
    ios: idFromXPath(`//
      XCUIElementTypeScrollView/*/*/XCUIElementTypeOther[2]/
      XCUIElementTypeOther/XCUIElementTypeOther
    `),
    android: idFromXPath(`//
      android.widget.ScrollView[1]/android.view.ViewGroup[1]/
      android.view.ViewGroup[1]
    `),
  })
  const tagItemId = select({
    ios: idFromXPath(`
      ${tagGroupId}/XCUIElementTypeOther[tagId]
    `),
    android: idFromXPath(`
      ${tagGroupId}/android.view.ViewGroup[tagId]/
      android.view.ViewGroup[1]/android.widget.TextView[1]
    `),
  })

  try {
    await helper.openExampleFor('<Tags />')

    for (const tagId of [1, 2, 3, 4, 5, 6, 7, 8]) {
      const currentTagId = select({
        ios: tagItemId.replace('tagId', tagId),
        android: tagItemId.replace('tagId', tagId + 1),
      })
      await driver.waitForVisible(currentTagId, 30000)
    }

    t.pass('<Tags /> example should be visible')
  } catch (error) {
    await helper.screenshot()
    await helper.source()

    throw error
  }
})
