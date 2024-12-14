import s from './Header.module.css'
import Logo from '../../assets/icons/logo.png'
import { useMediaQuery } from 'react-responsive'
import { HashLink as Link } from 'react-router-hash-link'
import { Button } from '@mui/material'
import { FEATURES } from '../../constants'
import React from 'react'

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const isDesktop = useMediaQuery({ minWidth: 1440 })

  return (
    <div className={s.header}>
      <nav className={s.navigation}>
        <Link to="/">
          <img src={Logo} alt={'Logo'} width={isDesktop ? 153 : 127} />
        </Link>

        <ul className={s.navigationList}>
          {FEATURES.map((feature, idx) => (
            <Link to={`/#${feature.id}`} smooth={true} key={idx}>
              <li className={s.navigationItem}>{feature.title}</li>
            </Link>
          ))}
          {!isMobile && (
            <Link to="/about-us">
              <li>
                <Button variant="outlined" size="large" style={{ padding: '5px 10px', whiteSpace: 'nowrap' }}>
                  Про нас
                </Button>
              </li>
            </Link>
          )}
        </ul>
      </nav>
    </div>
  )
}

export default Header
