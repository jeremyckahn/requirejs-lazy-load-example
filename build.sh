#!/bin/bash

mkdir -p dist/bower_components/requirejs
cp app/bower_components/requirejs/require.js dist/bower_components/requirejs/require.js
cp app/index.html dist/index.html

r.js -o app/scripts/build-config.json
r.js -o app/scripts/modules/module1/build-config.json
r.js -o app/scripts/modules/module2/build-config.json
