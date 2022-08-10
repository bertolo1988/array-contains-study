# array-contains

This repository is an attempt to study and compare the most common javascript methods to verify if one input exists in an array.

The list of tested methods can be found [here](./src/functions).

The objective of this study is to measure the impact of implementation details of these methods in performance of our programs.

If you want to see the results you can check the article I wrote [here](https://medium.com/@tiagobertolo/which-is-the-fastest-way-to-find-if-something-exists-in-an-array-in-javascript-49ab24051efb).


If you want to replay my study continue reading this README.

## Node version used

- v18.7.0

## Replay this study


Make sure you are using the right node.js version, v18.7.0:
```
node -v
```



Install dependencies.
```
npm install
```


Generate the input arrays. This should take a while. 
```
node src/bin/generate-arrays.mjs --count 1000000 --wordSize 500
```


Generated arrays need to be formatted before they are used.
```
`npm run prettier:format`
```


To measure how much time each function takes to find the existence of the middle value of an array with 1 million strings of length 500 paste the following commands in your terminal:
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

You can find the remaining commands and results at [COMMANDS_USED](./COMMANDS_USED.MD).