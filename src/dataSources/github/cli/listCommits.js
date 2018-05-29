import buildGitRepository from 'simple-git/promise'
import buildMaybeCreatePath from './buildMaybeCreatePath'
import buildMaybeInitRepository from './buildMaybeInitRepository'
import fetchAndPull from './fetchAndPull'
import checkoutTo from './checkoutTo'
import getPathToRepository from './getPathToRepository'
import getPaginatedLog from './getPaginatedLog'
import formatCommitList from './formatCommitList'

const maybeCreatePath = buildMaybeCreatePath()

const maybeInitRepository = buildMaybeInitRepository()

const listCommits = (params) => {
  const { repository, branch, pagination } = params

  return Promise.resolve(repository)
    .then(getPathToRepository)
    .then(maybeCreatePath)
    .then(buildGitRepository)
    .then(maybeInitRepository(repository))
    .then(fetchAndPull(branch))
    .then(checkoutTo(branch))
    .then(getPaginatedLog(pagination))
    .then(formatCommitList)
}

export default listCommits
