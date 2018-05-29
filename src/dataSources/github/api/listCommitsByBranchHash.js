import axios from 'axios'
import {
  curry,
  propOr,
} from 'ramda'
import github from '../../../../config/github'

const listCommitsByBranchHash = curry((repository, pagination, hash) => {
  const page = propOr('1', 'page', pagination)
  const limit = propOr('100', 'limit', pagination)

  const url = `${github.api.url}/repos/${repository}/commits?sha=${hash}&page=${page}&per_page=${limit}`

  return axios.get(url)
    .then(response => response.data)
})

export default listCommitsByBranchHash
