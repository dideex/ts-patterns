import { set, assocPath, lens } from 'ramda'

const person = {
  name: 'DiDex',
  socialMedia: {
    github: 'DiDex'
  }
}

const githubLens = lens(
  path(['socialMedia', 'github']),
  assocPath(['socialMedia', 'github'])
)

console.log(set(githubLens, 'dideex', person))
