import { Feature } from '../../types'
import s from './FeatureCard.module.css'
import CheckCircle from '../../assets/icons/check-circle.svg'
import { useMediaQuery } from 'react-responsive'
const FeatureCard = ({ feature }: { feature: Feature }) => {
  const isDesktop = useMediaQuery({ minWidth: 1440 })

  return (
    <li
      id={feature.title}
      style={feature.title === 'Change' ? { flexDirection: 'row-reverse' } : {}}
      className={s.featureCard}
    >
      {isDesktop && (
        <img
          style={feature.title === 'Change' ? { marginLeft: 0, marginRight: '-137px' } : {}}
          className={s.featureImage}
          src={feature.image}
          alt={feature.title}
        />
      )}
      <div className={s.featureContent}>
        {isDesktop && feature.title === 'Chat' && <h2 className={s.subTitle}>features</h2>}
        <h3 className={s.featureTitle}>{feature.title}</h3>
        {!isDesktop && <img className={s.featureImage} src={feature.image} alt={feature.title} />}
        <ul className={s.featureDescriptionList}>
          {feature.description.map((desc, idx) => (
            <li key={idx} className={s.featureDescriptionItem}>
              <div className={s.featureDescriptionTitle}>
                <img src={CheckCircle} alt='check-circle' width={24} height={24} />
                <span>{desc.title}</span>
              </div>
              <p className={s.featureDescriptionText}>{desc.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export default FeatureCard
