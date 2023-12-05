import { Hero, SearchBar, CustomFilter, CarCard, ShowMore } from '@/components'
import { fuels, yearsOfProduction } from '@/constants'
import { FilterProps } from '@/types'
import { fetchCars } from '@/utils'

interface HomeProps {
  searchParams: FilterProps
}

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams?.manufacturer || '',
    year: searchParams?.year || 2023,
    fuel: searchParams?.fuel || '',
    limit: searchParams?.limit || 10,
    model: searchParams?.model || '',
  })

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discorver">
        <div className="home__text-container">
          <h1 className="text-4x1 font-extrabold"> Catálogo de Carros</h1>
          <p> Explore os carros que você pode gostar</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <CustomFilter title="fuel" options={fuels} />
          <CustomFilter title="year" options={yearsOfProduction} />
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => <CarCard key={car.id} car={car} />)}
            </div>
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars?.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-x1 font-bold"> Sem resultados </h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  )
}
