import React, {FC} from 'react';
import s from './PriceCard.module.css'
import {TCards} from "../../../types"; // Подключаем CSS файл для стилизации

export const PriceCard: FC<{ card: TCards }> = ({card}) => {
  const {title, price, description, features} = card

  return (
    <div className={s.priceCard}>
      {/*<h2 className={s.priceCardTitle}>{title}</h2>*/}
      <p className={s.priceCardPrice}>{price}</p>
      {/*<p className={s.priceCardDescription}>{description}</p>*/}
      <ul className={s.priceCardFeatures}>
        {features.map((feature, index) => (
          <li key={index}>✅ {feature}</li>
        ))}
      </ul>
    </div>
  );
};