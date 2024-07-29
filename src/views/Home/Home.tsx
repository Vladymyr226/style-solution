import s from './Home.module.css'
import HeroImageDesktop from '../../assets/images/Desktop/desktop-phone-1.png'
import HeroImageMobile from '../../assets/images/Mobile/phone1.png'
import {CARDS, FEATURES} from '../../constants'
import FeatureCard from '../../components/Cards/FeatureCard/FeatureCard'
import {PriceCard} from '../../components/Cards/PriceCard/PriceCard'
import {RegistrationForm} from '../../components/RegistrationForm/RegistrationForm'
import {useMediaQuery} from "react-responsive";

export default function Home() {
  const isDesktop = useMediaQuery({minWidth: 1440})

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

        <img src={isDesktop ? HeroImageDesktop : HeroImageMobile} alt='iphone'/>
      </section>

      <section className={s.features}>
        <ul className={s.featureList}>
          {FEATURES.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} index={idx}/>
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
