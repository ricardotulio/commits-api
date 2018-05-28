import { concat } from 'ramda'
import { listCommits } from '../../../dataSources/git'

const get = (req, res) => {
  const { repository, branch } = req.params

  const { page } = req.query
  const pagination = {
    page,
  }

  listCommits({ repository, branch, pagination })
    .then(result => res.send(result))
}

export default {
  get,
}
