import {
  printMemoryUsed,
  parsingArguments,
  loadArrayFromJSON
} from '../utils.mjs'

function convertArrayToMap(inputArray) {
  let myMap = new Map()
  for (let i = 0; i < inputArray.length; i++) {
    myMap.set(inputArray[i], inputArray[i])
  }
  return myMap
}

async function run() {
  const { fileName } = parsingArguments(false)
  const inputArray = await loadArrayFromJSON(fileName)
  const elementToFindFor = inputArray[inputArray.length / 2]
  const myMap = convertArrayToMap(inputArray)

  const result = myMap.has(elementToFindFor)
  if (!result) throw Error('Should have found it!')
  printMemoryUsed('Map')
}

run()
