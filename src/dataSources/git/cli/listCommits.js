import Promise from 'bluebird'
import buildGitRepository from 'simple-git/promise'
import buildMaybeCreatePath from './buildMaybeCreatePath'
import buildInitializeRepositoryIfNotInitialized from './buildInitializeRepositoryIfNotInitialized'
import fetchAndPull from './fetchAndPull'
import checkoutTo from './checkoutTo'
import getPathToRepository from './getPathToRepository'
import getPaginatedLog from './getPaginatedLog'
import formatGitLog from './formatGitLog'

const maybeCreatePath = buildMaybeCreatePath()

const initializeRepositoryIfNotInitialized = buildInitializeRepositoryIfNotInitialized()

const repositoriesPath = '/tmp/repositories/'

const listCommits = (repositoryUrl, branch = 'master', pagination) =>
  Promise.resolve(repositoryUrl)
    .then(getPathToRepository(repositoriesPath))
    .then(maybeCreatePath)
    .then(buildGitRepository)
    .then(initializeRepositoryIfNotInitialized(repositoryUrl))
    .then(fetchAndPull(branch))
    .then(checkoutTo(branch))
    .then(getPaginatedLog(pagination))
    .then(formatGitLog)

export default listCommits
