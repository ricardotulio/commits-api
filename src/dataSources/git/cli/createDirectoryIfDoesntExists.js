import Promise from 'bluebird'
import { curry } from 'ramda'

const createDirectoryIfDoesntExists = curry((directoryExists, createDirectory, path) => {
  if (!directoryExists(path)) {
    return createDirectory(path)
  }

  return Promise.resolve(path)
})

export default createDirectoryIfDoesntExists
