import { Country } from './adapter'
import { Continent } from './fixtures-repository'

export interface ICountriesRepository {
  all(): Promise<Country[]>
  allByContinent(continent: Continent): Promise<Country[]>
  allByCurrency(currency: string): Promise<Country[]>
}
