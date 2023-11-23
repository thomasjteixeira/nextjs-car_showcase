'use client'
import { type CustomButtonProps } from '@/types'
import Image from 'next/image'

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || 'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            width={20}
            height={20}
            alt="right arrow"
            className="object-contain"
          />
        </div>
      )}
    </button>
  )
}

export default CustomButton
