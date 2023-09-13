#!/bin/bash

export CI_BUILD_NAME="github-action-venortso"
export CI_BUILD_NUM="1.0.0"

# Please modify to match the artifacts to be uploaded for your project
jf npm publish --build-name=$CI_BUILD_NAME --build-number=$CI_BUILD_NUM --flat=false 

# read env vars
jf rt bce $CI_BUILD_NAME $CI_BUILD_NUM

# Publish build info
jf rt bp $CI_BUILD_NAME $CI_BUILD_NUM