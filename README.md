# JavaScript patters

## SOLID

1. Single Responsibility
2. Open/Close principle
3. Liskov Substitution
4. Interface Segregation
5. Dependency Inversion

---

## Single Responsibility

- A class or method should be responsible for a single part of the functionality

## Open/Close principle

- Open to extension
- Closed to modification

_You should not add stuff to completed classes_

_Add functinality by extending_

## Liskov Substitution

- A subclass should be used wherever its base class can be used

```TypeScript
export class ConcreteA {
  doA(): void {
    console.log('Doing A')
  }
  ...
}
// Wrong
export class ConcreteB extends ConcreteA {
  doA(): void {
    console.log('Doing B')
  }
  ...
}
```

## Interface Segregation(split)

- A class should not depend on methods that it does not need to implement
- Keep classes and interfaces compact

```TypeScript
// Right segregation
interface ISmartDevice {
  openApp(): void;
  connectToWiFi(): void;
}

interface IPhoneDevice {
  call(): void;
  sendSms():void;
}
// Wrong segregation
interface IDevice {
  openApp(): void;
  connectToWiFi(): void;
  call(): void;
  sendSms():void;
}
```

## Dependency Inversion

- Your classes and modules should depend on abstractions instead of concrete implementations
- Abstractions should not depend on details. Details should depend on abstractions.
- In TypeScript the abstractions are actually interfaces

---

# Design patterns

1. Singelton
2. Factory Pattern
3. Loose Coupling
4. Object pool
5. Dependency Injection
6. Decorators
7. Dependency Injection fabric decorators
8. Adapter
9. Facade
10. Composit Pattern
11. Strategy Pattern
12. Observer
13. Command pattern
14. Template method

## 1. Singelton

- You can have only a single instance of a specific class throughout the entire application
- Shared state
- Avoid long initializations
- Cross-class communication
- Perfectly represents unique items

_ts/singerton.ts_

```TypeScript
class StatsTracker {

  private static _instance: StatsTracker = new StatsTracker()

  public static get instance(): StatsTracker {
    return StatsTracker._instance
  }
}
```

## 2. Factory Pattern

- A combination of the single responsibility and Open/close principles

_ts/factory.ts_

```TypeScript
export class GameCharecterFactory {
  public static getWarrior(level: number): GameCharecter {...}
  public static getMage(level: number): GameCharecter
  {...}
}
```

## 3. Loose Coupling

- Software parts that communicate with each otehr have little to no knowledge of each other's actual implementation
- Idia of black boxes
- Easier to work with large projects
- Swap implementaions
- Testability
- Components grow independently

## 4. Object pool

- A pool of pre-initiezed objects whose intilizetion is heavyweight
- Every time we need such an object we take one from the pool
- Once we are done with it, we return it back to the pool

_ts/object-pool.ts_

```TypeScript
export class GameCharactersPool {
  private _warriorsPool: GameCharecter[] = []
  ...
  private loadWarriorsPool(): void {
    for (let i = 0; i < GameCharactersPool.WARRIOSR_POOL_SIZE; i++) {
      this._warriorsPool.push(GameCharecterFactory.getWarrior(this._level))
    }
  }
  private getPoolItem<T>(pool: T[], reloadFn: () => void): T {
    let item: T = pool.pop() as T
    if (!pool.length) {
      reloadFn()
    }
    return item
  }
  public getWarrior(): GameCharecter {
    return this.getPoolItem(this._warriorsPool, this.loadWarriorsPool.bind(this))
  }
```

## 5. Dependency Injection

- The ability to make use of code metadata to provide runtime information and inspection data about classes, interfaces and types
  _ts/ioc-container.ts_

```TypeScript
class concreteC implements IDepC {
  constructor(private _concreteA: IDepA, private _concreteB: IDepB) {}
  doC(): void {
    this._concreteA.doA()
    this._concreteB.doB()
    console.log('Doing C')
  }
}

container.register('IDepC', ['IDepA', 'IDepB'], concreteC)
const c = container.resolver<IDepC>("IDepC")
c.doC()
```

## 6. Decorators

- Is an experimental TypeScrpt feature that allows us to annotate classes, methods and preperties in order to extend their functionality without the need to subcless them

_ts/decorators.ts_

```TypeScript
function disable(
  target: Object,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  descriptor.value = () => {
    console.log(" Method ___ 'disabled' ")
  }
}
export class Whatever {
  @disable
  bar() {
    console.log('bar')
  }
}
```

## 7. Dependency Injection fabric decorators

_ts/ioc-fabric-decorators.ts_
_(ts/inversify.ts)_

```TypeScript
export function Register(name: string, dependecies: string[]): Function {
  let container = IoCContainer.instance
  return function<T extends {new (...args: any[]): {}}>(constructor: T) {
    container.register(name, dependecies, constructor)
  }
}
@Register("IDepA", [])
class concreteA implements IDepA {
  doA(): void {
    console.log('Doing A')
  }
}
```

## 8. Adapter

- Converts an interface of a class to one expexted by the consumer

_ts/adapter.ts_

```TypeScript
export class CountriesRepository implements ICountriesRepository {
  async allByContinent(continent: Continent): Promise<Country[]> {
    return new Promise<Country[]>((resolve, reject) => {
      ...
    })
  }
}
let countriesRepo = new CountriesRepository()
countriesRepo.allByCurrency('EUR').then(euroCountries => {
  ...
})
```

## 9. Facade

- The goal of the facade pattern is to simplify an interaface
- Every component should have little knowledge of how other components work and only communicate with a few specific close friends

_ts/facade.ts_

```TypeScript
const facade = new JsonPlaceholderFacade(new JsonPlaceholderService())
facade.getUser(1).then(user => {
  ...
})
```

## 10. Composit Pattern

- Used to create part-whole collections in the form of tree-like structures that can contain both individual items and collections as well

```TypeScript
const cardDeck = new CardDeck()
const secondDeck = new CardDeck()

cardDeck.add(secondDeck)
```

_ts/composite_

## 11. Strategy Pattern

- Pick the ability of the most appropriate algorithm from a group of similar algorithms

```TypeScript
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
  ...
}

export class FileErrorLogginStrategy implements IErrorLogginStartegy {
  ...
}



const errorHandler = new ErrorHandler(
  new ConsoleErrorStartegy(),
  new FileErrorLogginStrategy()
)

```

_ts/error-handler-strategy.ts_

## 12. Observer

- Register one or more listeners to the property. Every time that property changes we trigger an event that notyfice all the observers

```TypeScript
export class Car {

  set currentSpeed(speed: number) {
    if (this._currentSpeed !== speed) {
      ...
      this.tirggerCurrentSpeedObserver(speed, oldValue)
  }

  registerCurrentSpeedObserver(observer: Function) {
    if (!this._currentSpeedObserver.find(o => o === observer)) {
      this._currentSpeedObserver.push(observer)
    }
  }

  tirggerCurrentSpeedObserver(newValue: number, oldValue: number) {
    this._currentSpeedObserver.forEach(observer => observer(newValue, oldValue))
  }
}

```

_ts/observer.ts_

## 13. Command pattern

- Define separate (command) objects that encapsulate a request.
- A class delegates a request to a command object instead of implementing a particular request directly.

```TypeScript

```

_ts/command.ts_

## 14. Template method

- The template method uses unheritance to delegate the implementation responsibility for different parts of an aloorithm to subclasses

_ts/template.ts_