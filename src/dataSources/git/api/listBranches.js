import axios from 'axios'

const listBranches = (repository) => {
  const url = `https://api.github.com/repos/${repository}/branches`

  return axios.get(url)
    .then(response => response.data)
}

export default listBranches
