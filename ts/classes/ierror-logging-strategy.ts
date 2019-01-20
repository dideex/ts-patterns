export interface IErrorLogginStartegy {
  log(err: Error): Promise<any>
}
