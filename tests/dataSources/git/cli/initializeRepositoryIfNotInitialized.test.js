import Promise from 'bluebird'
import initializeRepositoryIfNotInitialized from '../../../../src/dataSources/git/cli/initializeRepositoryIfNotInitialized'

const buildGitRepositoryMock = () => {
  const checkIsRepoMock = jest.fn()
  checkIsRepoMock.mockReturnValue(Promise.resolve(false))

  const gitRepositoryMock = {
    checkIsRepo: checkIsRepoMock,
  }

  return gitRepositoryMock
}

describe('initialize repository if necessary', () => {
  test('must initialize repository if necessary', () => {
    expect.assertions(3)

    const initializeRepository = jest.fn()

    const gitRepositoryMock = buildGitRepositoryMock()

    const repositoryUrl = 'https://github.com/git/git'

    return initializeRepositoryIfNotInitialized(initializeRepository, repositoryUrl, gitRepositoryMock)
      .then(() => {
        expect(initializeRepository.mock.calls.length).toBe(1)
        expect(initializeRepository.mock.calls[0][0]).toBe(repositoryUrl)
        expect(initializeRepository.mock.calls[0][1]).toBe(gitRepositoryMock)
      })
  })
})
