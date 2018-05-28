import {
  concat,
  head as first,
  prop,
  pick,
} from 'ramda'
import { listCommits as listCommitsFromCLI } from '../../../dataSources/git/cli'

const listCommits = (req, res) => {
  const repositoryUrl = concat('https://github.com/', req.params[0])
  const branch = req.params[1]

  const pagination = pick(['page', 'limit'], req.query)

  listCommitsFromCLI({ repositoryUrl, branch, pagination })
    .then(result => res.send(result))
}

export default listCommits
