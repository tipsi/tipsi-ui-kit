import test from 'tape-async'
import helper from 'tipsi-appium-helper'

const { driver, select, idFromXPath } = helper

test('<LabelRating />', async (t) => {
  const groupId = select({
    ios: idFromXPath(`//
      XCUIElementTypeScrollView/XCUIElementTypeOther/XCUIElementTypeOther
    `),
    android: idFromXPath(`//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/
      android.view.View[1]/android.view.View[2]/android.view.View[1]/android.widget.ScrollView[1]/android.view.View[1]/
      android.view.View
    `),
  })

  const models = [
    { id: 1, title: 'WS', rating: '92' },
    { id: 2, title: 'LR' },
    { id: 3, title: 'NT', rating: '22' },
  ]

  try {
    await helper.openExampleFor('<LabelRating />')

    for (const model of models) {
      const id = `${groupId}[${model.id}]`

      const currentTitleId = select({
        ios: `${id}/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeStaticText`,
        android: `${id}/android.view.View[2]/android.view.View[1]/android.widget.TextView[1]`,
      })

      await driver.waitForVisible(currentTitleId, 20000)
      t.pass(`LabelRating (id: ${model.id}) title text should be visible`)

      const title = await driver.getText(currentTitleId)
      t.equal(title, model.title, `LabelRating (id: ${model.id}) should has title: ${model.title}`)

      if (model.rating) {
        const currentRatingId = select({
          ios: `${id}/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeStaticText`,
          android: `${id}/android.view.View[2]/android.view.View[2]/android.widget.TextView[1]`,
        })

        await driver.waitForVisible(currentRatingId, 20000)
        t.pass(`LabelRating (id: ${model.id}) rating text should be visible`)

        const rating = await driver.getText(currentRatingId)
        t.equal(rating, model.rating, `LabelRating (id: ${model.id}) should has rating: ${model.rating}`)
      }
    }

    t.pass('<LabelRating /> example should be visible')
  } catch (error) {
    await helper.screenshot()
    await helper.source()

    throw error
  }
})
