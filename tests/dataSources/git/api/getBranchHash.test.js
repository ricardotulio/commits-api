import getBranchHash from '../../../../src/dataSources/git/api/getBranchHash'

const hash = 'b5730eef41999d0d1a87d220d28263f891bc5665'

const branchMock = {
  commit: {
    sha: hash,
  }
}

describe('get branch hash from branch objet', () => {
  test('must get hash from branch', () => {
    expect(getBranchHash(branchMock)).toEqual(hash)
  })
})
