import {
  always,
  curry,
} from 'ramda'

const initializeRepository = curry((repositoryUrl, git) => git.init()
  .then(() => git.addRemote('origin', repositoryUrl))
  .then(always(git)))

export default initializeRepository
