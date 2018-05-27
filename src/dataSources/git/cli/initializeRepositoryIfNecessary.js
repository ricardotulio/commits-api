import { curry } from 'ramda'

const initializeRepositoryIfNecessary = curry((initializeRepository, git, repositoryUrl) => {
  return git.checkIsRepo()
    .then((isRepo) => {
      if (isRepo) {
        return git
      } else {
        return initializeRepository(git, repositoryUrl)
      }
    })
})

export default initializeRepositoryIfNecessary
