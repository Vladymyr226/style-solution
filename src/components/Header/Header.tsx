import s from './Header.module.css'
import Logo from '../../assets/icons/logo.png'
import {useMediaQuery} from 'react-responsive'
import {HashLink as Link} from 'react-router-hash-link'

const Header = () => {
  const isMobile = useMediaQuery({maxWidth: 767})
  const isDesktop = useMediaQuery({minWidth: 1440})

  return (
    <div className={s.header}>
      <nav className={s.navigation}>
        <Link to='/'>
          <img src={Logo} alt={'Logo'} width={isDesktop ? 153 : 127}/>
        </Link>

        <ul className={s.navigationList}>
          <Link to='/#Стильна зачіска за вашим фото з використанням AI'>
            <li className={s.navigationItem}>
              Стильна зачіска за вашим фото з використанням AI
            </li>
          </Link>
          <Link to='/#Бронь запису онлайн'>
            <li className={s.navigationItem}>
              Бронь запису онлайн
            </li>
          </Link>
          <Link to='/#Зворотний дзвінок'>
            <li className={s.navigationItem}>
              Зворотний дзвінок
            </li>
          </Link>
          <Link to='/#Інформація про послуги закладу'>
            <li className={s.navigationItem}>
              Інформація про послуги закладу
            </li>
          </Link>
          <Link to='/#Нагадування про попередній запис'>
            <li className={s.navigationItem}>
              Нагадування про попередній запис
            </li>
          </Link>
          <Link to='/#Аналітика відвідування закладу'>
            <li className={s.navigationItem}>
              Аналітика відвідування закладу
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Header