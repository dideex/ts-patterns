import { CountriesRepository, Continent } from './fixtures-repository'
import { RestCountries } from './utils/rest-countries'
import { RestCountriesAdapter } from './fistures-adapter'

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

const restCountries = new RestCountriesAdapter(new RestCountries())

restCountries.allByContinent(Continent.NorthAmerica).then(northAmerica => {
  console.log(
    `Number of north american countries stored: ${northAmerica.length}`
  )
})
// restCountries.getByRegion('Americas').then(northAmericaCountries => {
//   console.log('​northAmericaCountries', northAmericaCountries.length)
// })
