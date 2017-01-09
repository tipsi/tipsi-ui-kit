import helper from 'tipsi-appium-helper'

helper.extend('idFromXPath', (xpath) => {
  const { platform, version } = helper
  let newXpath = xpath.replace(/\s+/g, '', '')
  if (platform('android')) {
    newXpath = version('6') === -1 ? // version < 6
      newXpath.replace(/\.ViewGroup(?!\w)/g, '.View') :
      newXpath.replace(/\.View(?!\w)/g, '.ViewGroup')
  }
  return newXpath
})
