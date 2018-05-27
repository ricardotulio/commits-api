import initializeRepository from './initializeRepository'
import initializeRepositoryIfNecessary from './initializeRepositoryIfNecessary'

const buildInitializeRepositoryIfNecessary = () =>
  initializeRepositoryIfNecessary(initializeRepository)

export default buildInitializeRepositoryIfNecessary
