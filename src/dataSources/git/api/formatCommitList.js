import {
  applySpec,
  prop,
  path,
  pick,
  pipe,
  map,
} from 'ramda'

const formatCommitListItem = applySpec({
  hash: prop('sha'),
  date: path(['commit', 'author', 'date']),
  message: path(['commit', 'message']),
  author: pipe(
    path(['commit', 'author']),
    pick(['name', 'email']),
  )
})

const formatCommitList = (commitList) =>
  map(formatCommitListItem, commitList)

export default formatCommitList
