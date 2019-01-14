import { ICountriesRepository } from './fixtures-repository.interface'
import { Country } from './adapter'
import { Continent } from './fixtures-repository'
import { RestCountries } from './utils/rest-countries'

export class RestCountriesAdapter implements ICountriesRepository {
  constructor(private _restCountriestApi: RestCountries) {}

  private restCountryToCountry(restCountry: any): Country {
    return {
      name: restCountry.name,
      capital: restCountry.capital,
      currency: restCountry.currency
    }
  }

  private restCountriesToCountries(restCountries: any[]): Country[] {
    return restCountries.map(restCountry =>
      this.restCountryToCountry(restCountry)
    )
  }

  async all(): Promise<Country[]> {
    const restCountries = await this._restCountriestApi.getAll()
    return this.restCountriesToCountries(restCountries)
  }

  async allByContinent(continent: Continent): Promise<Country[]> {
    let region = ''
    if (
      continent === Continent.NorthAmerica ||
      continent === Continent.SouthAmerica
    ) {
      region = 'Americas'
    } else {
      region = Continent[continent]
    }
    const restCountries = await this._restCountriestApi.getByRegion(region)
    return this.restCountriesToCountries(restCountries)
  }

  async allByCurrency(currency: string): Promise<Country[]> {
    const restCountries = await this._restCountriestApi.getByCurrency(currency)
    return this.restCountriesToCountries(restCountries)
  }
}
