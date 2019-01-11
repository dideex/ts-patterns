import 'reflect-metadata'
import { Container } from 'inversify'
import { IDepA, IDepB, IDepC } from './common'
import { TYPES } from './types'
import { ConcreteA, ConcreteB, ConcreteC } from './classes'

const container = new Container({
  defaultScope: 'Singleton'
})
// IDepA will be singleton
container
  .bind<IDepA>(TYPES.IDepA)
  .to(ConcreteA)
  .inSingletonScope()
// IDepB will be transient. We will get a new instance every time we request one
container
  .bind<IDepB>(TYPES.IDepB)
  .to(ConcreteB)
  .inTransientScope()
// IDepC will have request scope. It will return the same instance until we call conainer.unbind
container
  .bind<IDepC>(TYPES.IDepC)
  .to(ConcreteC)
  .inRequestScope()

export default container
