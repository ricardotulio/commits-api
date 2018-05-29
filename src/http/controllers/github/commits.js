import { concat } from 'ramda'
import { listCommits } from '../../../dataSources/github'
import http from '../../../../config/http'
import handleError from '../../../errors/handle'

const get = (req, res) => {
  const { repository, branch } = req.params

  const { page } = req.query
  const pagination = {
    page,
  }

  listCommits({ repository, branch, pagination })
    .timeout(http.timeout)
    .then((result) => res.send(result))
    .catch(handleError(res))
}

export default {
  get,
}
