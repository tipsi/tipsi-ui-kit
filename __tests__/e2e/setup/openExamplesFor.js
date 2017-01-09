import helper from 'tipsi-appium-helper'

helper.extend('openExampleFor', async (exampleName, wait = 6000) => {
  const { driver, platform, idFromAccessId, idFromXPath } = helper

  const listId = idFromAccessId('List')
  const backId = idFromXPath(`//
    XCUIElementTypeApplication/XCUIElementTypeWindow/
    XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/
    XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/
    XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/
    XCUIElementTypeOther
  `)
  const examplesNameId = idFromAccessId(exampleName)

  // TODO: add find item with swipe

  try {
    await driver.waitForVisible(listId, wait)
  } catch (error) {
    if (platform('android')) {
      await driver.back()
    } else {
      await driver.click(backId)
    }
  }

  await driver.waitForVisible(examplesNameId, wait).click(examplesNameId)
})
