import app from '../../config/app'
import handle from './handle'

const isDebug = () => app.debug

const buildHandle = () => handle(isDebug)

export default buildHandle
