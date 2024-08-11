import { useMediaQuery } from 'react-responsive'
import Logo from '../../assets/icons/logo.png'
import Phone from '../../assets/icons/phone.svg'
import Telegram from '../../assets/icons/telegram.svg'
import s from './Footer.module.css'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 })

  return (
    <>
      <div className={s.footer}>
        <div className={s.footerContacts}>
          <div className={s.footerContentList}>
            <img src={Logo} width={127} height={28} alt="Logo" />

            <div className={s.footerContentItem}>
              <p className={s.footerContentTitle}>Наші контакти</p>

              <p className={s.contacts}>
                <img src={Phone} width={17} height={16} alt="phone" />
                <a href="tel:+380 50 561 86 62" rel="noopener noreferrer" style={{ whiteSpace: 'nowrap' }}>
                  +380 50 561 86 62
                </a>
              </p>
              <p className={s.contacts}>
                <img src={Telegram} width={17} height={16} alt="telegram" />
                <a href="https://t.me/J_Volodya" target="_blank" rel="noopener noreferrer">
                  J_Volodya
                </a>
              </p>
            </div>
            <div>
              {isMobile && (
                <>
                  <Link to="/about-us" style={{ listStyle: 'none' }}>
                    <li>
                      <Button variant="outlined" size="large" style={{ padding: '5px 10px', whiteSpace: 'nowrap' }}>
                        Про нас
                      </Button>
                    </li>
                  </Link>
                  <br />
                  <p className={s.contacts}>ФОП Свириденко Володимир Романович</p>
                </>
              )}
            </div>
          </div>
          {!isMobile && (
            <p className={s.subTitle}>
              <b>Style Solution</b> - сервіс, від якого клієнти та бізнес отримують задоволення 🤤
            </p>
          )}
        </div>
      </div>
      <br />
    </>
  )
}

export default Footer
