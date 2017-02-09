#!/bin/bash

# Go to android path
cd android

# Clean
./gradlew clean

# Remove old release keystore
rm -rf app/release.keystore
# Generate release keystore
keytool \
  -v \
  -genkey \
  -keystore app/release.keystore \
  -storepass android \
  -alias androidreleasekey \
  -keypass android \
  -dname 'CN=Android Debug,O=Android,C=US'
# Run release build
./gradlew assembleRelease --console=plain -S
