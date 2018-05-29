import getPaginatedLog from '../../../../src/dataSources/github/cli/getPaginatedLog'

const buildGitRepositoryMock = () => {
  const log = jest.fn()
  log.mockReturnValue(Promise.resolve())

  return {
    log,
  }
}

describe('retrieve a paginated log form cli', () => {
  test('must invoke log function with correctly params', () => {
    expect.assertions(2)

    const gitRepositoryMock = buildGitRepositoryMock()

    const pagination = {
      page: '10',
      limit: '15',
    }

    const expectedParams = [
      '--max-count=15',
      '--skip=135',
    ]

    return getPaginatedLog(pagination, gitRepositoryMock).then(() => {
      expect(gitRepositoryMock.log.mock.calls.length).toBe(1)
      expect(gitRepositoryMock.log.mock.calls[0][0]).toEqual(expectedParams)
    })
  })
})
