import {
  always,
  curry,
} from 'ramda'

const translate = curry((findTranslation, buildTranslation, error) =>
  findTranslation(error)
    .then(buildTranslation)
    .catch(always(error)))

export default translate
