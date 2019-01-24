import readline from 'readline'

export class ProfileConfiguration {
  protected _rl: readline.ReadLine

  constructor() {
    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
  }

  async start(): Promise<any> {
    await this.configureAccountSecurity()
    await this.configureEmailIntegration()
    await this.configurePaymentsMethod()
    await this.configureSupportMethod()
    this._rl.close()
  }

  async configureAccountSecurity(): Promise<any> {
    throw new Error('Not implemented')
  }

  async configureEmailIntegration(): Promise<any> {
    throw new Error('Not implemented')
  }

  async configureSupportMethod(): Promise<any> {
    throw new Error('Not implemented')
  }

  async configurePaymentsMethod(): Promise<any> {
    throw new Error('Not implemented')
  }
}

export class BasicPlanProfiledConfiguration extends ProfileConfiguration {
  async configureAccountSecurity(): Promise<any> {
    console.log('Click here to enter a seucrity quiestion')
  }

  async configureEmailIntegration(): Promise<any> {
    console.log('Click here to enter a email')
  }

  async configureSupportMethod(): Promise<any> {
    console.log('Click here to enter support method')
  }

  async configurePaymentsMethod(): Promise<any> {
    console.log('Click here to enter payments method')
  }
}

export class PremiumPlanProfileConfgiuration extends ProfileConfiguration {
  async configureAccountSecurity(): Promise<any> {
    return new Promise(resolve => {
      this._rl.question(
        'What security method would you like ot use?',
        answer => {
          if (parseInt(answer) === 1) {
            console.log('Click here to enter a security quiestion')
          } else if (parseInt(answer) === 2) {
            console.log('CLick here to enter a two factor auth')
          }
          resolve()
        }
      )
    })
  }

  async configureEmailIntegration(): Promise<any> {
    console.log('Click here to setup mailChip')
    return Promise.resolve()
  }

  async configureSupportMethod(): Promise<any> {
    console.log('Click here to setup Intercom')
    return Promise.resolve()
  }

  async configurePaymentsMethod(): Promise<any> {
    return new Promise(resolve => {
      this._rl.question(
        'Would you like to use\n Paypal\nor\nStripe\n as your payment method',
        answer => {
          if (parseInt(answer) === 1) {
            console.log('Click here to configure PayPal')
          } else if (parseInt(answer)) {
            console.log('Click here to configure Stripe')
          }
          resolve()
        }
      )
    })
  }
}

const basicPlanConfig = new BasicPlanProfiledConfiguration()
const premiumPlan = new PremiumPlanProfileConfgiuration()

// basicPlanConfig.start()
premiumPlan.start()