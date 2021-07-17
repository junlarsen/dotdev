#!/usr/bin/env bash

# Bash build script for compiling all AWS Lambda functions

PWD=`pwd`

if [[ ! -f "${PWD}/node_modules/.bin/tsc" ]]; then
  yarn
fi

rm -r dist
mkdir -p dist build

function compile () {
  rm -r build
  mkdir -p build && pushd build
    cp -r ../lambda/$1/* .
    yarn install --production=true
    yarn compile
    zip ../dist/lambda-$1.zip -r dist/* node_modules/* package.json yarn.lock index.js
    aws lambda update-function-code --function-name $2 --zip-file fileb://../dist/lambda-$1.zip
  popd
}

compile github-activity-stream arn:aws:lambda:eu-west-3:351022664525:function:dotdev-github-activity-stream

rm -r build
