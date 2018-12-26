// 5 37
import { GameCharecter, GameCharecterFactory } from './factory'

export class GameCharactersPool {
  private _warriorsPool: GameCharecter[] = []
  private _magesPool: GameCharecter[] = []

  static WARRIOSR_POOL_SIZE = 30
  static MAGE_POOL_SIZE = 20

  constructor(private _level: number) {
    this.loadWarriorsPool()
    this.loadMagesPool()
  }

  private loadMagesPool(): void {
    for (let i = 0; i < GameCharactersPool.MAGE_POOL_SIZE; i++) {
      this._magesPool.push(GameCharecterFactory.getMage(this._level))
    }
  }

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
  public getMage(): GameCharecter {
    return this.getPoolItem(this._magesPool, this.loadMagesPool.bind(this))
  }
}

const level = 12
const pool = new GameCharactersPool(level)

// load 4 warriosr
for (let i = 0; i < 40; i++) {
  console.log(i + 1)
  console.log(pool.getWarrior())
}
