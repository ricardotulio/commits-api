import Promise from 'bluebird'
import initRepository from '../../../../src/dataSources/git/cli/initRepository'

const buildGitRepositoryMock = () => {
  const initMock = jest.fn()
  initMock.mockReturnValue(Promise.resolve())

  const addRemoteMock = jest.fn()
  addRemoteMock.mockReturnValue(Promise.resolve())

  const gitRepositoryMock = {
    init: initMock,
    addRemote: addRemoteMock,
  }

  return gitRepositoryMock
}

describe('initialize repository', () => {
  test('must initialize repository', () => {
    expect.assertions(5)

    const gitRepo = buildGitRepositoryMock()

    const repositoryUrl = 'https://github.com/ricardotulio/skynet'

    return initRepository(repositoryUrl, gitRepo)
      .then((result) => {
        expect(result).toBe(gitRepo)
        expect(gitRepo.init.mock.calls.length).toBe(1)
        expect(gitRepo.addRemote.mock.calls.length).toBe(1)
        expect(gitRepo.addRemote.mock.calls[0][0]).toBe('origin')
        expect(gitRepo.addRemote.mock.calls[0][1]).toBe(repositoryUrl)
      })
  })
})
