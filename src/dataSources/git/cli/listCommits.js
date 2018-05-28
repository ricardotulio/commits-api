import Promise from 'bluebird'
import buildGitRepository from 'simple-git/promise'
import buildMaybeCreatePath from './buildMaybeCreatePath'
import buildMaybeInitRepository from './buildMaybeInitRepository'
import fetchAndPull from './fetchAndPull'
import checkoutTo from './checkoutTo'
import getPathToRepository from './getPathToRepository'
import getPaginatedLog from './getPaginatedLog'
import formatGitLog from './formatGitLog'

const maybeCreatePath = buildMaybeCreatePath()

const maybeInitRepository = buildMaybeInitRepository()

const repositoriesPath = '/tmp/repositories/'

const listCommits = (params) => {
  const { repositoryUrl, branch, pagination } = params

  return Promise.resolve(repositoryUrl)
    .then(getPathToRepository(repositoriesPath))
    .then(maybeCreatePath)
    .then(buildGitRepository)
    .then(maybeInitRepository(repositoryUrl))
    .then(fetchAndPull(branch))
    .then(checkoutTo(branch))
    .then(getPaginatedLog(pagination))
    .then(formatGitLog)
}

export default listCommits
