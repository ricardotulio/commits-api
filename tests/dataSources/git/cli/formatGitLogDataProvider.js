const gitLogOutput = {
  all: [
    {
      hash: '12b394aaa9deb45518e99c1f30c75441b3aac138',
      date: '2018-02-28 15:42:02 +0000',
      message: 'setup: configure webpack to bundle js files',
      author_name: 'Ricardo Tulio',
      author_email: 'ledo.tulio@gmail.com',
    },
    {
      hash: '61f0db42414988e56df0803c37fb7a0bfa3336c8',
      date: '2018-02-28 15:19:35 +0000',
      message: 'readme: adjust logo width',
      author_name: 'Ricardo Tulio',
      author_email: 'ledo.tulio@gmail.com',
    },
    {
      hash: 'a52eccba25fbc5dbe31c7d2a65ddb2368fe040aa',
      date: '2018-02-28 15:12:14 +0000',
      message: 'readme: explain how to install, test and build',
      author_name: 'Ricardo Tulio',
      author_email: 'ledo.tulio@gmail.com',
    },
    {
      hash: 'e248c1c8fa52695c99174f53950e4fa9a79ec3e6',
      date: '2018-02-28 14:52:50 +0000',
      message: 'initial commit: describe project by package.json',
      author_name: 'Ricardo Tulio',
      author_email: 'ledo.tulio@gmail.com',
    },
  ],
  latest: {
    hash: 'd1b5dd106ab66ec8f19cc5a277607f22bed4befa',
    date: '2018-03-26 20:52:12 +0100',
    message: 'Merge pull request #13 from ricardotulio/feature/nodemon (HEAD, origin/master, master)',
    author_name: 'Ricardo Ledo de Tulio',
    author_email: 'ledo.tulio@gmail.com',
  },
  total: 40,
}

const expectAfterFormat = [
  {
    hash: '12b394aaa9deb45518e99c1f30c75441b3aac138',
    date: '2018-02-28 15:42:02 +0000',
    message: 'setup: configure webpack to bundle js files',
    author: {
      name: 'Ricardo Tulio',
      email: 'ledo.tulio@gmail.com',
    }
  },
  {
    hash: '61f0db42414988e56df0803c37fb7a0bfa3336c8',
    date: '2018-02-28 15:19:35 +0000',
    message: 'readme: adjust logo width',
    author: {
      name: 'Ricardo Tulio',
      email: 'ledo.tulio@gmail.com',
    }
  },
  {
    hash: 'a52eccba25fbc5dbe31c7d2a65ddb2368fe040aa',
    date: '2018-02-28 15:12:14 +0000',
    message: 'readme: explain how to install, test and build',
    author: {
      name: 'Ricardo Tulio',
      email: 'ledo.tulio@gmail.com',
    }
  },
  {
    hash: 'e248c1c8fa52695c99174f53950e4fa9a79ec3e6',
    date: '2018-02-28 14:52:50 +0000',
    message: 'initial commit: describe project by package.json',
    author: {
      name: 'Ricardo Tulio',
      email: 'ledo.tulio@gmail.com',
    }
  },
]

export {
  gitLogOutput,
  expectAfterFormat,
}
