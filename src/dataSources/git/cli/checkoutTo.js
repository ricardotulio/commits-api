import {
  always,
  curry,
} from 'ramda'

const checkoutTo = curry((branch, git) => {
  return git.checkout(branch)
    .then(always(git))
})

export default checkoutTo
