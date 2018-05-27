import formatGitLog from '../../../../src/dataSources/git/cli/formatGitLog'
import {
  gitLogOutput,
  expectAfterFormat,
} from './formatGitLogDataProvider'

describe('format git log output', () => {
  test('must format git log', () => {
    expect(formatGitLog(gitLogOutput)).toEqual(expectAfterFormat)
  })
})
