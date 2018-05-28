import {
  always,
  curry,
} from 'ramda'

const initRepository = curry((repositoryUrl, gitRepository) =>
  gitRepository.init()
    .then(() => gitRepository.addRemote('origin', repositoryUrl))
    .then(always(gitRepository)))

export default initRepository
