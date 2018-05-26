import { prop } from 'ramda'

const buildTranslation = translation =>
  new Error(prop('translation', translation))

export default buildTranslation
