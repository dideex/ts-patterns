export interface ISubscriptionState {
  pay(amount: number): void
  checkExpiration(): void
  report(): string
}
