import handle from '../../src/errors/handle'

const buildResMock = () => {
  const sendMock = error => Promise.resolve(error)

  return {
    send: sendMock,
  }
}

describe('handle errors', () => {
  test('must handle generic error if is not a debug mode', () => {
    expect.assertions(1)

    const isDebug = () => false

    const resMock = buildResMock()

    const genericMessage = 'Ops! an error ocurred'
    const error = new Error('Dont Panic!')

    return handle(isDebug, resMock, error).then((error) => {
      expect(error.error).toBe(genericMessage)
    })
  })

  test('must handle error if is in debug mode', () => {
    expect.assertions(1)

    const isDebug = () => true

    const resMock = buildResMock()

    const errorMessage = 'Dont Panic!'
    const error = new Error(errorMessage)

    return handle(isDebug, resMock, error).then((error) => {
      expect(error.error).toBe(errorMessage)
    })
  })
})
