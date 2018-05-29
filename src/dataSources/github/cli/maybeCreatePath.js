import Promise from 'bluebird'
import {
  curry,
  ifElse,
} from 'ramda'

const maybeCreatePath = curry((directoryExists, createDirectory, path) => {
  const maybe = ifElse(
    directoryExists,
    Promise.resolve,
    createDirectory,
  )

  return maybe(path)
})

export default maybeCreatePath
