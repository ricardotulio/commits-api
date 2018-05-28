import { curry } from 'ramda'

const maybeInitRepository =
  curry((initRepository, repositoryUrl, gitRepository) =>
    gitRepository.checkIsRepo()
      .then((isRepo) => {
        if (isRepo) {
          return gitRepository
        }
        return initRepository(repositoryUrl, gitRepository)
      }))

export default maybeInitRepository
