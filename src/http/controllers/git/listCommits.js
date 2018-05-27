import {
  concat,
  head as first,
  prop,
} from 'ramda'
import { listCommits as listCommitsFromCLI } from '../../../dataSources/git/cli'

const listCommits = (req, res) => {
  const repository = concat('https://github.com/', req.params[0])
  const branch = req.params[1]

  listCommitsFromCLI(repository, branch)
    .then(result => res.send(result))
}

export default listCommits
