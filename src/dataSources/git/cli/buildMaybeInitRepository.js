import initRepository from './initRepository'
import maybeInitRepository from './maybeInitRepository'

const buildMaybeInitRepository = () =>
  maybeInitRepository(initRepository)

export default buildMaybeInitRepository
