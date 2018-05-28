import Promise from 'bluebird'
import {
  curry,
  ifElse,
} from 'ramda'

const maybeCreatePath = curry((directoryExists, createDirectory, path) => {
  const maybe = ifElse(
    directoryExists,
    Promise.resolve,
    (path) => createDirectory(path),
  )

  return maybe(path)
})

export default maybeCreatePath
