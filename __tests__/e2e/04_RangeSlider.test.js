import test from 'tape-async'
import helper from 'tipsi-appium-helper'

const { driver, idFromAccessId } = helper

test('<RangeSlider />', async (t) => {
  const defaultSlider = idFromAccessId('defaultSlider')
  //android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.View[1]/android.view.View[2]/android.view.View[1]/android.widget.ScrollView[1]/android.view.View[1]/android.view.View[1]
  const customSlider = idFromAccessId('customSlider')
  //android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.View[1]/android.view.View[2]/android.view.View[1]/android.widget.ScrollView[1]/android.view.View[1]/android.view.View[2]
  const sliderWithCallbacks = idFromAccessId('sliderWithCallbacks')

  try {
    await helper.openExampleFor('<RangeSlider />')

    await driver.waitForVisible(defaultSlider, 20000)
    await driver.waitForVisible(customSlider, 10000)
    await driver.waitForVisible(sliderWithCallbacks, 10000)

    t.pass('<RangeSlider /> example should be visible')
  } catch (error) {
    await helper.screenshot()
    await helper.source()

    throw error
  }
})
