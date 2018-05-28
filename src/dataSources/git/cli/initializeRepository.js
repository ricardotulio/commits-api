import {
  always,
  curry,
} from 'ramda'

const initializeRepository = curry((repositoryUrl, gitRepo) => gitRepo.init()
  .then(() => gitRepo.addRemote('origin', repositoryUrl))
  .then(always(gitRepo)))

export default initializeRepository
