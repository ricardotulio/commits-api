import {
  concat,
  curry,
  replace,
} from 'ramda'

const gitBaseUrl = 'https://github.com/'

const getPathToRepository = curry((repositoriesPath, repositoryUrl) => {
  const userAndRepository = replace(gitBaseUrl, '', repositoryUrl)

  return concat(repositoriesPath, userAndRepository)
})

export default getPathToRepository
