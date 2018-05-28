import {
  map,
  prop,
} from 'ramda'

const formatGitLogItem = (gitLogItem) => {
  const formatedGitLogItem = {
    hash: prop('hash', gitLogItem),
    date: prop('date', gitLogItem),
    message: prop('message', gitLogItem),
    author: {
      name: prop('author_name', gitLogItem),
      email: prop('author_email', gitLogItem),
    },
  }

  return formatedGitLogItem
}

const formatGitLog = (gitLog) => {
  const gitLogItems = prop('all', gitLog)

  return map(formatGitLogItem, gitLogItems)
}

export default formatGitLog
