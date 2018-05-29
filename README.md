# Codacy Test
Implementation of codacy test.

## Description
This project is an API that retrieve list of commits from repositories. It API have two data sources: repositories cloned by command line and GitHub API.

# Documentation
- [Getting started](#getting-started)
  - [Dependencies](#dependencies)
  - [Installation](#installataion)
  - [Running](#Running)
  - [Test](#test)
  - [ESLint](#eslint)
- [Resources](#resources)
  - [Commits](#commits)

## Getting started

### Dependencies
- Node.js v10.1.0
- Yarn 1.6.0

*Also you can run this project with `docker` and `docker-compose`.*

### Installation
Install all dependencies and build project:
```
$ yarn install
$ yarn build
```

### Configure
The configurations files are in `config`. In this repository, you can see three files:
- app
- http
- paths

#### config/app.js
Here you can set application debug mode.

#### config/http
Here you can set default timeout to http request.

#### config/http
Here you can set path where GitHub repositories will be cloned.

*ATTENTION: This path must be set and have permission to read an write.*

### Running
Run project:
```
$ node build/main.js
```

Also you can use `$ yarn start` to start. This command starts project using `nodeamon` passing `babel-node` as param.

### Test
Run tests:
```
$ yarn test
```

### ESlint
Run eslint:
```
$ yarn linter
```

## Resources

| Resource      | Description                    | Methods  |
| ------------- |--------------------------------| ---------|
| Commits       | Commits of GitHub repositories | GET      |

### Commits
#### Listing commits
URL: `/v1/github/:user/:repository/branch/:branch/commit?page=:page`

| Parameter      | Description                           | Examples  | Default |
| -------------- |---------------------------------------| ----------|---------|
| :user          | User of GitHub                        | torvalds  |         |
| :repository    | GitHub repository of user :user       | linux     |         |
| :branch        | Any branch of repository :repository  | master    | master  |    
| :page          | Any branch of repository :repository  | master    | 1       |

Example:

```js
GET /v1/github/ricardotulio/skynet/branch/feature/docker-compose/commit

HTTP/1.1 200 OK
[
  {
    "hash": "7bb03012fa884ee5304bbaade91e4ff9cd67d90e",
    "date": "2018-03-21T23:11:50Z",
    "message": "infra: describe development infra using docker-compose\n\nDescribe a development infraestructure using docker-compose file. In\nthis docker-compose.yml file have services:\n\n- Node 8.9\n- Nginx\n\nAlso create a command to watch modifications on directory that contain\nsource files using nodemon, that is, every change will be updated, so\nits not necessary to restart container.\n\nIt was necessary to create nginx configuration file, so this commit also\nadd a configuration file to nginx. This file just redirect http requests\nto node container on port 3000.",
    "author": {
      "name": "Ricardo Ledo",
      "email": "ledo.tulio@gmail.com"
    }
  },
  {
    "hash": "b20ebb81d072798527e150728cbdd7607a1c581e",
    "date": "2018-03-06T23:57:08Z",
    "message": "chore: refact bot structure\n\nCreate tests to bot functions and rename its. Also create a directory\nnamed `botBuild` to contains associated with bot construction.",
    "author": {
      "name": "Ricardo Ledo",
      "email": "ledo.tulio@gmail.com"
    }
  }
]
```

# License
MIT - Copyright (c) 2018, Ricardo Ledo de Tulio.
