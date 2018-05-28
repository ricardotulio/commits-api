import { curry } from 'ramda'

const initializeRepositoryIfNotInitialized =
  curry((initializeRepository, repositoryUrl, gitRepository) =>
    gitRepository.checkIsRepo()
      .then((isRepo) => {
        if (isRepo) {
          return gitRepository
        }
        return initializeRepository(repositoryUrl, gitRepository)
      }))

export default initializeRepositoryIfNotInitialized
