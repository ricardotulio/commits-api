import { curry } from 'ramda'

const fetchAndPull = curry((git, branch) => git.fetch()
  .then(() => git.pull('origin', branch))
  .then(() => git))

export default fetchAndPull
