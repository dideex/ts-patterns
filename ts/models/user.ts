export interface Geo {
  lat: number
  lng: number
}

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

export interface Company {
  name: string
  catchPhrase: string
  bs: string
}

export interface User {
  id: number
  name: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}
