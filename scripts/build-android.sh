#!/bin/bash

# Generate release keystore
keytool \
  -v \
  -genkey \
  -keystore android/app/release.keystore \
  -storepass android \
  -alias androidreleasekey \
  -keypass android \
  -dname 'CN=Android Debug,O=Android,C=US'
# Go to android path
cd android
# Run release build
./gradlew assembleRelease --console=plain -S
