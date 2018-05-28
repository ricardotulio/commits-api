import buildGitLogPaginationOptions from '../../../../src/dataSources/git/cli/buildGitLogPaginationOptions'

describe('build git log pagionation options', () => {
  test('must build an array with options to paginate result', () =>{
    const limit = '10'
    const page = '2'

    const pagination = {
      limit,
      page,
    }

    const expectedResult = [
      '--max-count=10',
      '--skip=10',
    ]

    expect(buildGitLogPaginationOptions(pagination)).toEqual(expectedResult)
  })
})
