import helper from 'tipsi-appium-helper'

helper.extend('openExampleFor', async (exampleName, wait = 6000) => {
  const { driver, platform, idFromAccessId, idFromXPath, hideKeyboard } = helper

  const backId = idFromXPath(`//
    XCUIElementTypeApplication/XCUIElementTypeWindow/
    XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/
    XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/
    XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/
    XCUIElementTypeOther
  `)
  const examplesNameId = idFromAccessId(exampleName)
  const autocompleteId = idFromAccessId('UIExplorerSearch')

  // TODO: add find item with swipe

  let isAutocompleteVisible = false
  do {
    try {
      await driver.waitForVisible(autocompleteId, wait)
      isAutocompleteVisible = true
    } catch (error) {
      if (platform('android')) {
        await driver.back()
      } else {
        await driver.click(backId)
      }
    }
  } while (!isAutocompleteVisible)

  await driver
    .waitForVisible(autocompleteId, wait)
    .setValue(autocompleteId, exampleName)

  try {
    await hideKeyboard()
  } catch (e) {
    // Do nothing
    // cause sometimes iOS doesn't show keyboard
  }

  await driver
    .waitForVisible(examplesNameId, wait)
    .click(examplesNameId)
})
