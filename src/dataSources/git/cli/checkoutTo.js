import {
  always,
  curry,
} from 'ramda'

const checkoutTo = curry((branch, gitRepository) => {
  return gitRepository.checkout(branch)
    .then(always(gitRepository))
})

export default checkoutTo
