#!/usr/bin/env bash

# Bash build script for compiling all AWS Lambda functions

ROOT_DIRECTORY=`pwd`

if [[ ! -f "${PWD}/node_modules/.bin/tsc" ]]; then
  yarn
fi

rm -r dist
mkdir -p dist

function compile () {
  pushd $ROOT_DIRECTORY/lambda/$1
    yarn install && yarn compile || exit 1
    zip $ROOT_DIRECTORY/dist/lambda-$1.zip -r dist/* node_modules/* package.json yarn.lock index.js || exit 1
    aws lambda update-function-code --function-name $2 --zip-file fileb://$ROOT_DIRECTORY/dist/lambda-$1.zip
  popd
}

compile github-activity-stream arn:aws:lambda:eu-west-3:351022664525:function:dotdev-github-activity-stream
