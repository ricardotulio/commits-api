import Promise from 'bluebird'
import initializeRepositoryIfNotInitialized from '../../../../src/dataSources/git/cli/initializeRepositoryIfNotInitialized'

describe('initialize repository if necessary', () => {
  test('must initialize repository if necessary', () => {
    expect.assertions(3)

    const initializeRepository = jest.fn()
    
    const checkIsRepo = jest.fn()
    checkIsRepo.mockReturnValue(Promise.resolve(false))

    const git = {
      checkIsRepo,
    }

    const repositoryUrl = 'https://github.com/git/git'

    return initializeRepositoryIfNotInitialized(initializeRepository, repositoryUrl, git)
      .then((result) => {
        expect(initializeRepository.mock.calls.length).toBe(1)
        expect(initializeRepository.mock.calls[0][0]).toBe(repositoryUrl)
        expect(initializeRepository.mock.calls[0][1]).toBe(git)
      })
  })
})
