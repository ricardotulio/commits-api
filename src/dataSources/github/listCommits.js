import { listCommits as listCommitsFromGitCli } from './cli'
import { listCommits as listCommitsFromGithubApi } from './api'

const listCommits = (params) => Promise.any([
  listCommitsFromGitCli(params),
  listCommitsFromGithubApi(params),
])

export default listCommits
