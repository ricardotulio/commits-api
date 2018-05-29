import express from 'express'
import Promise from 'bluebird'
import commits from './http/controllers/github/commits'

global.Promise = Promise

const app = express()

app.get('/v1/github/:repository(*)/branch/:branch(*)', commits.get)

app.listen(3000, () => console.log('Example app listening on port 3000!'))
