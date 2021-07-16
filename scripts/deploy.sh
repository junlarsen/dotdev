#!/usr/bin/env bash

# Bash build script for compiling all AWS Lambda functions

PWD=`pwd`

if [[ ! -f "${PWD}/node_modules/.bin/tsc" ]]; then
  yarn
fi

rm -r dist
mkdir -p dist

function compile () {
  pushd lambda/$1
  echo "Entering directory lambda/$1"
  yarn && yarn compile
  zip ../../dist/lambda-$1.zip dist/**/* node_modules/**/* package.json yarn.lock index.js
  echo "Deploying Lambda $2 to AWS"
  aws lambda update-function-code --function-name $2 --zip-file fileb://../../dist/lambda-$1.zip
  popd
}

compile last-fm-recently-played arn:aws:lambda:eu-west-3:351022664525:function:dotdev-lastfm
