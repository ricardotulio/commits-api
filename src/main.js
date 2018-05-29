import express from 'express'
import Promise from 'bluebird'
import commits from './http/controllers/github/commits'

global.Promise = Promise

const app = express()

app.get('/v1/github/:repository(*)/branch/:branch(*)/commit', commits.get)

app.listen(3000, () => console.log('Codacy test listening on port 3000!'))
