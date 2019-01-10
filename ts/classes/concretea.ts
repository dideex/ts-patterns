import { IDepA } from '../common'
import { injectable } from 'inversify';

@injectable()
export class ConcreteA implements IDepA {
  doA(): void {
    console.log('Doing a')
  }
}
