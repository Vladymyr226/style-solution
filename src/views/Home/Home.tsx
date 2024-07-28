import s from './Home.module.css'
import HeroImage from '../../assets/images/desktop-phone-1.png'
import {CARDS, FEATURES} from '../../constants'
import FeatureCard from '../../components/Cards/FeatureCard/FeatureCard'
import {PriceCard} from '../../components/Cards/PriceCard/PriceCard'
import {RegistrationForm} from '../../components/RegistrationForm/RegistrationForm'

export default function Home() {
  return (
    <div className={s.home}>
      <section id='home' className={s.hero}>
        <div className={s.heroContent}>
          <p className={s.title}>
            Ми допомагаємо перукарням, барбершопам та салонам краси побудувати успішний бізнес
            онлайн
          </p>

          <p className={s.description}>
            Наша команда експертів готова надати повний соціальний медіа-маркетинг, розробку бренду
            та багато іншого. <br/>
            <br/>
            Разом ми забезпечимо вашому бізнесу стабільний розвиток і впевнений успіх у цифровій
            епосі.
          </p>
        </div>

        <img src={HeroImage} alt='iphone'/>
      </section>

      <section className={s.features}>
        <ul className={s.featureList}>
          {FEATURES.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature}/>
          ))}
        </ul>
      </section>
      <section>
        <div className={s.priceCardBlock}>
          <p className={s.priceCardTitle}>
            Наші ціни
          </p>
        </div>
        <div className={s.priceList}>
          {CARDS.map((card, index) => (
            <PriceCard key={index} card={card}/>
          ))}
        </div>
      </section>
      <section>
        <div className={s.formBlock}>
          <h1>Реєстрація нового закладу</h1>
          <RegistrationForm/>
        </div>
      </section>
    </div>
  )
}
