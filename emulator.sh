#!/bin/bash
set -e

echo $PWD
export GOOGLE_APPLICATION_CREDENTIALS="$PWD/auth.json"
cd functions
npm run build
firebase emulators:start --inspect-functions 6000
