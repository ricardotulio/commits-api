import {
  curry,
  ifElse,
} from 'ramda'
import app from '../../config/app'

const handle = curry((res, error) => {
  res.statusCode = 501

  const showError = (error) => res.send({
    error: error.message,
    description: error.description,
  })

  const showGenericMessage = () => res.send({ error: 'Ops! an error ocurred'})
  const isDebug = () => app.debug

  const handle = ifElse(
    isDebug,
    showError,
    showGenericMessage,
  )

  handle(error)
})

export default handle
