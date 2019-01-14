import { CountriesRepository, Continent } from './fixtures-repository'
import { RestCountries } from './utils/rest-countries'

export interface Country {
  name: string
  capital: string
  currency: string
}

// Adapter v1

let countriesRepo = new CountriesRepository()
countriesRepo.allByCurrency('EUR').then(euroCountries => {
  console.log('​euroCountries', euroCountries)
})

countriesRepo.allByContinent(Continent.Asia).then(asiaCountries => {
  console.log('​Number of asian countries', asiaCountries.length)
})

// Adapter v2

let restCountries = new RestCountries()
restCountries.getByRegion('Americas').then(northAmericaCountries => {
  console.log('​northAmericaCountries', northAmericaCountries.length)
})
