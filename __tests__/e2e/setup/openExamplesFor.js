import helper from 'tipsi-appium-helper'

helper.extend('openExampleFor', async (exampleName, wait = 30000) => {
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
  const examplesListId = select({
    ios: idFromXPath('//XCUIElementTypeScrollView[1]'),
    android: idFromXPath('//android.widget.ScrollView[1]'),
  })

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

  await driver.waitForVisible(examplesListId, wait)
})
