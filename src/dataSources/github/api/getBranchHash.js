import {
  path,
} from 'ramda'

const getBranchHash = path(['commit', 'sha'])

export default getBranchHash
