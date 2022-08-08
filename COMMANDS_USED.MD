## Generate an array

This command will output a file to `data/wordCount_1000000_wordSize_500.json`

```
node src/bin/generate-arrays.mjs --count 1000000 --wordSize 500
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
```

## Test time complexity

### Commands

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

### Output

```
existsInArrayForOf took on average 11.154 milliseconds. (25x runs)
existsInArrayFor took on average 10.275 milliseconds. (25x runs)
existsInArrayWhile took on average 10.061 milliseconds. (25x runs)
existsInArrayDoWhile took on average 11.703 milliseconds. (25x runs)
includes took on average 8.684 milliseconds. (25x runs)
indexOf took on average 8.944 milliseconds. (25x runs)
findIndex took on average 18.719 milliseconds. (25x runs)
some took on average 18.995 milliseconds. (25x runs)
find took on average 19.675 milliseconds. (25x runs)
lodashIndexOf took on average 10.905 milliseconds. (25x runs)
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
