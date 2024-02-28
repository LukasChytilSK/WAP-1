#!/bin/bash
npm install jsdoc
node ./node_modules/jsdoc/jsdoc.js -c conf.json translation.mjs README.md -d doc

# https://jsdoc.app/about-configuring-jsdoc   <--- Create a conf.json file