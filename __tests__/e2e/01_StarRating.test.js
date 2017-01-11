import test from 'tape-async'
import helper from 'tipsi-appium-helper'

const { driver, select, idFromXPath } = helper

test('<StarRating />', async (t) => {
  const starGroupId = select({
    ios: idFromXPath(`//
      XCUIElementTypeScrollView/*/*/XCUIElementTypeOther[2]/XCUIElementTypeOther
    `),
    android: idFromXPath(`//
      android.widget.ScrollView[1]/android.view.ViewGroup[1]/*
    `),
  })
  const starItemId = select({
    ios: idFromXPath(`${starGroupId}/XCUIElementTypeStaticText`),
    android: idFromXPath(`${starGroupId}/android.widget.TextView`),
  })

  try {
    await helper.openExampleFor('<StarRating />', 60000)

    for (const starId of [1, 2, 3, 4, 5]) {
      const currentStarId = `${starItemId}[${starId}]`
      await driver.waitForVisible(currentStarId, 30000)
    }

    t.pass('<StarRating /> example should be visible')
  } catch (error) {
    await helper.screenshot()
    await helper.source()

    throw error
  }
})
