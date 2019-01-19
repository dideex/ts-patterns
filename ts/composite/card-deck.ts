import { ICardComponent } from './icard-component'

const throwErr = () => {
  throw new Error('Component must be')
}

export class CardDeck implements ICardComponent {
  private _deck: ICardComponent[] = []

  add(component: ICardComponent): void {
    console.log('​CardDeck -> component', component)
    if (component) {
      this._deck.push(component)
    } else {
      throwErr()
    }
    console.log('this._deck ', this._deck)
  }
  remove(component: ICardComponent): void {
    if (component) {
      this._deck = this._deck.filter(comp => comp !== component)
    } else {
      throwErr()
    }
  }
  get(index: number): ICardComponent | void {
    if (index < 0 || index >= this._deck.length) {
      return this._deck[index]
    } else {
      throwErr()
    }
  }
  display(): string {
    return this._deck.map(component => component.display()).join('\n')
  }
}
