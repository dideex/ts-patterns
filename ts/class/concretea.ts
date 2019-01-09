import { IDepA } from '../common'

export class ConcreteA implements IDepA {
  doA(): void {
    console.log('Doing a')
  }
}
