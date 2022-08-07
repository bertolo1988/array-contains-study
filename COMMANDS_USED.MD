## Generate a big array

```
node src/bin/generate-arrays.mjs --count 1000000 --wordSize 500
```

## Test space complexity

```
node --no-warnings src/bin/measure-space.mjs --file wordCount_1000000_wordSize_500 --function existsInArrayForOf
node --no-warnings src/bin/measure-space.mjs --file wordCount_1000000_wordSize_500 --function existsInArrayFor
node --no-warnings src/bin/measure-space.mjs --file wordCount_1000000_wordSize_500 --function existsInArrayWhile
node --no-warnings src/bin/measure-space.mjs --file wordCount_1000000_wordSize_500 --function existsInArrayDoWhile
node --no-warnings src/bin/measure-space.mjs --file wordCount_1000000_wordSize_500 --function includes
node --no-warnings src/bin/measure-space.mjs --file wordCount_1000000_wordSize_500 --function indexOf
node --no-warnings src/bin/measure-space.mjs --file wordCount_1000000_wordSize_500 --function findIndex
node --no-warnings src/bin/measure-space.mjs --file wordCount_1000000_wordSize_500 --function some
node --no-warnings src/bin/measure-space.mjs --file wordCount_1000000_wordSize_500 --function find
node --no-warnings src/bin/measure-space.mjs --file wordCount_1000000_wordSize_500 --function lodashIndexOf
```

## Test time complexity

```
node --no-warnings src/bin/measure-time.mjs --file wordCount_1000000_wordSize_500 --function existsInArrayForOf
node --no-warnings src/bin/measure-time.mjs --file wordCount_1000000_wordSize_500 --function existsInArrayFor
node --no-warnings src/bin/measure-time.mjs --file wordCount_1000000_wordSize_500 --function existsInArrayWhile
node --no-warnings src/bin/measure-time.mjs --file wordCount_1000000_wordSize_500 --function existsInArrayDoWhile
node --no-warnings src/bin/measure-time.mjs --file wordCount_1000000_wordSize_500 --function includes
node --no-warnings src/bin/measure-time.mjs --file wordCount_1000000_wordSize_500 --function indexOf
node --no-warnings src/bin/measure-time.mjs --file wordCount_1000000_wordSize_500 --function findIndex
node --no-warnings src/bin/measure-time.mjs --file wordCount_1000000_wordSize_500 --function some
node --no-warnings src/bin/measure-time.mjs --file wordCount_1000000_wordSize_500 --function find
node --no-warnings src/bin/measure-time.mjs --file wordCount_1000000_wordSize_500 --function lodashIndexOf
```

## Test Map

```
node --no-warnings src/bin/is-map-faster.mjs --file wordCount_1000000_wordSize_500
node --no-warnings src/bin/is-map-using-less-memory.mjs --file wordCount_1000000_wordSize_500
```
