import helper from 'tipsi-appium-helper'

helper.extend('idFromXPath', (xpath) => {
  const { platform, version } = helper
  let newXpath = xpath.replace(/\s+/g, '', '')
  if (platform('android')) {
    newXpath = version('6') === -1 ? // version < 6
      xpath.replace(/\.ViewGroup(?!\w)/g, '.View') :
      xpath.replace(/\.View(?!\w)/g, '.ViewGroup')
  }
  return newXpath
})
