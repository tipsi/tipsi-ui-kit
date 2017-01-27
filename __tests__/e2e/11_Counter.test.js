import test from 'tape-async'
import helper from 'tipsi-appium-helper'

const { driver, select, idFromXPath, platform } = helper

test('<Counter />', async (t) => {
  const counterGroupId = select({
    ios: idFromXPath(`//
      XCUIElementTypeScrollView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/
      XCUIElementTypeOther[2]/XCUIElementTypeOther[1]
    `),
    android: idFromXPath(`//
      android.widget.ScrollView[1]/android.view.View[1]/android.view.View[1]
    `),
  })

  const plus = select({
    ios: idFromXPath(`
      ${counterGroupId}/XCUIElementTypeOther[3]
    `),
    android: idFromXPath(`
      ${counterGroupId}/android.view.View[4]
    `),
  })

  const minus = select({
    ios: idFromXPath(`
      ${counterGroupId}/XCUIElementTypeOther[1]
    `),
    android: idFromXPath(`
      ${counterGroupId}/android.view.View[2]
    `),
  })

  const counter = select({
    ios: idFromXPath(`
      ${counterGroupId}/XCUIElementTypeOther[2]/XCUIElementTypeStaticText[1]
    `),
    android: idFromXPath(`
      ${counterGroupId}/android.view.View[3]/android.widget.TextView[1]
    `),
  })


  const lastExample = select({
    ios: idFromXPath(`//
      XCUIElementTypeScrollView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[3]/
      XCUIElementTypeOther[2]/XCUIElementTypeOther[1]
    `),
    android: idFromXPath(`//
      android.widget.ScrollView[1]/android.view.View[1]/android.view.View[3]
    `),
  })
  const lastExampleMinusButtonId = select({
    ios: idFromXPath(`//${lastExample}/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]`),
    android: idFromXPath(`${lastExample}/android.view.View[2]/android.widget.TextView[1]`),
  })
  const lastExampleValueId = select({
    ios: idFromXPath(`//
      ${lastExample}/XCUIElementTypeOther[1]/XCUIElementTypeOther[2]/XCUIElementTypeStaticText[1]
    `),
    android: idFromXPath(`${lastExample}/android.view.View[3]/android.widget.TextView[1]`),
  })
  const lastExampleCounterValuesId = select({
    ios: idFromXPath(`//${lastExample}/XCUIElementTypeStaticText[1]`),
    android: idFromXPath(`${lastExample}/android.widget.TextView[1]`),
  })

  try {
    await helper.openExampleFor('<Counter />')
    await driver.waitForVisible(counter, 20000)

    const NUMBER_OF_CLICKS = 3
    const buttons = [
      { button: plus, expectedValue: '3' },
      { button: minus, expectedValue: '0' },
    ]

    for (const { button, expectedValue } of buttons) {
      for (let i = 0; i < NUMBER_OF_CLICKS; i += 1) {
        await driver.click(button)
      }

      const countText = await driver.waitForVisible(counter, 10000).getText(counter)
      t.equal(countText, expectedValue, `Counter should be changed into ${expectedValue}`)
    }

    await driver.waitForVisible(lastExampleValueId, 10000)
    const defaultLastExampleValue = await driver.getText(lastExampleValueId)

    /* eslint no-unused-vars: 0 */
    for (const x of [1, 2, 3, 4, 5, 6]) {
      await driver.click(lastExampleMinusButtonId)
    }

    const lastExampleValue = await driver.getText(lastExampleValueId)

    t.notEqual(
      lastExampleValue,
      defaultLastExampleValue,
      'Current last example value shouldn\'t be equal defaultValue'
    )

    await driver.waitForVisible(lastExampleCounterValuesId, 10000)
    const lastExampleCounterValues = await driver.getText(lastExampleCounterValuesId)
    t.equal(
      lastExampleCounterValues,
      '4,3,2,1,0',
      'The fourth logger value should be equal 1. "minValue" prop is working'
    )

    t.pass('<Counter /> example should be visible')
  } catch (error) {
    await helper.screenshot()
    await helper.source()

    throw error
  }
})
