export class IoCContainer {
  private static _instance: IoCContainer = new IoCContainer()
  private _dependencies: { [key: string]: Object } = {}

  constructor() {
    if (IoCContainer._instance) {
      throw new Error('Singltone class. Cannot instantiate using new')
    }
    IoCContainer._instance = this
  }

  public static get instance(): IoCContainer {
    return IoCContainer._instance
  }

  register(name: string, dependencies: string[], implementation: any) {
    if (this._dependencies[name]) {
      throw new Error('Dependency already registered')
    }
    const dependenciesImplementations = this.getDependenciesImplementations(
      dependencies
    )
    this._dependencies[name] = new implementation(
      ...dependenciesImplementations
    )
  }

  resolver<T>(name: string): T {
    if (!this._dependencies[name]) {
      throw new Error(`Unresolved dependency ${name}`)
    }
    return this._dependencies[name] as T
  }

  private getDependenciesImplementations(names: string[]): Object[] {
    return names.map(name => this.resolver(name))
  }
}

export function Register(name: string, dependecies: string[]): Function {
  let container = IoCContainer.instance
  return function<T extends {new (...args: any[]): {}}>(constructor: T) {
    container.register(name, dependecies, constructor)
  }
}

interface IDepA {
  doA(): void
}
interface IDepB {
  doB(): void
}
interface IDepC {
  doC(): void
}
@Register("IDepA", [])
class concreteA implements IDepA {
  doA(): void {
    console.log('Doing A')
  }
}
@Register("IDepB", [])
class concreteB implements IDepB {
  doB(): void {
    console.log('Doing B')
  }
}
class concreteC implements IDepC {
  constructor(private _concreteA: IDepA, private _concreteB: IDepB) {}

  doC(): void {
    this._concreteA.doA()
    this._concreteB.doB()
    console.log('Doing C')
  }
}

const container = IoCContainer.instance
// container.register('IDepA', [], concreteA)
// container.register('IDepB', [], concreteB)
container.register('IDepC', ['IDepA', 'IDepB'], concreteC)

// const a = container.resolver<IDepA>("IDepA")
// a.doA()

// const b = container.resolver<IDepB>("IDepB")
// b.doB()

const c = container.resolver<IDepC>("IDepC")
c.doC()
