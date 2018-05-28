import {
  find,
  propEq,
} from 'ramda'

const findBranchByName = branch => find(propEq('name', branch))

export default findBranchByName
