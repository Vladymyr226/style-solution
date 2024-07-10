import s from './Home.module.css'
import HeroImage from '../../assets/images/desktop-phone-1.png'
import { FEATURES } from '../../constants'
import FeatureCard from '../../components/FeatureCard/FeatureCard'

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
            та багато іншого. <br />
            <br />
            Разом ми забезпечимо вашому бізнесу стабільний розвиток і впевнений успіх у цифровій
            епосі.
          </p>
        </div>

        <img src={HeroImage} alt='iphone' />
      </section>

      <section className={s.features}>
        <ul className={s.featureList}>
          {FEATURES.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} />
          ))}
        </ul>
      </section>
    </div>
  )
}
