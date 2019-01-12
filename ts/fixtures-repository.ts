import { Country } from './adapter'
import fs from 'fs'

export enum Continent {
  Asia = 'Asia',
  Europe = 'Europe'
}

export class CountriesRepository {
  async all(): Promise<Country[]> {
    return Promise.all(
      [Continent.Asia, Continent.Europe].map(continent =>
        this.allByContinent(continent)
      )
    ).then(results => {
      let consolidate: Country[] = []
      results.forEach(result => consolidate.push(...result))
      return consolidate
    })
  }

  async allByContinent(continent: Continent): Promise<Country[]> {
    return new Promise<Country[]>((resolve, reject) => {
      fs.readFile(
        this.continentToFileName(continent),
        'utf8',
        (err: any, data: any) => {
          if (err) reject(err)
          else {
            const countries: Country[] = JSON.parse(data)
            resolve(countries)
          }
        }
      )
    })
  }

  async allByCurrency(currency: string): Promise<Country[]> {}

  private continentToFileName(continent: Continent) {
    const prefix: string = 'fixtures/'
    const fileNames: any = {}
    fileNames[Continent.Asia] = 'asia.json'
    fileNames[Continent.Europe] = 'europe.json'
    return prefix + fileNames[Continent[continent]]
  }
}
