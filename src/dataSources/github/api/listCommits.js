import listBranches from './listBranches'
import findBranchByName from './findBranchByName'
import getBranchHash from './getBranchHash'
import listCommitsByBranchHash from './listCommitsByBranchHash'
import formatCommitList from './formatCommitList'

const listCommits = (params) => {
  const { repository, branch, pagination } = params

  return Promise.resolve(repository)
    .then(listBranches)
    .then(findBranchByName(branch))
    .then(getBranchHash)
    .then(listCommitsByBranchHash(repository, pagination))
    .then(formatCommitList)
}

export default listCommits
