import checkoutTo from '../../../../src/dataSources/git/cli/checkoutTo'

const buildGitRepositoryMock = () => {
  const checkoutMock = jest.fn()
  checkoutMock.mockReturnValue(Promise.resolve())

  const gitRepositoryMock = {
    checkout: checkoutMock,
  }

  return gitRepositoryMock
}

describe('checkout to branch', () => {
  test('must checkout to branch', () => {
    expect.assertions(2)

    const branch = 'feature/docker'

    const gitRepositoryMock = buildGitRepositoryMock()

    return checkoutTo(branch, gitRepositoryMock)
      .then(() => {
        expect(gitRepositoryMock.checkout.mock.calls.length).toBe(1)
        expect(gitRepositoryMock.checkout.mock.calls[0][0]).toBe(branch)
      })
  })
})
