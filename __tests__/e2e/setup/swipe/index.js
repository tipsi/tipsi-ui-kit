import helper from 'tipsi-appium-helper'
import iosSwipe from './swipe.ios'
import androidSwipe from './swipe.android'

helper.extend('swipe', (...args) => (
  helper.platform('ios') ? iosSwipe.apply(helper, args) : androidSwipe.apply(helper, args)
))
