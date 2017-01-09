import helper from 'tipsi-appium-helper'
import cmp from 'semver-compare'

helper.extend('version', version => cmp(
  helper.config.platformVersion,
  version
))
