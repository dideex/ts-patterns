export class Car {
  private _currentSpeed: number = 0
  private readonly _maxSpeed: number
  private _currentSpeedObserver: Function[] = []

  constructor(maxSpeed: number) {
    this._maxSpeed = maxSpeed
  }

  get maxSpeed(): number {
    return this._maxSpeed
  }

  get currentSpeed(): number {
    return this._currentSpeed
  }

  set currentSpeed(speed: number) {
    if (this._currentSpeed < 0) {
      throw new Error('Invalid current speed')
    }
    if (this._currentSpeed > this._maxSpeed) {
      throw new Error('Engine broke')
    }
    if (this._currentSpeed !== speed) {
      const oldValue = this._currentSpeed
      this._currentSpeed = speed
      this.tirggerCurrentSpeedObserver(speed, oldValue)
    }
    this._currentSpeed = speed
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
