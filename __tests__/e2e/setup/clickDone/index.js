import helper from 'tipsi-appium-helper'
import iosDone from './clickDone.ios'
import androidDone from './clickDone.android'

helper.extend('clickDone', () => (
  helper.platform('ios') ? iosDone.call(helper) : androidDone.call(helper)
))
