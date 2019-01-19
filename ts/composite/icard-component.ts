export interface ICardComponent {
  add(component: ICardComponent): void 
  remove(component: ICardComponent): void 
  get(index: number): ICardComponent | void
  display(): string 
}