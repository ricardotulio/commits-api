import formatCommitList from '../../../../src/dataSources/github/api/formatCommitList'
import {
  githubApiOutput,
  expectAfterFormat,
} from './formatCommitListDataProvider'

describe('format commit list retrieved from github api', () => {
  test('must format commit list', () => {
    expect(formatCommitList(githubApiOutput)).toEqual(expectAfterFormat)
  })
})
