import inputArray from '../../data/wordCount_1000000_wordSize_500.json' assert { type: 'json' }

const DECIMALS = 3
const REPETITIONS = 10

function testFunction(myMap) {
  const elementToFindFor = inputArray[inputArray.length / 2]
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

function run() {
  const myMap = convertArrayToMap(inputArray)

  const times = []
  for (let i = 0; i < REPETITIONS; i++) {
    times.push(testFunction(myMap))
  }
  const averageTime = times.reduce((a, b) => a + b, 0) / times.length

  console.log(
    `Map took on average ${averageTime.toFixed(
      DECIMALS
    )} milliseconds. (${REPETITIONS}x runs)`
  )
}

run()
