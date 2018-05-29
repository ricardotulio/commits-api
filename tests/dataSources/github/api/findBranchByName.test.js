import findBranchByName from '../../../../src/dataSources/github/api/findBranchByName'

describe('find a branch by name in branch list', () => {
  test('must find a branch in branch list', () => {
    const branchList = [
      {
        hash: '1234',
        name: 'master',
      },
      {
        hash: '4321',
        name: 'development',
      },
      {
        hash: '345',
        name: 'another',
      },
    ]

    expect(findBranchByName('development')(branchList)).toEqual(expect.objectContaining({
      hash: '4321',
      name: 'development',
    }))
  })
})
