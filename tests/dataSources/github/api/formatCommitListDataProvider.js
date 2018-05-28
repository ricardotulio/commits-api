const githubApiOutput = [
  {
    sha: '12b394aaa9deb45518e99c1f30c75441b3aac138',
    commit: {
      author: {
        name: 'Ricardo Tulio',
        email: 'ledo.tulio@gmail.com',
        date: '2018-02-28 15:42:02 +0000',
      },   
      message: 'setup: configure webpack to bundle js files',
    },
  },
  {
    sha: '61f0db42414988e56df0803c37fb7a0bfa3336c8',
    commit: {
      author: {
        name: 'Ricardo Tulio',
        email: 'ledo.tulio@gmail.com',
        date: '2018-02-28 15:19:35 +0000',
      },   
      message: 'readme: adjust logo width',
    },
  },
  {
    sha: 'a52eccba25fbc5dbe31c7d2a65ddb2368fe040aa',
    commit: {
      author: {
        name: 'Ricardo Tulio',
        email: 'ledo.tulio@gmail.com',
        date: '2018-02-28 15:12:14 +0000',
      },   
      message: 'readme: explain how to install, test and build',
    },
  },
  {
    sha: 'e248c1c8fa52695c99174f53950e4fa9a79ec3e6',
    commit: {
      author: {
        name: 'Ricardo Tulio',
        email: 'ledo.tulio@gmail.com',
        date: '2018-02-28 14:52:50 +0000',
      },   
      message: 'initial commit: describe project by package.json',
    },
  },
]

const expectAfterFormat = [
  {
    hash: '12b394aaa9deb45518e99c1f30c75441b3aac138',
    date: '2018-02-28 15:42:02 +0000',
    message: 'setup: configure webpack to bundle js files',
    author: {
      name: 'Ricardo Tulio',
      email: 'ledo.tulio@gmail.com',
    },
  },
  {
    hash: '61f0db42414988e56df0803c37fb7a0bfa3336c8',
    date: '2018-02-28 15:19:35 +0000',
    message: 'readme: adjust logo width',
    author: {
      name: 'Ricardo Tulio',
      email: 'ledo.tulio@gmail.com',
    },
  },
  {
    hash: 'a52eccba25fbc5dbe31c7d2a65ddb2368fe040aa',
    date: '2018-02-28 15:12:14 +0000',
    message: 'readme: explain how to install, test and build',
    author: {
      name: 'Ricardo Tulio',
      email: 'ledo.tulio@gmail.com',
    },
  },
  {
    hash: 'e248c1c8fa52695c99174f53950e4fa9a79ec3e6',
    date: '2018-02-28 14:52:50 +0000',
    message: 'initial commit: describe project by package.json',
    author: {
      name: 'Ricardo Tulio',
      email: 'ledo.tulio@gmail.com',
    },
  },
]

export {
  githubApiOutput,
  expectAfterFormat,
}
