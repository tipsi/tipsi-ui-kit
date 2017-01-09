import helper from 'tipsi-appium-helper'

helper.extend('openExampleFor', async (exampleName, wait = 60000) => {
  const { driver, idFromAccessId } = helper

  const examplesNameId = idFromAccessId(exampleName)

  // TODO: add find device with swipe

  await driver.waitForVisible(examplesNameId, wait).click(examplesNameId)
})
