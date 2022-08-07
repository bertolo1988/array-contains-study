import {
  printMemoryUsed,
  loadArrayFromJSON,
  parsingArguments
} from '../utils.mjs'
import * as functions from '../functions.mjs'

function testFunction(functionName, inputArray) {
  const elementToFindFor = inputArray[inputArray.length / 2]
  const result = functions[functionName](inputArray, elementToFindFor)
  if (!result) throw Error('Should have found it!')
}

async function run() {
  const { fileName, functionName } = parsingArguments()
  const inputArray = await loadArrayFromJSON(fileName)

  testFunction(functionName, inputArray)
  printMemoryUsed(functionName)
}

run()
