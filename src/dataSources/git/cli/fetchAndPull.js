import { curry } from 'ramda'

const fetchAndPull = curry((branch, gitRepository) => gitRepository.fetch()
  .then(() => gitRepository.pull('origin', branch))
  .then(() => gitRepository))

export default fetchAndPull
