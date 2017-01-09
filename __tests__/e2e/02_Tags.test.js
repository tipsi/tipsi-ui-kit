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
      android.widget.ScrollView[1]/android.view.ViewGroup[1]/*
    `),
  })
  const tagItemId = select({
    ios: idFromXPath(`
      ${tagGroupId}/XCUIElementTypeOther[starId]/XCUIElementTypeStaticText
    `),
    android: idFromXPath(`
      ${tagGroupId}/android.view.ViewGroup[starId]/android.widget.TextView[1]
    `),
  })

  try {
    await helper.openExampleFor('<Tags />')

    for (const starId of [1, 2, 3, 4, 5]) {
      const currentTagId = tagItemId.replace('starId', starId)
      await driver.waitForVisible(currentTagId, 20000)
    }

    t.pass('<Tags /> example should be visible')
  } catch (error) {
    await helper.screenshot()
    await helper.source()

    throw error
  }
})
