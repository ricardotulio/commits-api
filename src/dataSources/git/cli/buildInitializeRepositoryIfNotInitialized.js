import initRepository from './initRepository'
import initializeRepositoryIfNotInitialized from './initializeRepositoryIfNotInitialized'

const buildInitializeRepositoryIfNotInitialized = () =>
  initializeRepositoryIfNotInitialized(initRepository)

export default buildInitializeRepositoryIfNotInitialized
