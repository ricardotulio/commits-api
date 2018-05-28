import fetchAndPull from '../../../../src/dataSources/git/cli/fetchAndPull'

const buildGitRepositoryMock = () => {
  const fetchMock = jest.fn()
  fetchMock.mockReturnValue(Promise.resolve())

  const pullMock = jest.fn()
  pullMock.mockReturnValue(Promise.resolve())

  const gitRepositoryMock = {
    fetch: fetchMock,
    pull: pullMock,
  }

  return gitRepositoryMock
}

describe('execute git fetch and pull', () => {
  test('must execute fetch and pull', () => {
    expect.assertions(4)

    const branch = 'master'

    const gitRepositoryMock = buildGitRepositoryMock()

    return fetchAndPull(branch, gitRepositoryMock).then(() => {
      expect(gitRepositoryMock.fetch.mock.calls.length).toBe(1)
      expect(gitRepositoryMock.pull.mock.calls.length).toBe(1)
      expect(gitRepositoryMock.pull.mock.calls[0][0]).toBe('origin')
      expect(gitRepositoryMock.pull.mock.calls[0][1]).toBe(branch)
    })
  })
})
