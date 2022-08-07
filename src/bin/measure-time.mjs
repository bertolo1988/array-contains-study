import subarg from 'subarg'
import * as functions from '../functions.mjs'
import inputArray from '../../data/wordCount_2000000_wordSize_20.json' assert { type: 'json' }

const DECIMALS = 3
const REPETITIONS = 10

function testFunction(functionName, inputArray) {
  const elementToFindFor = inputArray[inputArray.length / 2]
  let start = performance.now()
  const result = functions[functionName](inputArray, elementToFindFor)
  let end = performance.now()
  if (!result) throw Error('Should have found it!')
  return end - start
}

function run() {
  let argv = subarg(process.argv.slice(2))
  if (!argv.function) throw new Error('Must specify function name!')
  const functionName = argv.function

  const times = []
  for (let i = 0; i < REPETITIONS; i++) {
    times.push(testFunction(functionName, inputArray))
  }
  const averageTime = times.reduce((a, b) => a + b, 0) / times.length

  console.log(
    `${functionName} took on average ${averageTime.toFixed(
      DECIMALS
    )} milliseconds. (${REPETITIONS}x runs)`
  )
}

run()
