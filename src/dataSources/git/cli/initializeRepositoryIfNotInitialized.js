import { curry } from 'ramda'

const initializeRepositoryIfNotInitialized =
  curry((initializeRepository, repositoryUrl, git) =>
    git.checkIsRepo()
      .then((isRepo) => {
        if (isRepo) {
          return git
        }
        return initializeRepository(repositoryUrl, git)
      }))

export default initializeRepositoryIfNotInitialized
