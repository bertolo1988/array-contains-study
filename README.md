# array-contains

This repository is a study on the fastest method to find one element in one array.

## Command to generate huge array

node src/bin/generate-arrays.mjs --count 5000000 --wordSize 5

## Commands to test space complexity

node --no-warnings src/bin/measure-space.mjs --function existsInArrayForOf
node --no-warnings src/bin/measure-space.mjs --function existsInArrayFor
node --no-warnings src/bin/measure-space.mjs --function existsInArrayWhile
node --no-warnings src/bin/measure-space.mjs --function existsInArrayDoWhile
node --no-warnings src/bin/measure-space.mjs --function includes
node --no-warnings src/bin/measure-space.mjs --function indexOf
node --no-warnings src/bin/measure-space.mjs --function findIndex
node --no-warnings src/bin/measure-space.mjs --function some
node --no-warnings src/bin/measure-space.mjs --function find
node --no-warnings src/bin/measure-space.mjs --function lodashIndexOf

## Commands to test time complexity

node --no-warnings src/bin/measure-time.mjs --function existsInArrayForOf
node --no-warnings src/bin/measure-time.mjs --function existsInArrayFor
node --no-warnings src/bin/measure-time.mjs --function existsInArrayWhile
node --no-warnings src/bin/measure-time.mjs --function existsInArrayDoWhile
node --no-warnings src/bin/measure-time.mjs --function includes
node --no-warnings src/bin/measure-time.mjs --function indexOf
node --no-warnings src/bin/measure-time.mjs --function findIndex
node --no-warnings src/bin/measure-time.mjs --function some
node --no-warnings src/bin/measure-time.mjs --function find
node --no-warnings src/bin/measure-time.mjs --function lodashIndexOf

## What about map?

node --no-warnings src/bin/is-map-faster.mjs
node --no-warnings src/bin/is-map-using-less-memory.mjs

## Results
