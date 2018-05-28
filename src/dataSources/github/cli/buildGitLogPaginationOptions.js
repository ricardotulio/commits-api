import {
  concat,
  dec,
  multiply,
  pipe,
  propOr,
  toString,
} from 'ramda'

const buildGitLogPaginationOptions = pagination => {
  const limit = propOr('100', 'limit')

  const offset = pipe(
    propOr(1, 'page'),
    dec,
    multiply(limit(pagination)),
    toString,
  )

  return [
    concat('--max-count=', limit(pagination)),
    concat('--skip=', offset(pagination)),
  ]
}

export default buildGitLogPaginationOptions
