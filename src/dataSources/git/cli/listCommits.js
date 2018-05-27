import buildGitObject from 'simple-git/promise'
import buildCreateDirectoryIfDoesntExists from './buildCreateDirectoryIfDoesntExists'
import buildInitializeRepositoryIfNotInitialized from './buildInitializeRepositoryIfNotInitialized'
import fetchAndPull from './fetchAndPull'
import getPathToRepository from './getPathToRepository'
import formatGitLog from './formatGitLog'

const createDirectoryIfDoesntExists = buildCreateDirectoryIfDoesntExists()

const initializeRepositoryIfNotInitialized = buildInitializeRepositoryIfNotInitialized()

const repositoriesPath = '/tmp/repositories/';

const listCommits = (repositoryUrl, branch = 'master') =>
  Promise.resolve(repositoryUrl)
    .then(getPathToRepository(repositoriesPath))
    .then(createDirectoryIfDoesntExists)
    .then(buildGitObject)
    .then(initializeRepositoryIfNotInitialized(repositoryUrl))
    .then(fetchAndPull(branch))
    .then(git => git.log())
    .then(formatGitLog)

export default listCommits
