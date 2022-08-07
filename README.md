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

## Results

## Conclusion
