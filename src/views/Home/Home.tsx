import s from './Home.module.css'
import HeroImageDesktop from '../../assets/images/Desktop/desktop-phone-1.png'
import HeroImageMobile from '../../assets/images/Mobile/phone1.png'
import photo from '../../assets/images/photo.jpg'
import { CARDS, FEATURES } from '../../constants'
import FeatureCard from '../../components/Cards/FeatureCard/FeatureCard'
import { PriceCard } from '../../components/Cards/PriceCard/PriceCard'
import { RegistrationForm } from '../../components/RegistrationForm/RegistrationForm'
import { useMediaQuery } from 'react-responsive'
import React from 'react'
import { Features } from '../../components/Cards/PriceCard/Features'
import Button from '@mui/material/Button'
import { HashLink as Link } from 'react-router-hash-link'

export default function Home() {
  const isDesktop = useMediaQuery({ minWidth: 1440 })
  //todo add videoId from Youtube
  const videoId = ''
  const videoSrc = `https://www.youtube.com/embed/${videoId}`

  return (
    <div className={s.home}>
      <section id="sub_header" className={s.subTitle}>
        <h1 style={{ textAlign: 'center' }}>Ваш стиль на новому рівні</h1>
        <div className={s.subTitleContent}>
          <div>
            <Features features={CARDS[0].features} />
          </div>
          <div className={s.containerImg}>
            <img src={photo} alt="phone1" width={24} height={24} />
          </div>
        </div>
        {/*<iframe*/}
        {/*  className={s.video}*/}
        {/*  src={videoSrc}*/}
        {/*  title="YouTube video player"*/}
        {/*  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
        {/*  allowFullScreen*/}
        {/*></iframe>*/}
        <Link to="/#registrationForm" smooth={true}>
          <Button variant="contained" size={'large'} style={{ padding: '10px 20px' }}>
            Спробувати безкоштовно
          </Button>
        </Link>
      </section>
      {/*<GalleryModal />*/}
      <section id="home" className={s.hero}>
        <div className={s.heroContent}>
          <p className={s.title}>Ми допомагаємо барбершопам, перукарням та салонам краси побудувати успішний бізнес!</p>

          <p className={s.description}>
            Наша команда експертів готова надати повний медіа-маркетинг, розробку бренду та багато іншого.
            <br />
            <br />
            Разом ми забезпечимо вашому бізнесу стабільний розвиток і впевнений успіх у цифровій епосі.
          </p>
        </div>

        <img src={isDesktop ? HeroImageDesktop : HeroImageMobile} alt="iphone" />
      </section>

      <section className={s.features}>
        <ul className={s.featureList}>
          {FEATURES.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} index={idx} />
          ))}
        </ul>
      </section>
      <section>
        <div className={s.priceCardBlock}>
          <p className={s.priceCardTitle}>Наші ціни</p>
        </div>
        <div className={s.priceList}>
          {CARDS.map((card, index) => (
            <PriceCard key={index} card={card} />
          ))}
        </div>
      </section>
      <section>
        <div id={'registrationForm'} className={s.formBlock}>
          <h1>Реєстрація нового закладу</h1>
          <RegistrationForm />
        </div>
      </section>
    </div>
  )
}
