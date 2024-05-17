import { useMediaQuery } from 'react-responsive'
import Logo from '../../assets/icons/logo.png'
import Linkedin from '../../assets/icons/linkedin-footer.svg'
import Reddit from '../../assets/icons/reddit-footer.svg'
import Twitter from '../../assets/icons/twitter-footer.svg'
import s from './Footer.module.css'

const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  // footer container flex-around items-start w-full md:flex-row flex-col p-20 gap-[60px] md:gap-[140px] overflow-hidden
  return (
    <div className={s.footer}>
      <ul className={s.footerContacts}>
        <a href='/'>
          <img src={Logo} width={127} height={28} alt='hidegram' />
        </a>
        {!isMobile && (
          <p className={s.subTitle}>Style Solution - місце, де клієнти отримують задоволення 🤤</p>
        )}
        <div className={s.socialList}>
          <img src={Linkedin} width={23} height={23} alt='linkedin' />
          <img src={Reddit} width={23} height={23} alt='reddit' />
          <img src={Twitter} width={23} height={23} alt='twitter' />
        </div>
        {!isMobile && <p className={s.legal}>© 2024 Style Solution</p>}
      </ul>

      <div className={s.footerContentList}>
        <div className={s.footerContentItem}>
          <p className={s.footerContentTitle}>Articles</p>
          <ul>
            <li className={s.footerContentLink}>FAQ</li>
            <li className={s.footerContentLink}>Release notes</li>
            <li className={s.footerContentLink}>How it works?</li>
          </ul>
        </div>

        <div className={s.footerContentItem}>
          <p className={s.footerContentTitle}>Ligal</p>
          <ul>
            <li className={s.footerContentLink}>
              <a target='_blank' rel='noreferrer' href='/privacy-policy'>
                Privacy Policy
              </a>
            </li>
            <li className={s.footerContentLink}>Terms of Use</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
