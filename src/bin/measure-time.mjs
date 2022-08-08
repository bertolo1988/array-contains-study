import {
  loadArrayFromJSON,
  parsingArguments,
  calculateAverageOfTimes
} from '../utils.mjs'
import * as functions from '../functions.mjs'

const DECIMALS = 3
const REPETITIONS = 25

function testFunction(functionName, inputArray) {
  const elementToFindFor = inputArray[inputArray.length / 2]
  let start = performance.now()
  const result = functions[functionName](inputArray, elementToFindFor)
  let end = performance.now()
  if (!result) throw Error('Should have found it!')
  return end - start
}

async function run() {
  const { fileName, functionName } = parsingArguments()
  const inputArray = await loadArrayFromJSON(fileName)

  const times = []
  for (let i = 0; i < REPETITIONS; i++) {
    times.push(testFunction(functionName, inputArray))
  }

  const averageTime = calculateAverageOfTimes(times)

  console.log(
    `${functionName} took on average ${averageTime.toFixed(
      DECIMALS
    )} milliseconds. (${REPETITIONS}x runs)`
  )
}

run()
