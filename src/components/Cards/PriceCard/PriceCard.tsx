import React, { FC } from 'react'
import s from './PriceCard.module.css'
import { TCards } from '../../../types' // Подключаем CSS файл для стилизации
import CheckCircle from '../../../assets/icons/check-circle.svg'

export const PriceCard: FC<{ card: TCards }> = ({ card }) => {
  const { price, features } = card

  return (
    <div className={s.priceCard}>
      <b className={s.priceCardPrice}>{price}</b>
      <br />
      <br />
      <ul className={s.priceCardFeatures}>
        {features.map((feature, index) => (
          <li key={index}>
            <img src={CheckCircle} alt='check-circle' width={24} height={24} />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}
