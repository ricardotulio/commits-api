import axios from 'axios'
import github from '../../../../config/github'

const listBranches = (repository) => {
  const url = `${github.api.url}/repos/${repository}/branches`

  return axios.get(url)
    .then(response => response.data)
}

export default listBranches
