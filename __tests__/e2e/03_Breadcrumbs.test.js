import test from 'tape-async'
import helper from 'tipsi-appium-helper'

const { driver, select, idFromXPath } = helper

test('<Breadcrumbs />', async (t) => {
  const breadcrumbGroupId = select({
    ios: idFromXPath(`//
      XCUIElementTypeScrollView/*/*/XCUIElementTypeOther[2]/XCUIElementTypeOther/
      XCUIElementTypeOther
    `),
    android: idFromXPath(`//
      android.widget.ScrollView[1]/android.view.ViewGroup[1]/
      android.view.ViewGroup[1]
    `),
  })
  const breadcrumbItemId = select({
    ios: idFromXPath(`${breadcrumbGroupId}[breadcrumbId]/XCUIElementTypeOther/XCUIElementTypeStaticText`),
    android: idFromXPath(`${breadcrumbGroupId}/android.widget.TextView`),
  })
  const sequence = select({ ios: [1, 2, 3], android: [1, 3, 5] })

  try {
    await helper.openExampleFor('<Breadcrumbs />')

    for (const breadcrumbId of sequence) {
      const currentBreadcrumbId = select({
        ios: breadcrumbItemId.replace('breadcrumbId', breadcrumbId),
        android: `${breadcrumbItemId}[${breadcrumbId}]`,
      })
      await driver.waitForVisible(currentBreadcrumbId, 30000)
    }

    t.pass('<Breadcrumbs /> example should be visible')
  } catch (error) {
    await helper.screenshot()
    await helper.source()

    throw error
  }
})
