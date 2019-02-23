# JavaScript patters

## SOLID

1. Single Responsibility
2. Open/Close principle
3. Liskov Substitution
4. Interface Segregation
5. Dependency Inversion
---
## Single Responsibility

+ A class or method should be responsible for a single part of the functionality

## Open/Close principle

+ Open to extension
+ Closed to modification

_You should not add stuff to completed classes_

_Add functinality by extending_

## Liskov Substitution

+ A subclass should be used wherever its base class can be used

```
export class ConcreteA {
  doA(): void {
    console.log('Doing A')
  }
  ...
}

export class ConcreteB extends ConcreteA {
  doA(): void {
    console.log('Doing B')
  }
  ...
}
```

## Interface Segregation(split)

+ A class should not depend on methods that it does not need to implement
+ Keep classes and interfaces compact

```
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
interface ISmart {
  openApp(): void;
  connectToWiFi(): void;
  call(): void;
  sendSms():void;
}
```

## Dependency Inversion

+ Your classes and modules should depend on abstractions instead of concrete implementations
+ Abstractions should not depend on details. Details should depend on abstractions.
+ In TypeScript the abstractions are actually interfaces

---

# Design patterns

1. Singelton


## Singelton
+ You can have only a single instance of a specific class throughout the entire application