#!/bin/bash

case "${TRAVIS_OS_NAME}" in
  osx)
    set -o pipefail && npm run build:ios | xcpretty -c -f `xcpretty-travis-formatter`
    npm run test:unit
    npm run test:e2e:ios
  ;;
  linux)
    npm run build:android
    npm run test:unit
    npm run test:e2e:android
  ;;
esac
