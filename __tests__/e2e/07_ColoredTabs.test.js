import test from 'tape-async'
import helper from 'tipsi-appium-helper'

const { driver, select, idFromXPath } = helper

test('<ColoredTabs />', async (t) => {
  const tabsGroupId = select({
    ios: idFromXPath(`//
      XCUIElementTypeScrollView[1]/*/*/
      XCUIElementTypeOther[2]/XCUIElementTypeOther[1]
    `),
    android: idFromXPath(`//
      android.widget.ScrollView[1]/android.view.View[1]/android.view.View[1]
    `),
  })
  const tagItemId = select({
    ios: idFromXPath(`
      ${tabsGroupId}/XCUIElementTypeOther[tabId]
    `),
    android: idFromXPath(`
      ${tabsGroupId}/android.view.View[tabId]
    `),
  })

  try {
    await helper.openExampleFor('<ColoredTabs />')

    for (const tabId of [1, 2, 3, 4]) {
      const currentTabId = select({
        ios: tagItemId.replace('tabId', tabId),
        android: tagItemId.replace('tabId', tabId + 1),
      })
      await driver.waitForVisible(currentTabId, 20000)
      await driver.click(currentTabId)

      t.pass(`tab ${tabId} clicked`)
    }

    t.pass('<ColoredTabs /> example should be visible')
  } catch (error) {
    await helper.screenshot()
    await helper.source()

    throw error
  }
})
