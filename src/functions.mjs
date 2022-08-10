import _ from 'lodash'

export function existsInArrayForOf(arr, targetElem) {
  for (let elem of arr) {
    if (elem === targetElem) return true
  }
  return false
}

export function existsInArrayFor(arr, targetElem) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === targetElem) return true
  }
  return false
}

export function existsInArrayWhile(arr, targetElem) {
  let i = 0
  while (i < arr.length) {
    if (arr[i] === targetElem) return true
    i++
  }
  return false
}

export function existsInArrayDoWhile(arr, targetElem) {
  let i = 0
  do {
    if (arr[i] === targetElem) return true
    i++
  } while (i < arr.length)
  return false
}

export function includes(arr, elem) {
  return arr.includes(elem)
}

export function indexOf(arr, elem) {
  return arr.indexOf(elem) > -1
}

export function findIndex(arr, elem) {
  return arr.findIndex((value) => elem === value) > -1
}

export function some(arr, elem) {
  return arr.some((value) => elem === value) > -1
}

export function find(arr, elem) {
  return arr.find((e) => e === elem) != null
}

export function lodashIndexOf(arr, elem) {
  return _.indexOf(arr, elem) > -1
}

export function lodashIncludes(arr, elem) {
  return _.includes(arr, elem)
}
