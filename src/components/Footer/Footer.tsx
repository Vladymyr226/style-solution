import {useMediaQuery} from 'react-responsive'
import Logo from '../../assets/icons/logo.png'
import Email from '../../assets/icons/email.svg'
import Phone from '../../assets/icons/phone.svg'

import s from './Footer.module.css'

const Footer = () => {
  const isMobile = useMediaQuery({maxWidth: 767})
  // footer container flex-around items-start w-full md:flex-row flex-col p-20 gap-[60px] md:gap-[140px] overflow-hidden
  return (
    <div className={s.footer}>
      <div className={s.footerContacts}>
        <div className={s.footerContentList}>
          <img src={Logo} width={127} height={28} alt='Logo'/>

          <div className={s.footerContentItem}>
            <p className={s.footerContentTitle}>Наші контакти</p>
            <p className={s.contacts}>
              <img src={Email} width={17} height={16} alt='email'/>
              <a href='mailto:style.solution@gmail.com'>style.solution@gmail.com</a>
            </p>
            <p className={s.contacts}>
              <img src={Phone} width={17} height={16} alt='phone'/>
              <a href='tel:+380 50 561 86 62'>+380 50 561 86 62</a>
            </p>
          </div>
        </div>
        {!isMobile && (
          <p className={s.subTitle}>Style Solution - місце, де клієнти отримують задоволення 🤤</p>
        )}

      </div>
      {!isMobile && <p className={s.legal}>© {new Date().getFullYear()} Style Solution</p>}


    </div>
  )
}

export default Footer