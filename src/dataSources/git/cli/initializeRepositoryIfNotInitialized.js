import { curry } from 'ramda'

const initializeRepositoryIfNotInitialized = curry((initializeRepository, repositoryUrl, git) => {
  return git.checkIsRepo()
    .then((isRepo) => {
      if (isRepo) {
        return git
      } else {
        return initializeRepository(repositoryUrl, git)
      }
    })
})

export default initializeRepositoryIfNotInitialized
