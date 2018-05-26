import {
  call,
  compose,
  curry,
  filter,
  head as first,
  ifElse,
  isNil,
  prop,
  propEq,
  __,
} from 'ramda'
import Promise from 'bluebird'

const byMessage = propEq('message')

const message = prop('message')

const throwError = () => {
  throw new Error('Error when try to translate error')
}

const findTranslation = curry((translations, error) => {
  const errorMessage = () => message(error)

  const filterTranslations = filter(__, translations)

  const translation = compose(
    first,
    filterTranslations,
    byMessage,
    errorMessage,
  )

  return new Promise(resolve => ifElse(
    isNil,
    throwError,
    resolve,
  )(translation()))
})

export default findTranslation
