export interface GameCharecter {
  strange: number
  magic: number
}

export class GameCharecterFactory {
  public static getWarrior(level: number): GameCharecter {
    if (10 > level)
      return {
        strange: 10,
        magic: 0
      }
    return {
      strange: 30,
      magic: 5
    }
  }
  public static getMage(level: number): GameCharecter {
    if (10 > level)
      return {
        strange: 0,
        magic: 10
      }
    return {
      strange: 5,
      magic: 30
    }
  }
}

const warrior = GameCharecterFactory.getWarrior(9)
const mage = GameCharecterFactory.getMage(12)

console.log(" LOG ___ warrior ", warrior )
console.log(" LOG ___ mage ", mage )