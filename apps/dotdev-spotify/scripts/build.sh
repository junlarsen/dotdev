#!/usr/bin/env bash

yarn
yarn build
pushd $(pwd)/dist
zip -r dotdev-spotify.zip lambda.js
popd
