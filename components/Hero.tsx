'use client'

import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleScroll = () => {}

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Encontre, reserve ou alugue um carro de forma rápida e fácil!
        </h1>

        <p className="hero__subtitle">
          Simplifique sua experiência de aluguel de carro com nosso processo de
          reserva.
        </p>

        <CustomButton
          title="Veja nossos carros"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />

          <div className="hero__image-overlay"></div>
        </div>
      </div>
    </div>
  )
}

export default Hero
