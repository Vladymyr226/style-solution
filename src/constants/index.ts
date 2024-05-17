import { Feature, Question, Step } from '../types'
import Phone1 from '../assets/images/desktop-phone-1.png'
import Phone2 from '../assets/images/desktop-phone-2.png'
import Phone3 from '../assets/images/desktop-phone-3.png'
import Step1 from '../assets/images/first-step.png'
import Step2 from '../assets/images/second-step.png'
import Step3 from '../assets/images/third-step.png'
import Step4 from '../assets/images/forth-step.png'

export const FEATURES: Feature[] = [
  {
    title: 'Бронь запису онлайн',
    description: [
      {
        // title: 'Control Your Encryption',
        text: 'Це дозволяє уникнути черг і заощадити час.',
      },
      {
        // title: 'New Level Of Privacy',
        text: 'Онлайн-бронювання є ефективним інструментом для організації своєї діяльності та планування часу.',
      },
      {
        text: 'Такий підхід зручний і для клієнтів, і для бізнесів, оскільки вони можуть краще планувати свій робочий час.',
      },
    ],
    image: Phone1,
  },
  {
    title: 'Зворотний дзвінок',
    description: [
      {
        // title: 'Effortless Key Exchange',
        text: 'Наша послуга зворотного дзвінка гарантує, що жоден важливий дзвінок або повідомлення не залишиться без уваги та відповіді.',
      },
      {
        // title: 'Quickstart Conversation',
        text: 'Ми пропонуємо ефективні інструменти для організації та відстеження зворотних дзвінків, щоб ви могли ефективно взаємодіяти з вашими клієнтами.',
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
    title: 'Інформація про послуги',
    description: [
      {
        // title: 'Unified Key Management',
        text: 'Access Provides a Centralized, Secure Hub for Your Encryption Keys. Manage and Access Your Keys from Any Device, Ensuring That You Can Always Communicate Safely on Hidegram. Your Privacy, Conveniently Accessible Wherever You Go.',
      },
      {
        // title: 'Simplify Your Security',
        text: 'Access Is the Future of Privacy Management. Streamlining the Way You Store and Retrieve Your Encryption Keys, Hidegram Is Designing Access to Make Privacy Easy and Consistent Across All Your Devices. Keep an Eye Out—Seamless Security Is Coming Soon.',
      },
    ],
    image: Phone3,
  },
]

export const STEPS: Step[] = [
  {
    step: 'Q1',
    year: '2023',
    title: 'Proof of Concept',
    text: "Launching the Foundation - Hidegram's Proof of Concept Emerges, Showcasing the Revolutionary Potential of Privacy-Focused Communication Without Compromising on User-Friendliness.",
    image: Step1,
  },
  {
    step: 'Q1',
    year: '2024',
    title: 'User-Friendly Prototype',
    text: 'Usability Meets Security - Hidegram Introduces the First User-Friendly Prototype, Blending Robust Encryption with an Intuitive Interface for Effortless Adoption.',
    image: Step2,
  },
  {
    step: 'Q2',
    year: '2024',
    title: 'File Sharing Features',
    text: 'Expanding Functionality - Hidegram Evolves with the Integration of File-Sharing Capabilities, Ensuring Secure and Private Document Transfers Within the Chat Environment.',
    image: Step3,
  },
  {
    step: 'Q3-Q4',
    year: '2024',
    title: 'Launch of Access',
    text: 'Complete Control - The Latter Half of 2024 Will See the Launch of Access, Hidegram’s Key Management System, Providing Users with Unprecedented Control Over Their Encryption Keys Across Devices.',
    image: Step4,
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
