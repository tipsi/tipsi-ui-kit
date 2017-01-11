import test from 'tape-async'
import helper from 'tipsi-appium-helper'

const { driver, idFromAccessId } = helper

test('<RangeSlider />', async (t) => {
  const defaultSlider = idFromAccessId('defaultSlider')
  const customSlider = idFromAccessId('customSlider')
  const sliderWithCallbacks = idFromAccessId('sliderWithCallbacks')

  try {
    await helper.openExampleFor('<RangeSlider />')

    await driver.waitForVisible(defaultSlider, 20000)
    await driver.waitForVisible(customSlider, 20000)
    await driver.waitForVisible(sliderWithCallbacks, 20000)

    t.pass('<RangeSlider /> example should be visible')
  } catch (error) {
    await helper.screenshot()
    await helper.source()

    throw error
  }
})
