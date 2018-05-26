import Promise from 'bluebird'
import findTranslation from '../../src/errors/findTranslation'

const translations = [
  {
    message: 'any',
    translation: 'other',
  },
]

describe('find error translation', () => {
  test('must return a promise', () => {
    const error = new Error('any')

    expect(findTranslation(translations, error)).toBeInstanceOf(Promise)
  })

  test('must throw error if translation not found', () => {
    expect.assertions(1)

    const errorToTranslate = new Error('other')

    return findTranslation(translations, errorToTranslate)
      .catch((error) => {
        expect(error.message).toEqual('Error when try to translate error')
      })
  })

  test('must return error translation', () => {
    expect.assertions(1)

    const error = new Error('any')

    return findTranslation(translations, error)
      .then((translation) => {
        expect(translation).toEqual(translations[0])
      })
  })
})
