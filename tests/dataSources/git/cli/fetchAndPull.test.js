import fetchAndPull from '../../../../src/dataSources/git/cli/fetchAndPull'

describe('execute git fetch and pull', () => {
  test('must execute fetch and pull', () => {
    expect.assertions(4)

    const fetch = jest.fn()
    fetch.mockReturnValue(Promise.resolve())  
  
    const pull = jest.fn()
    fetch.mockReturnValue(Promise.resolve())  

    const git = {
      fetch,
      pull,
    }

    const branch = 'master'

    return fetchAndPull(branch, git).then((result) => {
      expect(fetch.mock.calls.length).toBe(1)
      expect(pull.mock.calls.length).toBe(1)
      expect(pull.mock.calls[0][0]).toBe('origin')
      expect(pull.mock.calls[0][1]).toBe(branch)
    })
  })
})
