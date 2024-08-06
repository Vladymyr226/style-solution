import React, { FC } from 'react'
import s from './PriceCard.module.css'
import { TCards } from '../../../types'
import CheckCircle from '../../../assets/icons/check-circle.svg'

export const Features: FC<{ features: TCards['features'] }> = ({ features }) => {
  return (
    <ul className={s.priceCardFeatures}>
      {features.map((feature, index) => (
        <li key={index}>
          <img src={CheckCircle} alt="check-circle" width={24} height={24} />
          {feature}
        </li>
      ))}
    </ul>
  )
}
