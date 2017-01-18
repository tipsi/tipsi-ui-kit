import test from 'tape-async'
import helper from 'tipsi-appium-helper'

const { driver, select, idFromXPath } = helper

test('<LabelRating />', async (t) => {
  const groupId = select({
    ios: idFromXPath(`//
      XCUIElementTypeScrollView/XCUIElementTypeOther/XCUIElementTypeOther[groupId]/XCUIElementTypeOther[2]
    `),
    android: idFromXPath(`//
      android.widget.ScrollView[1]/android.view.View[1]/android.view.View[groupId]
    `),
  })
  const containerId = select({
    ios: idFromXPath(`
      XCUIElementTypeOther
    `),
    android: idFromXPath(`
      android.view.View[1]
    `),
  })
  const labelRatingId = select({
    ios: idFromXPath(`
      XCUIElementTypeOther[labelRatingId]
    `),
    android: idFromXPath(`
      android.view.View[labelRatingId]
    `),
  })
  const titleTextId = select({
    ios: idFromXPath(`
      XCUIElementTypeOther[1]/XCUIElementTypeStaticText
    `),
    android: idFromXPath(`
      android.view.View[1]/android.widget.TextView[1]
    `),
  })
  const ratingTextId = select({
    ios: idFromXPath(`
      XCUIElementTypeOther[2]/XCUIElementTypeStaticText
    `),
    android: idFromXPath(`
      android.view.View[2]/android.widget.TextView[1]
    `),
  })

  const groups = []

  // build "Title And Rating" group
  const titleAndRatingGroup = {
    labelRatingsParentId: `${groupId}`.replace('groupId', 1),
    labelRatings: [
      { title: 'EXAMPLE', rating: '15' },
    ],
  }
  groups.push(titleAndRatingGroup)

  // build "Types" group
  const typesGroup = {
    labelRatingsParentId: select({
      ios: `${groupId}/${containerId}`,
      android: `${groupId}`,
    }).replace('groupId', 2),
    labelRatings: [
      { title: 'PR', rating: '88' },
      { title: 'SU', rating: '72' },
      { title: 'WA', rating: '60' },
      { title: 'AL', rating: '92' },
    ],
  }
  groups.push(typesGroup)

  // build "Custom Theme" group
  const customThemeGroup = {
    labelRatingsParentId: `${groupId}`.replace('groupId', 3),
    labelRatings: [
      { title: 'SIZE', rating: '30' },
    ],
  }
  groups.push(customThemeGroup)

  try {
    await helper.openExampleFor('<LabelRating />')

    for (const group of groups) {
      const currentLabelRatingsParentId = group.labelRatingsParentId
      const currentLabelRatings = group.labelRatings

      for (const [index, labelRating] of currentLabelRatings.entries()) {
        const indexShift = select({
          ios: 1,
          android: 2,
        })

        const currentLabelRatingId = `${currentLabelRatingsParentId}/${labelRatingId}`.replace('labelRatingId', (index + indexShift))

        const currentLabelRatingDescription = `[${labelRating.title}-${labelRating.rating}]`

        await driver.waitForVisible(currentLabelRatingId, 20000)
        t.pass(`${currentLabelRatingDescription} should be visible`)

        const titleText = labelRating.title
        const currentTitleTextId = `${currentLabelRatingId}/${titleTextId}`
        const sutCurrentTitleText = await driver.getText(currentTitleTextId)
        t.equal(sutCurrentTitleText, titleText, `${currentLabelRatingDescription} should has title: ${titleText}`)

        const ratingText = labelRating.rating
        const currentRatingTextId = `${currentLabelRatingId}/${ratingTextId}`
        const sutCurrentRatingText = await driver.getText(currentRatingTextId)
        t.equal(sutCurrentRatingText, ratingText, `${currentLabelRatingDescription} should has rating: ${ratingText}`)
      }
    }

    t.pass('<LabelRating /> example should be visible')
  } catch (error) {
    await helper.screenshot()
    await helper.source()

    throw error
  }
})
