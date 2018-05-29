import mkdirp from 'mkdirp-promise'
import { existsSync as directoryExists } from 'fs'
import maybeCreatePath from './maybeCreatePath'

const createDirectory = path => mkdirp(path)
  .then(() => path)

const buildMaybeCreatePath = () =>
  maybeCreatePath(directoryExists, createDirectory)

export default buildMaybeCreatePath
