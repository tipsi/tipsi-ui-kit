import test from 'tape-async'
import helper from 'tipsi-appium-helper'

const { driver, select, idFromXPath } = helper

test('<Counter />', async (t) => {
  const counterGroupId = select({
    ios: idFromXPath(`//
      XCUIElementTypeScrollView[1]/*/*/
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

  try {
    await helper.openExampleFor('<Counter />')

    await driver.waitForVisible(counter, 20000)

    const NUMBER_OF_CLICKS = 3

    for (let i = 0; i < NUMBER_OF_CLICKS; i += 1) {
      await driver.click(plus)
      t.pass(`plus clicked ${i + 1} time`)
    }

    let countText = await driver.waitForVisible(counter, 10000).getText(counter)
    let count = select({
      ios: countText[0],
      android: countText,
    })
    t.equal(count, '4', 'count should be 4')

    for (let i = NUMBER_OF_CLICKS; i > 0; i -= 1) {
      await driver.click(minus)
      t.pass(`minus clicked ${(NUMBER_OF_CLICKS + 1) - i} time`)
    }

    countText = await driver
      .waitForVisible(counter, 10000)
      .getText(counter)
    count = select({
      ios: countText[0],
      android: countText,
    })
    t.equal(count, '1', 'count should be 1')

    t.pass('<Counter /> example should be visible')
  } catch (error) {
    await helper.screenshot()
    await helper.source()

    throw error
  }
})
