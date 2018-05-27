import getPathToRepository from '../../../../src/dataSources/git/cli/getPathToRepository'

describe('return path to clone repository', () => {
  test('must return a correctly path to repository', () => {
    const repositoriesPath = '/tmp/'
    const repositoryUrl = 'https://github.com/git/git'

    const expectedReturn = '/tmp/git/git'

    expect(getPathToRepository(repositoriesPath, repositoryUrl))
      .toEqual(expectedReturn)
  })
})
