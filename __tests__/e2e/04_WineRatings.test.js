import test from 'tape-async'
import helper from 'tipsi-appium-helper'

const { driver, select, idFromXPath } = helper

test('<WineRatings />', async (t) => {
  const wineRatingsGroupId = select({
    ios: idFromXPath(`//
      XCUIElementTypeScrollView/*/*/XCUIElementTypeOther[2]/XCUIElementTypeOther/
      XCUIElementTypeOther/XCUIElementTypeOther
    `),
    android: idFromXPath(`//
      android.widget.ScrollView[1]/android.view.ViewGroup[1]/
      android.view.ViewGroup[1]/android.view.ViewGroup
    `),
  })
  const wineRatingsItemId = select({
    ios: idFromXPath(`${wineRatingsGroupId}[wineRatingsId]/XCUIElementTypeOther/XCUIElementTypeStaticText`),
    android: idFromXPath(`${wineRatingsGroupId}[wineRatingsId]/android.view.ViewGroup[1]/android.widget.TextView[1]`),
  })
  const sequence = select({ ios: [1, 2, 3], android: [2, 3, 4] })

  try {
    await helper.openExampleFor('<WineRatings />')

    for (const wineRatingsId of sequence) {
      const currentWineRatingsId = wineRatingsItemId.replace('wineRatingsId', wineRatingsId)
      await driver.waitForVisible(currentWineRatingsId, 20000)
    }

    t.pass('<WineRatings /> example should be visible')
  } catch (error) {
    await helper.screenshot()
    await helper.source()

    throw error
  }
})
