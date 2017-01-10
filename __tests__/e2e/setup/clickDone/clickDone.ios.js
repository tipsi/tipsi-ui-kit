export default async function iosDoneButtonIdCreator() {
  const defaultId = this.idFromXPath(`
      //XCUIElementTypeApplication/XCUIElementTypeWindow[5]/XCUIElementTypeOther/
      XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeKeyboard/
      XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeButton[4]
  `)

  const nextId = this.idFromXPath(`
      //XCUIElementTypeApplication/XCUIElementTypeWindow[4]/XCUIElementTypeOther/
      XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeKeyboard/
      XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeButton[4]
  `)

  let id

  try {
    await this.driver.waitForVisible(defaultId, 5000)
    id = defaultId
  } catch (e) {
    // Do nothing
  }

  if (id) {
    return id
  }

  try {
    await this.driver.waitForVisible(nextId, 5000)
    id = nextId
  } catch (e) {
    // Do nothing
  }

  if (id) {
    return id
  }

  throw new Error('Done button not found')
}
