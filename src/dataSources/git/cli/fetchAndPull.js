import { curry } from 'ramda'

const fetchAndPull = curry((branch, git) => git.fetch()
  .then(() => git.pull('origin', branch))
  .then(() => git))

export default fetchAndPull
