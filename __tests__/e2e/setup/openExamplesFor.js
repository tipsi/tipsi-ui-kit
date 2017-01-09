import helper from 'tipsi-appium-helper'

helper.extend('openExampleFor', async (exampleName, wait = 60000) => {
  const { driver, idFromAccessId } = helper

  const listId = idFromAccessId('List')

  const examplesNameId = idFromAccessId(exampleName)

  // TODO: add find item with swipe

  await driver.waitForVisible(listId, wait)

  await driver.waitForVisible(examplesNameId, wait).click(examplesNameId)
})
