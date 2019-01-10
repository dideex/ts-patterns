import 'reflect-metadata'
import { Container } from 'inversify'
import { IDepA, IDepB, IDepC } from './common'
import { TYPES } from './types'
import { ConcreteA, ConcreteB, ConcreteC } from './classes'

const container = new Container()
container.bind<IDepA>(TYPES.IDepA).to(ConcreteA)
container.bind<IDepB>(TYPES.IDepB).to(ConcreteB)
container.bind<IDepC>(TYPES.IDepC).to(ConcreteC)

export default container
