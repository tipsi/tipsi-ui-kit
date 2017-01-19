import test from 'tape-async'
import helper from 'tipsi-appium-helper'

const { driver, idFromXPath, select, platform } = helper

test('<RangeSlider />', async (t) => {
  const sliderGroupId = select({
    ios: idFromXPath(`//
      XCUIElementTypeScrollView[1]/*/*/XCUIElementTypeOther[2]/
      XCUIElementTypeOther[1]/XCUIElementTypeOther[1]
    `),
    android: idFromXPath(`//
      android.widget.ScrollView[1]/android.view.View[1]/android.view.View[1]
    `),
  })

  const firstHandle = select({
    ios: idFromXPath(`
      ${sliderGroupId}/XCUIElementTypeOther[2]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]
    `),
    android: idFromXPath(`
      ${sliderGroupId}/android.view.View[3]/android.view.View[1]/
      android.view.View[1]/android.view.View[1]
    `),
  })

  const secondHandle = select({
    ios: idFromXPath(`
      ${sliderGroupId}/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]
    `),
    android: idFromXPath(`
      ${sliderGroupId}/android.view.View[5]/android.view.View[1]/
      android.view.View[1]/android.view.View[1]
    `),
  })

  const track = select({
    ios: idFromXPath(`
      ${sliderGroupId}//XCUIElementTypeOther[2]XCUIElementTypeOther[4]
    `),
    android: idFromXPath(`
      ${sliderGroupId}/android.view.View[4]
    `),
  })

  const minValue = select({
    ios: idFromXPath(`
      ${sliderGroupId}/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeStaticText[1]
    `),
    android: idFromXPath(`
      ${sliderGroupId}/android.widget.TextView[1]
    `),
  })

  try {
    await helper.openExampleFor('<RangeSlider />')

    await driver.waitForVisible(firstHandle, 20000)
    t.pass('first handle should be visible')

    await driver.waitForVisible(secondHandle, 10000)
    t.pass('second handle should be visible')

    await driver.waitForVisible(track, 10000)
    t.pass('track should be visible')

    await driver.waitForVisible(minValue, 10000)
    t.pass('minValue should be visible')

    const minValueText = await driver.getText(minValue)
    t.equal(minValueText, '2', 'minValue should be 2')


    if (platform('android')) {
      const element = await driver.element(firstHandle)
      await driver.touchPerform([{
        action: 'press',
        options: {
          element: element.value.ELEMENT,
        },
      }, {
        action: 'moveTo',
        options: {
          x: -100,
          y: 0,
        },
      }, {
        action: 'release',
      }])
      t.pass('firstHandle was moved')

      // await driver.waitUntil(() => (
      //   driver.getText(minValue) === '0'
      // ), 3000, 'minValue still not 0')
      //
      // const minValueText2 = await driver.getText(minValue)
      // t.equal(minValueText2, '0', 'Now minValue should be 0')
    }

    t.pass('<RangeSlider /> example should be visible')
  } catch (error) {
    await helper.screenshot()
    await helper.source()

    throw error
  }
})
