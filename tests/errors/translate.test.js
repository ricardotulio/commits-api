import Promise from 'bluebird'
import translate from '../../src/errors/translate'

describe('translate error messages', () => {
  test('just throw same error if has no correspondent translation', () => {
    expect.assertions(1)

    const findTranslation = () => Promise.reject(new Error())
    const buildTranslation = () => {}
    const errorToTranslate = new Error('any')

    return translate(findTranslation, buildTranslation, errorToTranslate)
      .then((error) => {
        expect(error.message).toEqual(errorToTranslate.message)
      })
  })

  test('translate error message if exists a correspondent translation', () => {
    expect.assertions(1)

    const translation = {
      message: 'any',
      translation: 'other',
    }

    const findTranslation = () => Promise.resolve()
    const buildTranslation = () => new Error(translation.translation)
    const errorToTranslate = new Error('any')

    return translate(findTranslation, buildTranslation, errorToTranslate)
      .then((error) => {
        expect(error.message).toEqual(translation.translation)
      })
  })
})
