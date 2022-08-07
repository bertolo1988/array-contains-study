import subarg from 'subarg'
import { printMemoryUsed } from '../utils.mjs'
import * as functions from '../functions.mjs'

import inputArray from '../../data/wordCount_2000000_wordSize_20.json' assert { type: 'json' }

function run() {
  let argv = subarg(process.argv.slice(2))
  if (!argv.function) throw new Error('Must specify function name!')
  const functionName = argv.function
  const elementToFindFor = inputArray[inputArray.length / 2]
  const result = functions[functionName](inputArray, elementToFindFor)
  if (!result) throw Error('Should have found it!')
  printMemoryUsed(functionName)
}

run()
