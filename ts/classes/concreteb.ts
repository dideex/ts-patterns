import { IDepB } from '../common'
import { injectable } from 'inversify'

@injectable()
export class ConcreteB implements IDepB {
  doB(): void {
    console.log('Doing B')
  }
}
