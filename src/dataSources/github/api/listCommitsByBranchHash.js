import axios from 'axios'
import {
  curry,
  propOr,
} from 'ramda'

const listCommitsByBranchHash = curry((repository, pagination, hash) => {
  const page = propOr('1', 'page', pagination)
  const limit = propOr('100', 'limit', pagination)

  const url = `https://api.github.com/repos/${repository}/commits?sha=${hash}&page=${page}&per_page=${limit}`

  return axios.get(url)
    .then(response => response.data)
})

export default listCommitsByBranchHash
