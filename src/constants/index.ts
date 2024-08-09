import { Feature, TCards } from '../types'

import PhoneDesktop2 from '../assets/images/Desktop/desktop-phone-2.png'
import PhoneDesktop3 from '../assets/images/Desktop/desktop-phone-3.png'
import PhoneDesktop4 from '../assets/images/Desktop/desktop-phone-4.png'
import PhoneDesktop5 from '../assets/images/Desktop/desktop-phone-5.png'
import PhoneDesktop6 from '../assets/images/Desktop/desktop-phone-6.png'
import PhoneDesktop7 from '../assets/images/Desktop/desktop-phone-7.png'
import PhoneMobile2 from '../assets/images/Mobile/phone2.png'
import PhoneMobile3 from '../assets/images/Mobile/phone3.png'
import PhoneMobile4 from '../assets/images/Mobile/phone4.png'
import PhoneMobile5 from '../assets/images/Mobile/phone5.png'
import PhoneMobile6 from '../assets/images/Mobile/phone6.png'
import PhoneMobile7 from '../assets/images/Mobile/phone7.png'

export const FEATURES: Feature[] = [
  {
    title: 'Стильна зачіска за вашим фото з використанням AI',
    description: [
      {
        text: 'Забудьте про невдалі експерименти з зачісками та витрачений даремно час. Наші AI-технології гарантують точний підбір зачіски, що ідеально підходить саме вам.',
      },
      {
        text: 'Завдяки передовим алгоритмам, система аналізує ваші риси обличчя та пропонує найкращі варіанти зачісок, щоб підкреслити вашу природну красу.',
      },
      {
        text: 'Цей підхід не лише економить ваш час, але й забезпечує першокласний результат, який задовольнить як клієнтів, так і стилістів. Отримуйте якісні перетворення з максимальним комфортом.',
      },
    ],
    imageDesktop: PhoneDesktop2,
    imageMobile: PhoneMobile2,
  },

  {
    title: 'Бронь запису онлайн',
    description: [
      {
        text: 'Забудьте про довгі черги та витрачений час. Онлайн-бронювання дозволяє легко та швидко зарезервувати час, який вам потрібен.',
      },
      {
        text: 'З онлайн-бронюванням ви отримуєте потужний інструмент для організації своєї діяльності, що допоможе вам максимально ефективно планувати свій день.',
      },
      {
        text: 'Цей підхід надає зручність як клієнтам, так і бізнесам, дозволяючи їм краще керувати своїм часом та забезпечувати найвищий рівень обслуговування.',
      },
    ],
    imageDesktop: PhoneDesktop3,
    imageMobile: PhoneMobile3,
  },
  {
    title: 'Зворотний дзвінок',
    description: [
      {
        text: 'Наша послуга зворотного дзвінка гарантує, що жоден важливий дзвінок або повідомлення не залишиться без уваги та відповіді.',
      },
      {
        text: 'Зворотний дзвінок допомагає підтримувати стабільні та продуктивні відносини з клієнтами, що є ключовим аспектом успішного бізнесу.',
      },
      {
        text: 'Наша послуга зворотного дзвінка не лише забезпечує повагу до клієнтів, але й допомагає вам будувати сильну репутацію як надійного та відповідального партнера.',
      },
    ],
    imageDesktop: PhoneDesktop4,
    imageMobile: PhoneMobile4,
  },
  {
    title: 'Інформація про послуги закладу',
    description: [
      {
        text: 'Ми прагнемо забезпечити вам неперевершений досвід через індивідуальний підхід та уважний підбір послуг.',
      },
      {
        text: 'Ми використовуємо тільки найкращі матеріали для забезпечення вашої задоволеності.',
      },
      {
        text: 'Ми прагнемо створити навколишню атмосферу довіри і комфорту, щоб ви завжди з радістю поверталися до нас.',
      },
    ],
    imageDesktop: PhoneDesktop5,
    imageMobile: PhoneMobile5,
  },
  {
    title: 'Нагадування про попередній запис',
    description: [
      {
        text: 'Ми піклуємося про ваш комфорт і зручність, надаючи можливість отримувати своєчасні нагадування про ваші зустрічі з певним фахівцем та певним часом.',
      },
      {
        text: 'Завдяки нашій технології ви можете спокійно планувати свій час, знаючи, що ми надсилатимемо вам нагадування про всі ваші попередні записи.',
      },
    ],
    imageDesktop: PhoneDesktop6,
    imageMobile: PhoneMobile6,
  },
  {
    title: 'Аналітика відвідування закладу',
    description: [
      {
        text: 'Наша функція аналітики відвідування закладу надає власникам повний контроль і прозорість щодо їхнього бізнесу.',
      },
      {
        text: 'Ми забезпечуємо детальну інформацію щодо відвідуваності, виручки та інших ключових метрик, які допомагають приймати обґрунтовані рішення для підвищення ефективності закладу.',
      },
    ],
    imageDesktop: PhoneDesktop7,
    imageMobile: PhoneMobile7,
  },
]

export const CARDS: Array<TCards> = [
  {
    title: 'Базовый',
    price: '800 грн/місяць',
    description: 'Основные услуги',
    features: [
      'Стильна зачіска за вашим фото з використанням AI',
      'Бронь запису онлайн',
      'Зворотний дзвінок',
      'Інформація про послуги закладу',
      'Нагадування про попередній запис',
      'Аналітика відвідування закладу',
    ],
  },
]
