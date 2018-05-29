import formatCommitList from '../../../../src/dataSources/github/cli/formatCommitList'
import {
  gitLogOutput,
  expectAfterFormat,
} from './formatCommitListDataProvider'

describe('format git log output', () => {
  test('must format git log', () => {
    expect(formatCommitList(gitLogOutput)).toEqual(expectAfterFormat)
  })
})
