import express from 'express'
import { listCommits } from './http/controllers/git'

const app = express()

app.get('/v1/github/*/branch/*', listCommits)

app.listen(3000, () => console.log('Example app listening on port 3000!'))
