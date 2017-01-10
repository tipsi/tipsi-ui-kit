#!/bin/bash

set -e

isMacOS() {
  [ "$(uname)" == "Darwin" ]
}

###################
# BEFORE INSTALL  #
###################

# Skip iOS step if current os is not macOS
! isMacOS && echo "Current os is not macOS, setup for iOS will be skipped"

###################
# INSTALL         #
###################

# Install dependencies
npm install

###################
# BEFORE BUILD    #
###################

# Run appium
(pkill -9 -f appium || true)
npm run appium > /dev/null 2>&1 &

###################
# BUILD           #
###################

# Build Android app
npm run build:android
# Build iOS app
isMacOS && npm run build:ios

###################
# TESTS           #
###################

# Run unit tests
npm run test:unit
# Run Android e2e tests
npm run test:e2e:android
# Run iOS e2e tests
if isMacOS; then
  npm run test:e2e:ios
fi
