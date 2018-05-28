import { concat } from 'ramda'
import { listCommits } from '../../../dataSources/git/cli'

const get = (req, res) => {
  const { repository, branch } = req.params
  const repositoryUrl = concat('https://github.com/', repository)

  const { page } = req.query
  const pagination = {
    page,
  }

  listCommits({ repositoryUrl, branch, pagination })
    .then(result => res.send(result))
}

export default {
  get,
}
