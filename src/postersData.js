import { data } from './posters.js'

function randomizeArray(arr) {
  return arr
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
}

const POSTERS = randomizeArray(data)

export { POSTERS }
