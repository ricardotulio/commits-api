import createDirectory from 'mkdirp-promise'
import { existsSync as directoryExists } from 'fs'
import maybeCreatePath from './maybeCreatePath'

const buildMaybeCreatePath = () =>
  maybeCreatePath(directoryExists, createDirectory)

export default buildMaybeCreatePath
