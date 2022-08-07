# array-contains

This repository is an attempt to study and compare the most common javascript methods to verify if one input exists in an array.

The list of tested methods can be found [here](./src/functions).

The objective of this study is to measure the impact of implementation details of these methods in the performance.

## Node version used

- v18.7.0

## How is it organized

- data/ is where the array samples will be stored

- this arrays will be stored with the following name notation: `data/wordCount_${wordCount}_wordSize_${wordSize}.json`

- generate the array file `wordCount_1000000_wordSize_500.json` with the command `node src/bin/generate-arrays.mjs --count 1000000 --wordSize 500`. This file is hardcoded in some script files until newer versions of node.js support a proper method to dinammically load JSON files inside ES modules.

## Command to generate a big array

```
node src/bin/generate-arrays.mjs --count 5000000 --wordSize 5
```

## Commands to test space complexity

```
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
```

## Commands to test time complexity

```
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
```

## What about map?

```
node --no-warnings src/bin/is-map-faster.mjs
node --no-warnings src/bin/is-map-using-less-memory.mjs
```

## Results

## Conclusion
