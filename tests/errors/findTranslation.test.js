import Promise from 'bluebird'
import findTranslation from '../../src/errors/findTranslation'

const error = new Error('any')

const translations = [
  {
    message: 'any',
    translation: 'other',
  }
]

describe('find error translation', () => {
  test('must return a promise', () => {
    expect(findTranslation(translations, error)).toBeInstanceOf(Promise)
  })

  test('must throw error if translation not found', () => {
    expect.assertions(1)

    const error = new Error('other')

    return findTranslation(translations, error)
      .catch(error => {
        expect(error.message).toEqual('Error when try to translate error')
      })
  })

  test('must return error translation', () => {
    expect.assertions(1)

    return findTranslation(translations, error)
      .then(translation => {
        expect(translation).toEqual(translations[0])
      })
  })
})
