import axios from 'axios'
import { curry } from 'ramda'

const listCommitsByBranchHash = curry((repository, hash) => {
  const url = `https://api.github.com/repos/${repository}/commits?sha=${hash}`

  return axios.get(url)
    .then(response => response.data)
})

export default listCommitsByBranchHash
