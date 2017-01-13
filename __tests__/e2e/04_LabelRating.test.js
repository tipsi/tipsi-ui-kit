import test from 'tape-async'
import helper from 'tipsi-appium-helper'

const { driver, select, idFromXPath } = helper

test('<LabelRating />', async (t) => {
  const groupId = select({
    ios: idFromXPath(`//
      XCUIElementTypeScrollView/XCUIElementTypeOther
    `),
    android: idFromXPath(`//
      android.widget.ScrollView[1]/android.view.View[1]
    `),
  })
  const titleTextId = select({
    ios: idFromXPath(`
      ${groupId}/XCUIElementTypeOther[labelRatingId]/XCUIElementTypeOther[2]/
      XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeStaticText
    `),
    android: idFromXPath(`
      ${groupId}/android.view.View[labelRatingId]/android.view.View[2]/
      android.view.View[1]/android.widget.TextView[1]
    `),
  })
  const ratingTextId = select({
    ios: idFromXPath(`
      ${groupId}/XCUIElementTypeOther[labelRatingId]/XCUIElementTypeOther[2]/
      XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeStaticText
    `),
    android: idFromXPath(`
      ${groupId}/android.view.View[labelRatingId]/android.view.View[2]/
      android.view.View[2]/android.widget.TextView[1]
    `),
  })

  const defaultRating = '0'
  const models = [
    { id: 1, title: 'WS', rating: '92' },
    { id: 2, title: 'LR' },
    { id: 3, title: 'NT', rating: '22' },
  ]

  try {
    await helper.openExampleFor('<LabelRating />')

    for (const model of models) {
      const currentTitleTextId = titleTextId.replace('labelRatingId', model.id)

      await driver.waitForVisible(currentTitleTextId, 20000)
      t.pass(`LabelRating (id: ${model.id}) title text should be visible`)

      const title = await driver.getText(currentTitleTextId)
      t.equal(title, model.title, `LabelRating (id: ${model.id}) should has title: ${model.title}`)

      const currentRatingTextId = ratingTextId.replace('labelRatingId', model.id)

      await driver.waitForVisible(currentRatingTextId, 20000)
      t.pass(`LabelRating (id: ${model.id}) rating text should be visible`)

      const expectedRating = model.rating || defaultRating
      const rating = await driver.getText(currentRatingTextId)
      t.equal(rating, expectedRating, `LabelRating (id: ${model.id}) should has rating: ${expectedRating}`)
    }

    t.pass('<LabelRating /> example should be visible')
  } catch (error) {
    await helper.screenshot()
    await helper.source()

    throw error
  }
})
