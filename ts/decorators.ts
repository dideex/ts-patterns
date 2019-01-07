// Simple decorator
export function disable(
  target: Object,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  descriptor.value = () => {
    console.log(" Method ___ 'disabled' ")
  }
}

// Decorators fabric
export function before(hook: Function) {
  return function<T extends Function>(
    target: Object,
    methodName: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor {
    return {
      get: function(this: T) {
        let originalMethod = descriptor.value!.bind(this)
        hook = hook.bind(this)

        return () => {
          hook()
          originalMethod()
        }
      }
    }
  }
}

// Class decorators fabric
export function capitalize() {
  return function<T extends {new (...args: any[]): {}}>(constructor: T) {
    return class extends constructor {
      _a = "A"
      _b = "B"
    }
  }
}

@capitalize()
export class Whatever {
  private _a: string = 'a'
  private _b: string = 'b'

  @before(() => console.log('Beforee hook'))
  foo() {
    console.log('foo')
  }

  @disable
  bar() {
    console.log('bar')
  }

  baz() {
    console.log(this._a, this._b)
  }
}

let whatever = new Whatever()
whatever.foo()
whatever.bar()
whatever.baz()