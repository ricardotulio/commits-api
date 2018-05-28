import {
  always,
  curry,
} from 'ramda'

const initRepository = curry((repository, gitRepository) => {
  const repositoryUrl = `https://github.com/${repository}`

  return gitRepository.init()
    .then(() => gitRepository.addRemote('origin', repositoryUrl))
    .then(always(gitRepository))
})

export default initRepository
