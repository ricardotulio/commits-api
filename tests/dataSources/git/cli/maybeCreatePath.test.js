import maybeCreatePath from '../../../../src/dataSources/git/cli/maybeCreatePath'

describe('create directory if it not exists', () => {
  test('must create directory if not exists', () => {
    expect.assertions(3)

    const path = '/some/path/'

    const directoryExists = () => false
    const createDirectory = jest.fn()
    createDirectory.mockReturnValue(Promise.resolve(path))

    return maybeCreatePath(directoryExists, createDirectory, path)
      .then((result) => {
        expect(result).toBe(path)
        expect(createDirectory.mock.calls.length).toBe(1)
        expect(createDirectory.mock.calls[0][0]).toBe(path)
      })
  })

  test('must not create directory if exists', () => {
    expect.assertions(2)

    const path = '/some/path/'
    const directoryExists = () => true
    const createDirectory = jest.fn()

    return maybeCreatePath(directoryExists, createDirectory, path)
      .then((result) => {
        expect(result).toBe(path)
        expect(createDirectory.mock.calls.length).toBe(0)
      })
  })
})
