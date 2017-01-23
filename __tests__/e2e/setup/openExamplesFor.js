import helper from 'tipsi-appium-helper'

helper.extend('openExampleFor', async (exampleName, wait = 60000) => {
  const { driver, platform, select, idFromAccessId, idFromXPath, hideKeyboard } = helper

  const backId = idFromXPath(`//
    XCUIElementTypeApplication/XCUIElementTypeWindow/
    XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/
    XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/
    XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/
    XCUIElementTypeOther
  `)
  const examplesNameId = idFromAccessId(exampleName)
  const autocompleteId = idFromAccessId('UIExplorerSearch')
  const examplesListId = idFromAccessId('UIExplorerExamplesList')

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

  await driver.waitForVisible(examplesNameId, wait)

  if (platform('ios')) {
    const listItemId = await driver
      .elements(examplesNameId)
      .then(({ value }) => value[1].ELEMENT)
    await driver.elementIdClick(listItemId)
  } else {
    await driver.click(examplesNameId)
  }

  try {
    await driver.waitForVisible(examplesListId, wait)
  } catch (e) {
    await helper.source()
    await helper.screenshot()
  }
})
