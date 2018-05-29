import {
  curry,
  ifElse,
} from 'ramda'

const handle = curry((isDebug, res, error) => {
  res.statusCode = 501

  const showError = error => res.send({
    error: error.message,
    description: error.description,
  })

  const showGenericMessage = () => res.send({ error: 'Ops! an error ocurred' })

  const handle = ifElse(
    isDebug,
    showError,
    showGenericMessage,
  )

  return handle(error)
})

export default handle
