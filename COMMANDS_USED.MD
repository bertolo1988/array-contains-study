## Generate an array

This command will output 2 array files to `data/wordCount_X_wordSize_Y.json`

```
node src/bin/generate-arrays.mjs --count 1000000 --wordSize 500
node src/bin/generate-arrays.mjs --count 2000000 --wordSize 20
```

## Test time complexity

### Commands

```
node --no-warnings src/bin/measure-time.mjs --file wordCount_1000000_wordSize_500 --function existsInArrayForOf
node --no-warnings src/bin/measure-time.mjs --file wordCount_1000000_wordSize_500 --function existsInArrayFor
node --no-warnings src/bin/measure-time.mjs --file wordCount_1000000_wordSize_500 --function existsInArrayWhile
node --no-warnings src/bin/measure-time.mjs --file wordCount_1000000_wordSize_500 --function existsInArrayForIgnoreDataType
node --no-warnings src/bin/measure-time.mjs --file wordCount_1000000_wordSize_500 --function existsInArrayDoWhile
node --no-warnings src/bin/measure-time.mjs --file wordCount_1000000_wordSize_500 --function includes
node --no-warnings src/bin/measure-time.mjs --file wordCount_1000000_wordSize_500 --function indexOf
node --no-warnings src/bin/measure-time.mjs --file wordCount_1000000_wordSize_500 --function findIndex
node --no-warnings src/bin/measure-time.mjs --file wordCount_1000000_wordSize_500 --function some
node --no-warnings src/bin/measure-time.mjs --file wordCount_1000000_wordSize_500 --function find
node --no-warnings src/bin/measure-time.mjs --file wordCount_1000000_wordSize_500 --function lodashIndexOf
node --no-warnings src/bin/measure-time.mjs --file wordCount_1000000_wordSize_500 --function lodashIncludes
```

### Output

```
existsInArrayForOf took on average 10.257 milliseconds. (25x runs)
existsInArrayFor took on average 9.984 milliseconds. (25x runs)
existsInArrayWhile took on average 9.628 milliseconds. (25x runs)
existsInArrayForIgnoreDataType took on average 9.891 milliseconds. (25x runs)
existsInArrayDoWhile took on average 9.951 milliseconds. (25x runs)
includes took on average 7.705 milliseconds. (25x runs)
indexOf took on average 7.960 milliseconds. (25x runs)
findIndex took on average 18.035 milliseconds. (25x runs)
some took on average 17.273 milliseconds. (25x runs)
find took on average 20.083 milliseconds. (25x runs)
lodashIndexOf took on average 10.869 milliseconds. (25x runs)
lodashIncludes took on average 9.878 milliseconds. (25x runs)
```

### Commands

```
node --no-warnings src/bin/measure-time.mjs --file wordCount_2000000_wordSize_20 --function existsInArrayForOf
node --no-warnings src/bin/measure-time.mjs --file wordCount_2000000_wordSize_20 --function existsInArrayFor
node --no-warnings src/bin/measure-time.mjs --file wordCount_2000000_wordSize_20 --function existsInArrayWhile
node --no-warnings src/bin/measure-time.mjs --file wordCount_2000000_wordSize_20 --function existsInArrayForIgnoreDataType
node --no-warnings src/bin/measure-time.mjs --file wordCount_2000000_wordSize_20 --function existsInArrayDoWhile
node --no-warnings src/bin/measure-time.mjs --file wordCount_2000000_wordSize_20 --function includes
node --no-warnings src/bin/measure-time.mjs --file wordCount_2000000_wordSize_20 --function indexOf
node --no-warnings src/bin/measure-time.mjs --file wordCount_2000000_wordSize_20 --function findIndex
node --no-warnings src/bin/measure-time.mjs --file wordCount_2000000_wordSize_20 --function some
node --no-warnings src/bin/measure-time.mjs --file wordCount_2000000_wordSize_20 --function find
node --no-warnings src/bin/measure-time.mjs --file wordCount_2000000_wordSize_20 --function lodashIndexOf
node --no-warnings src/bin/measure-time.mjs --file wordCount_2000000_wordSize_20 --function lodashIncludes
```

### Output

```
existsInArrayForOf took on average 11.504 milliseconds. (25x runs)
existsInArrayFor took on average 8.044 milliseconds. (25x runs)
existsInArrayWhile took on average 7.992 milliseconds. (25x runs)
existsInArrayForIgnoreDataType took on average 8.056 milliseconds. (25x runs)
existsInArrayDoWhile took on average 7.959 milliseconds. (25x runs)
includes took on average 9.232 milliseconds. (25x runs)
indexOf took on average 8.015 milliseconds. (25x runs)
findIndex took on average 16.508 milliseconds. (25x runs)
some took on average 16.211 milliseconds. (25x runs)
find took on average 21.370 milliseconds. (25x runs)
lodashIndexOf took on average 10.321 milliseconds. (25x runs)
lodashIncludes took on average 10.350 milliseconds. (25x runs)
```

## Test space complexity

### Commands

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
node --no-warnings src/bin/measure-space.mjs --file wordCount_1000000_wordSize_500 --function lodashIncludes
```

### Output

```
existsInArrayForOf used memory: 516.094 MB
existsInArrayFor used memory: 508.497 MB
existsInArrayWhile used memory: 508.497 MB
existsInArrayDoWhile used memory: 508.497 MB
includes used memory: 508.483 MB
indexOf used memory: 508.483 MB
findIndex used memory: 508.496 MB
some used memory: 508.496 MB
find used memory: 508.496 MB
lodashIndexOf used memory: 508.496 MB
lodashIncludes used memory: 508.561 MB
```

## Test Map

### Commands

```
node --no-warnings src/bin/is-map-faster.mjs --file wordCount_1000000_wordSize_500
node --no-warnings src/bin/is-map-using-less-memory.mjs --file wordCount_1000000_wordSize_500
```

### Output

```
Map took on average 0.001 milliseconds. (25x runs)
Map used memory: 560.442 MB
```
