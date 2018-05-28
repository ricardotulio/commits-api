import { curry } from 'ramda'
import buildGitLogPaginationOptions from './buildGitLogPaginationOptions'

const getPaginatedLog = curry((pagination, git) => {
  return git.log(buildGitLogPaginationOptions(pagination))
})

export default getPaginatedLog
