import subarg from 'subarg'

const DECIMALS = 3

export function printMemoryUsed(functionName) {
  const used = process.memoryUsage().heapUsed / 1024 / 1024
  console.log(`${functionName} used memory: ${used.toFixed(DECIMALS)} MB`)
}

export function printTime(functionName, start, end) {
  console.log(
    `${functionName} took: ${(end - start).toFixed(DECIMALS)} milliseconds.`
  )
}

export async function loadArrayFromJSON(fileName) {
  const filePath = `../data/${fileName}.json`
  let inputArray = await import(filePath, {
    assert: { type: 'json' }
  })
  if (!inputArray) throw new Error('Failed to import array from JSON file!')
  return inputArray.default
}

export function parsingArguments(parseFunction = true, parseFile = true) {
  let argv = subarg(process.argv.slice(2))
  if (parseFunction && !argv.function)
    throw new Error('Must specify function name!')
  if (parseFile && !argv.file) throw new Error('Must specify array file name!')
  return { fileName: argv.file, functionName: argv.function }
}

export function calculateAverageOfTimes(times) {
  const sortedTimes = times.sort((a, b) => a - b)
  sortedTimes.shift()
  sortedTimes.shift()
  sortedTimes.pop()
  sortedTimes.pop()
  return sortedTimes.reduce((a, b) => a + b, 0) / sortedTimes.length
}
