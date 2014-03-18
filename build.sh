#!/bin/bash

# Copy over index.html and require.js directly from source (you could optimized
# them if you'd like)
mkdir -p dist/bower_components/requirejs
cp app/bower_components/requirejs/require.js dist/bower_components/requirejs/require.js
cp app/index.html dist/index.html

# Call r.js for each module to optimize
r.js -o app/scripts/build-config.json
r.js -o app/scripts/modules/module1/build-config.json
r.js -o app/scripts/modules/module2/build-config.json
