import s from "./Header.module.css";
import Logo from "../../assets/icons/logo.svg";
import Linkedin from "../../assets/icons/linkedin.svg";
import Reddit from "../../assets/icons/reddit.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Email from "../../assets/icons/email.svg";
import { useMediaQuery } from "react-responsive";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  return (
    <div className={s.header}>
      <div className={s.contactsWrapper}>
        <div className={s.contactsList}>
          <p className={s.email}>
            <img src={Email} width={17} height={16} alt="email" />
            <a href="mailto:hidegram@example.com">hidegram@example.com</a>
          </p>
          {isDesktop && (
            <p className={s.middleLabel}>
              For inquiries and support, reach us directly on email
            </p>
          )}

          <div className={s.iconsList}>
            <img src={Linkedin} width={23} height={23} alt="linkedin" />
            <img src={Reddit} width={23} height={23} alt="reddit" />
            <img src={Twitter} width={23} height={23} alt="twitter" />
          </div>
        </div>
      </div>
      <nav className={s.navigation}>
        <Link to="/">
          <img
            src={Logo}
            width={isDesktop ? 153 : 127}
            height={28}
            alt="hidegram"
          />
        </Link>
        {!isMobile && (
          <ul className={s.navigationList}>
            <li className={s.navigationItem}>
              <Link to="/#Chat">Chat</Link>
            </li>
            <li className={s.navigationItem}>
              <Link to="/#Change">Change</Link>
            </li>
            <li className={s.navigationItem}>
              <Link to="/#Access">Access</Link>
            </li>
            <li className={s.navigationItem}>
              <Link to="/#timeline">Timeline</Link>
            </li>
            <li className={s.navigationItem}>
              <Link to="/#FAQ">FAQ</Link>
            </li>
          </ul>
        )}
        <p className={s.download}>Try It Out!</p>
      </nav>
    </div>
  );
};

export default Header;
