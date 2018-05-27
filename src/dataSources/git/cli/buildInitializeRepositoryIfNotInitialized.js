import initializeRepository from './initializeRepository'
import initializeRepositoryIfNotInitialized from './initializeRepositoryIfNotInitialized'

const buildInitializeRepositoryIfNotInitialized = () =>
  initializeRepositoryIfNotInitialized(initializeRepository)

export default buildInitializeRepositoryIfNotInitialized
