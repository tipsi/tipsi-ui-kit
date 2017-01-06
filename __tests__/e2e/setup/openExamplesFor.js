import helper from 'tipsi-appium-helper'

helper.extend('openExampleFor', async (exampleName) => {
  const { driver, idFromAccessId } = helper

  const examplesNameId = idFromAccessId(exampleName)

  // TODO: add find device with swipe

  await driver.click(examplesNameId)
})
