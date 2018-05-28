import Promise from 'bluebird'
import maybeInitRepository from '../../../../src/dataSources/github/cli/maybeInitRepository'

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

    const initRepository = jest.fn()

    const gitRepositoryMock = buildGitRepositoryMock()

    const repositoryUrl = 'https://github.com/git/git'

    return maybeInitRepository(initRepository, repositoryUrl, gitRepositoryMock)
      .then(() => {
        expect(initRepository.mock.calls.length).toBe(1)
        expect(initRepository.mock.calls[0][0]).toBe(repositoryUrl)
        expect(initRepository.mock.calls[0][1]).toBe(gitRepositoryMock)
      })
  })
})
