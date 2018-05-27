import createDirectory from 'mkdirp-promise'
import { existsSync as directoryExists } from 'fs'
import createDirectoryIfDoesntExists from './createDirectoryIfDoesntExists'

const buildCreateDirectoryIfDoesntExists = () =>
  createDirectoryIfDoesntExists(directoryExists, createDirectory)

export default buildCreateDirectoryIfDoesntExists
