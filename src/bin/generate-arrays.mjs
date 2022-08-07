import path from 'path'
import subarg from 'subarg'
import fs from 'fs'

function generateRandomString(length = 10) {
  var result = ''
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var charactersLength = characters.length
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

function generateFileArray(filePath, length, generator) {
  function writeOpenArray(filePath) {
    fs.writeFileSync(filePath, '[', { flag: 'a+' })
  }

  function writeCloseArray(filePath) {
    fs.writeFileSync(filePath, ']', { flag: 'a+' })
  }

  function writeArrayEntry(filePath, arr) {
    const stringifiedArray = JSON.stringify(arr)
    let arrayWithoutBrackets = stringifiedArray.slice(
      1,
      stringifiedArray.length - 1
    )
    fs.writeFileSync(filePath, `${arrayWithoutBrackets},`, { flag: 'a+' })
  }
  writeOpenArray(filePath)
  for (let i = 0; i < length; i++) {
    writeArrayEntry(filePath, [generator()])
    // console.log(`Progress: ${((i * 100) / length).toFixed(2)}%`)
  }
  writeCloseArray(filePath)
}

function run() {
  var argv = subarg(process.argv.slice(2))

  if (!argv.count)
    throw new Error('Must specify array size with --count ${count}.')

  if (!argv.wordSize)
    throw new Error('Must specify array size with --wordSize ${wordSize}.')

  const { wordSize, count } = argv
  const OUTPUT_FILE = `${path.resolve()}/data/wordCount_${count}_wordSize_${wordSize}.json`

  generateFileArray(OUTPUT_FILE, count, () => {
    return generateRandomString(wordSize)
  })
}

run()
