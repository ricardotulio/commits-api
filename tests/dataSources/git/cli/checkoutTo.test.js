import checkoutTo from '../../../../src/dataSources/git/cli/checkoutTo'

describe('checkout to branch', () => {
  test('must checkout to branch', () => {
    expect.assertions(2)

    const checkout = jest.fn()
    checkout.mockReturnValue(Promise.resolve())

    const git = {
      checkout,
    }

    const branch = 'feature/docker'

    return checkoutTo(branch, git)
      .then(() => {
        expect(checkout.mock.calls.length).toBe(1)
        expect(checkout.mock.calls[0][0]).toBe(branch)
      })
  })
})
