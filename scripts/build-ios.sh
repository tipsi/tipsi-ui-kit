#!/bin/bash

# Go to ios path
cd ios
# Run release build
xcodebuild \
  -scheme TipsiUIKit \
  -sdk iphonesimulator \
  -configuration Release \
  -derivedDataPath build \
  -destination "platform=iOS Simulator,name=iPhone 6" \
  ONLY_ACTIVE_ARCH=NO \
  OTHER_LDFLAGS="\$(inherited) -ObjC -lc++" \
  build
