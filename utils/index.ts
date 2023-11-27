/* eslint-disable camelcase */
export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50 // Base rental price per day in dollars
  const mileageFactor = 0.1 // Additional rate per mile driven
  const ageFactor = 0.05 // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor
  const ageRate = (new Date().getFullYear() - year) * ageFactor

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate

  return rentalRatePerDay.toFixed(0)
}

export const convertMPGtoLiters = (city_mpg: number) => {
  const milesToKilometers = 1.60934
  const gallonsToLiters = 3.78541

  // Converter mpg para km/L
  const kmPerLiter = (city_mpg * milesToKilometers) / gallonsToLiters

  // Converter km/L para litros por 100 km
  const litersPer100km = 100 / kmPerLiter

  return litersPer100km
}

export async function fectCars() {
  const headers = {
    'X-RapidAPI-Key': '6bb5f68826mshc401a585f652b43p192b90jsnba3efe1f5981',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  }

  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera',
    { headers },
  )

  const result = await response.json()

  return result
}
