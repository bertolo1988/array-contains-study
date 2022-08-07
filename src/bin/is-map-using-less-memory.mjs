import { printMemoryUsed } from '../utils.mjs'

import inputArray from '../../data/wordCount_1000000_wordSize_500.json' assert { type: 'json' }

function convertArrayToMap(inputArray) {
  let myMap = new Map()
  for (let i = 0; i < inputArray.length; i++) {
    myMap.set(inputArray[i], inputArray[i])
  }
  return myMap
}

function run() {
  const myMap = convertArrayToMap(inputArray)
  const elementToFindFor = inputArray[inputArray.length / 2]
  const result = myMap.has(elementToFindFor)
  if (!result) throw Error('Should have found it!')
  printMemoryUsed('Map')
}

run()
