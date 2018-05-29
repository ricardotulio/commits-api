import {
  curry,
  ifElse,
} from 'ramda'

const showError = curry((res, error) => res.send({
  error: error.message,
  description: error.description,
}))

const showGenericMessage = res => () =>
  res.send({ error: 'Ops! an error ocurred' })

const handle = curry((isDebug, res, error) => {
  res.statusCode = 501

  const maybeHandle = ifElse(
    isDebug,
    showError(res),
    showGenericMessage(res),
  )

  return maybeHandle(error)
})

export default handle
