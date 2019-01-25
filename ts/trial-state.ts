import { ISubscriptionState } from './classes'

export class Subscription {
  state: ISubscriptionState = new TrialState(this)

  pay(amount: number) {
    this.state.pay(amount)
  }

  dayPassed() {
    this.state.checkExpiration()
  }

  checkSubscriptionStatus() {
    console.log(this.state.report())
  }
}

export class TrialState implements ISubscriptionState {
  daysRemaining: number = 14

  constructor(private _subscription: Subscription) {}

  pay(amount: number): void {
    this._subscription.state = new PaidState(this._subscription, amount)
  }

  checkExpiration(): void {
    this.daysRemaining--
    if (this.daysRemaining <= 0) {
      this._subscription.state = new TrialExpiredState(this._subscription)
    }
  }

  report(): string {
    return `${this.daysRemaining} left on trial`
  }
}

export class TrialExpiredState implements ISubscriptionState {
  constructor(private _subscription: Subscription) {}

  pay(amount: number): void {
    this._subscription.state = new PaidState(this._subscription, amount)
  }
  checkExpiration(): void {
    console.log('Trial already expired')
  }
  report(): string {
    return `Trial expired`
  }
}

export class PaidState implements ISubscriptionState {
  amountPaid: number = 0

  constructor(private _subscription: Subscription, amount: number) {
    this.amountPaid = amount
  }

  pay(amount: number): void {
    throw new Error('Already paid')
  }
  checkExpiration(): void {
    this._subscription.state = new TrialExpiredState(this._subscription)
  }
  report(): string {
    return `On paid plan with ${this.amountPaid} subscription`
  }
}

let subscription: Subscription = new Subscription()
for (let i = 0; i <= 14; i++) {
  subscription.checkSubscriptionStatus()
  subscription.dayPassed()
}
subscription.pay(200)
subscription.checkSubscriptionStatus()