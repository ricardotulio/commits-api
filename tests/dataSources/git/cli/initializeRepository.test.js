import Promise from 'bluebird'
import initializeRepository from '../../../../src/dataSources/git/cli/initializeRepository'

const createGitMock = () => {
  const init = jest.fn()
  init.mockReturnValue(Promise.resolve())

  const addRemote = jest.fn()
  addRemote.mockReturnValue(Promise.resolve())

  const git = {
    init,
    addRemote,
  }

  return git
}

describe('initialize repository', () => {
  test('must initialize repository', () => {
    expect.assertions(5)

    const git = createGitMock()

    const repositoryUrl = 'https://github.com/ricardotulio/skynet'

    return initializeRepository(repositoryUrl, git)
      .then((result) => {
        expect(result).toBe(git)
        expect(git.init.mock.calls.length).toBe(1)
        expect(git.addRemote.mock.calls.length).toBe(1)
        expect(git.addRemote.mock.calls[0][0]).toBe('origin')
        expect(git.addRemote.mock.calls[0][1]).toBe(repositoryUrl)
      })
  })
})
