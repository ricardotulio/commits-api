import { prop } from 'ramda'
import buildTranslation from '../../src/errors/buildTranslation'

describe('build translation error', () => {
  test('must create error instance from translation', () => {
    expect.assertions(1)

    const translation = {
      message: 'error 42',
      translation: 'The life, the universe and everything'
    }

    const expectedTranslatedError = new Error(prop('translation', translation))

    expect(buildTranslation(translation)).toEqual(expectedTranslatedError)
  })
})
