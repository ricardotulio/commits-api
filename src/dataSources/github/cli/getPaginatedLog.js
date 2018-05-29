import { curry } from 'ramda'
import buildGitLogPaginationOptions from './buildGitLogPaginationOptions'

const getPaginatedLog = curry((pagination, gitRepository) =>
  gitRepository.log(buildGitLogPaginationOptions(pagination)))

export default getPaginatedLog
