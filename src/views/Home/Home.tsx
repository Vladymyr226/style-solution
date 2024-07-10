import s from './Home.module.css'
import HeroImage from '../../assets/images/desktop-phone-1.png'
import { FEATURES, QUESTIONS } from '../../constants'
import FeatureCard from '../../components/FeatureCard/FeatureCard'
import QuestionCard from '../../components/QuestionCard/QuestionCard'
import { useMediaQuery } from 'react-responsive'

export default function Home() {
  const isDesktop = useMediaQuery({ minWidth: 1440 })

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
        {!isDesktop && <h2 className={s.subTitle}>ОСОБЛИВОСТІ</h2>}
        <ul className={s.featureList}>
          {FEATURES.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} />
          ))}
        </ul>
      </section>

      <section id='FAQ' className={s.timeline}>
        <h3 className={s.questionsTitle}>
          Your Trust <br /> Our Commitment
        </h3>
        {isDesktop && (
          <p className={s.questionsDescription}>
            Quick queries on Hidegram? Find fast facts and straightforward support right here in our
            FAQ.
          </p>
        )}

        <ul className={s.questionsList}>
          {QUESTIONS.map((question, idx) => (
            <QuestionCard key={idx} isOdd={idx % 2 === 0} question={question} />
          ))}
        </ul>
      </section>
    </div>
  )
}
