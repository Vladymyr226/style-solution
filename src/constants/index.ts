import { Feature, Question, Step } from '../types'
import Phone1 from '../assets/images/desktop-phone-1.png'
import Phone2 from '../assets/images/desktop-phone-2.png'
import Phone3 from '../assets/images/desktop-phone-3.png'

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
    image: Phone1,
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
    image: Phone1,
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
    image: Phone2,
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
    image: Phone3,
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
    image: Phone3,
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
    image: Phone3,
  },
]

export const QUESTIONS: Question[] = [
  {
    title: 'How Does Hidegram Ensure My Conversations Are Private?',
    text: 'Hidegram Ensures Privacy by Encrypting Messages Client-Side and Not Storing Any Personal Data—Ensuring Only You Can Access Your Conversations.',
  },
  {
    title: 'How Can I Get Started With Using Hidegram?',
    text: 'Begin with Hidegram by Sending a Secure Code via Your Current Messenger Using Change, Then Start Your Encrypted Chat Instantly on Our Platform.',
  },
  {
    title: 'Is Hidegram Free To Use, Or Are There Any Fees?',
    text: "Hidegram Will Remain Free Until We Ensure Our Platform's Usability Aligns with the Highest Market Standards, Providing an Unmatched User Experience.",
  },
  {
    title: 'What Makes Hidegram Different From Other Messaging Apps?',
    text: 'Hidegram Stands Out by Eliminating the Need for User Accounts, Offering Unparalleled Privacy Through a Unique Encryption Key System Controlled Solely by You.',
  },
  {
    title: 'How Can I Trust That My Messages Are Truly Secure?',
    text: "Hidegram's Open Database Enhances Transparency, While User-Generated Strong Encryption Keys Ensure Message Privacy.",
  },
  {
    title: 'What Happens If I Lose My Encryption Key?',
    text: "If You Lose Your Encryption Key, the Messages Cannot Be Recovered for Security Reasons; It's Crucial to Back Up Your Key Safely.",
  },
]
