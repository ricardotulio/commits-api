import express from 'express'
import commits from './http/controllers/github/commits'

const app = express()

app.get('/v1/github/:repository(*)/branch/:branch(*)', commits.get)

app.listen(3000, () => console.log('Example app listening on port 3000!'))
