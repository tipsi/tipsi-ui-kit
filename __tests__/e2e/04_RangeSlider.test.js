import test from 'tape-async'
import helper from 'tipsi-appium-helper'

const { driver, idFromXPath, select, platform } = helper

test('<RangeSlider />', async (t) => {
  const sliderId = select({
    ios: idFromXPath(`//
      XCUIElementTypeScrollView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/
      XCUIElementTypeOther[2]/XCUIElementTypeOther[1]
    `),
    android: idFromXPath(`//
      android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]
    `),
  })

  const firstMarkerId = select({
    ios: idFromXPath(`
      ${sliderId}/XCUIElementTypeOther[1]/XCUIElementTypeOther[2]/
      XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]
    `),
    android: idFromXPath(`
      ${sliderId}/android.view.ViewGroup[3]/android.view.ViewGroup[1]/
      android.view.ViewGroup[1]/android.view.ViewGroup[1]
    `),
  })

  const secondMarkerId = select({
    ios: idFromXPath(`
      ${sliderId}/XCUIElementTypeOther[1]/XCUIElementTypeOther[2]/
      XCUIElementTypeOther[2]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]
    `),
    android: idFromXPath(`
      ${sliderId}/android.view.ViewGroup[5]/android.view.ViewGroup[1]/
      android.view.ViewGroup[1]/android.view.ViewGroup[1]
    `),
  })

  const minValueId = select({
    ios: idFromXPath(`
      ${sliderId}/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/
      XCUIElementTypeOther[1]/XCUIElementTypeStaticText[1]
    `),
    android: idFromXPath(`
      ${sliderId}/android.widget.TextView[1]
    `),
  })

  try {
    await helper.openExampleFor('<RangeSlider />')

    await driver.waitForVisible(sliderId, 20000)
    t.pass('slider should be visible')

    await driver.waitForVisible(firstMarkerId, 10000)
    t.pass('first marker should be visible')

    await driver.waitForVisible(secondMarkerId, 10000)
    t.pass('second marker should be visible')

    await driver.waitForVisible(minValueId, 10000)
    t.pass('min value should be visible')

    const minValueText = await driver.getText(minValueId)
    t.equal(minValueText, '2', 'min value should be 2')

    if (platform('ios')) {
      const element = await driver.element(firstMarkerId)
      await driver.touchPerform([{
        action: 'press',
        options: { element: element.value.ELEMENT },
      }, {
        action: 'moveTo',
        options: { x: -200, y: 0 },
      }, {
        action: 'release',
      }])
    } else (
      await driver.swipeLeft(firstMarkerId, 200)
    )

    const minValueTextAfterMove = await driver.getText(minValueId)
    t.equal(minValueTextAfterMove, '0', 'markers should be moveable')
  } catch (error) {
    await helper.screenshot()
    await helper.source()

    throw error
  }
})
