import { IErrorDisplayStrategy, IErrorLogginStartegy } from './classes'
import chalk from 'chalk'
import { appendFile } from 'fs'

export class ErrorHandler {
  constructor(
    private _displayStrategy: IErrorDisplayStrategy,
    private _loggingStrategy: IErrorLogginStartegy
  ) {}

  handle(err: Error, title: string, body: string): Promise<any> {
    this._displayStrategy.display(title, body)
    return this._loggingStrategy.log(err)
  }
}

export class ConsoleErrorStartegy implements IErrorDisplayStrategy {
  display(title: string, body: string): void {
    console.log(`${chalk.red(title)}: ${chalk.blue(body)}`)
  }
}

export class FileErrorLogginStrategy implements IErrorLogginStartegy {
  log(err: Error): Promise<any> {
    return new Promise((res, rej) => {
      appendFile('ts/logs/error.log', `${err}\n`, 'utf8', error => {
        if (error) {
          console.log('Error logging failed')
          res(error)
        } else {
          res()
        }
      })
    })
  }
}

/**
 * Runtime
 */

const errorHandler = new ErrorHandler(
  new ConsoleErrorStartegy(),
  new FileErrorLogginStrategy()
)

try {
  const b: any = 2
  b()
} catch (error) {
  errorHandler.handle(error, 'Something went wront', 'Please try again later')
}
