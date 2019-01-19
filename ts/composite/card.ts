import { ICardComponent } from './icard-component'

export class Card implements ICardComponent {
  add(component: ICardComponent): void {
    throw new Error('Operation not suported')
  }
  remove(component: ICardComponent): void {
    throw new Error('Operation not suported')
  }
  get(index: number): ICardComponent | void {
    throw new Error('Operation not suported')
  }
  display(): string {
    return `${this.name} ${this.attack} / ${this.defense}`
  }
  constructor(
    public name: string,
    public attack: number,
    public defense: number
  ) {}
}
