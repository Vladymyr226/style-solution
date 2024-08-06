import React, { FC } from 'react'
import s from './PriceCard.module.css'
import { TCards } from '../../../types'
import { Features } from './Features'

export const PriceCard: FC<{ card: TCards }> = ({ card }) => {
  const { price, features } = card

  return (
    <div className={s.priceCard}>
      <b className={s.priceCardPrice}>{price}</b>
      <br />
      <br />
      <Features features={features} />
    </div>
  )
}
