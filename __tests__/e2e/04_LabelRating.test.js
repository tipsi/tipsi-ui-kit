import test from 'tape-async'
import helper from 'tipsi-appium-helper'

const { driver, select, idFromXPath } = helper

test('<LabelRating />', async (t) => {
  const labelRatingGroupId = select({
    ios: idFromXPath(`//
      XCUIElementTypeScrollView/*/*/XCUIElementTypeOther[2]/XCUIElementTypeOther/
      XCUIElementTypeOther/XCUIElementTypeOther
    `),
    android: idFromXPath(`//
      android.widget.ScrollView[1]/android.view.ViewGroup[1]/
      android.view.ViewGroup[1]/android.view.ViewGroup
    `),
  })
  const labelRatingItemId = select({
    ios: idFromXPath(`${labelRatingGroupId}[labelRatingId]/XCUIElementTypeOther/XCUIElementTypeStaticText`),
    android: idFromXPath(`${labelRatingGroupId}[labelRatingId]/android.view.ViewGroup[1]/android.widget.TextView[1]`),
  })
  const sequence = select({ ios: [1, 2, 3], android: [2, 3, 4] })

  try {
    await helper.openExampleFor('<LabelRating />')

    for (const labelRatingId of sequence) {
      const currentLabelRatingId = labelRatingItemId.replace('labelRatingId', labelRatingId)
      await driver.waitForVisible(currentLabelRatingId, 20000)
    }

    t.pass('<LabelRating /> example should be visible')
  } catch (error) {
    await helper.screenshot()
    await helper.source()

    throw error
  }
})
