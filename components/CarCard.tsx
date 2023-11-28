'use client'
/* eslint-disable camelcase */

import { useState } from 'react'
import Image from 'next/image'
import { CarProps } from '@/types'
import CustomButton from './CustomButton'
import {
  calculateCarRent,
  convertMPGtoLiters,
  generateCarImageUrl,
} from '@/utils'
import CarDetails from './carDetails'

interface CarCardProps {
  car: CarProps
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car
  const [isOpen, setIsOpen] = useState(false)

  const carRent = calculateCarRent(city_mpg, year)

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card_content-title">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] leading-[38px] font-extrabold">
        <span className="car-card__price-dollar">R$</span>
        {carRent}
        <span className="car-card__price-day">/dia</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          className="object-contain"
          src={generateCarImageUrl(car)}
          alt="car model"
          fill
          priority
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-grey">
          <div className="car-card__icon">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="transmissão"
            />
            <p className="car-card__icon-text">
              {transmission === 'a' ? 'Automático' : 'Manual'}
            </p>
          </div>
          <div className="car-card__icon">
            <Image src="/tire.svg" width={20} height={20} alt="pneu" />
            <p className="car-card__icon-text">
              {drive === 'fwd' ? '2x4' : drive.toUpperCase()}
            </p>
          </div>
          <div className="car-card__icon">
            <Image src="/gas.svg" width={20} height={20} alt="transmissão" />
            <p className="car-card__icon-text">
              {convertMPGtoLiters(city_mpg).toFixed(1)} km/L
            </p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="Detalhes"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  )
}

export default CarCard
