import {
  always,
  curry,
} from 'ramda'

const checkoutTo = curry((branch, gitRepository) => gitRepository.checkout(branch)
  .then(always(gitRepository)))

export default checkoutTo
