const DONE_KEY_CODE = 66

/* eslint no-console: 0 */
export default async function () {
  await this.driver.pressKeycode(DONE_KEY_CODE)
    .then(() => console.log('    ✔  User clicked a search button'))
    .catch(() => console.log('    ✔  User did not click a search button'))
}
