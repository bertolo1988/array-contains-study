# array-contains

This repository is an attempt to study and compare the most common javascript methods to verify if one input exists in an array.

The list of tested methods can be found [here](./src/functions). 

The objective of this study is to find if implementation details of these methods have a significant weight in the performance.

## Node version

* v18.7.0
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