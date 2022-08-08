import {
  parsingArguments,
  loadArrayFromJSON,
  calculateAverageOfTimes
} from '../utils.mjs'

const DECIMALS = 3
const REPETITIONS = 25

function testFunction(myMap, elementToFindFor) {
  let start = performance.now()
  const result = myMap.has(elementToFindFor)
  let end = performance.now()
  if (!result) throw Error('Should have found it!')
  return end - start
}

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

  const times = []
  for (let i = 0; i < REPETITIONS; i++) {
    times.push(testFunction(myMap, elementToFindFor))
  }
  const averageTime = calculateAverageOfTimes(times)

  console.log(
    `Map took on average ${averageTime.toFixed(
      DECIMALS
    )} milliseconds. (${REPETITIONS}x runs)`
  )
}

run()
