import {
  applySpec,
  map,
  prop,
} from 'ramda'

const formatCommit = applySpec({
  hash: prop('hash'),
  date: prop('date'),
  message: prop('message'),
  author: {
    name: prop('author_name'),
    email: prop('author_email'),
  },
})

const formatCommitList = (gitLogOutput) =>
  map(formatCommit, prop('all', gitLogOutput))

export default formatCommitList
