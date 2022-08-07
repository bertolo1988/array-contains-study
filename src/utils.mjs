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
