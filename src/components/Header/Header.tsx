import s from './Header.module.css'
import Logo from '../../assets/icons/logo.png'
import Linkedin from '../../assets/icons/linkedin.svg'
import Reddit from '../../assets/icons/reddit.svg'
import Twitter from '../../assets/icons/twitter.svg'
import Email from '../../assets/icons/email.svg'
import { useMediaQuery } from 'react-responsive'
import { HashLink as Link } from 'react-router-hash-link'

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const isDesktop = useMediaQuery({ minWidth: 1440 })

  return (
    <div className={s.header}>
      <div className={s.contactsWrapper}>
        <div className={s.contactsList}>
          <p className={s.email}>
            <img src={Email} width={17} height={16} alt='email' />
            <a href='mailto:style.solution@gmail.com'>style.solution@gmail.com</a>
          </p>
          {isDesktop && (
            <p className={s.middleLabel}>
              Для запитів і підтримки зв’яжіться з нами безпосередньо електронною поштою
            </p>
          )}

          {/* <div className={s.iconsList}>
            <img src={Linkedin} width={23} height={23} alt='linkedin' />
            <img src={Reddit} width={23} height={23} alt='reddit' />
            <img src={Twitter} width={23} height={23} alt='twitter' />
          </div> */}
        </div>
      </div>
      <nav className={s.navigation}>
        <Link to='/'>
          <img src={Logo} width={isDesktop ? 153 : 127} />
        </Link>
        {!isMobile && (
          <ul className={s.navigationList}>
            <li className={s.navigationItem}>
              <Link to='/#Бронь запису онлайн'>Бронь запису онлайн</Link>
            </li>
            <li className={s.navigationItem}>
              <Link to='/#Зворотний дзвінок'>Зворотний дзвінок</Link>
            </li>
            <li className={s.navigationItem}>
              <Link to='/#Інформація про послуги'>Інформація про послуги</Link>
            </li>
            <li className={s.navigationItem}>
              <Link to='/#timeline'>Генерація власного стилю за допомогою AI</Link>
            </li>
            <li className={s.navigationItem}>
              <Link to='/#FAQ'>FAQ</Link>
            </li>
          </ul>
        )}
        <p className={s.download}>Спробуй!</p>
      </nav>
    </div>
  )
}

export default Header
