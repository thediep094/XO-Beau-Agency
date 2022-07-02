import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import bars from 'public/assets/bars.svg';
import logo from 'public/assets/logo.png';
import styles from './header.module.css';

const Header: React.FC = () => {
  const [show, setShow] = useState<boolean>(true);
  const [showMenuNav, setShowMenuNav] = useState(false);

  useEffect(() => {
    let lastScrollY = 0;
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleShowMenu = () => {
    setShowMenuNav(!showMenuNav);
    console.log(showMenuNav);
  };

  return (
    <div
      className={`${styles.header} ${show ? styles.stickyClass : ''} ${
        showMenuNav ? styles.showMenu : ''
      }`}
    >
      <div className={styles.fluid}>
        <Link href="/">
          <Image src={logo} alt="Xopify" />
        </Link>
        <div className={styles.collapse}>
          <div className={styles.navbarNav}>
            <Link href="/#">
              <span className={`${styles.navItem} ${styles.active}`}>
                Product
              </span>
            </Link>
            <Link href="/#">
              <span className={styles.navItem}>Theme gallery</span>
            </Link>
            <Link href="/#">
              <span className={styles.navItem}>Blog</span>
            </Link>
            <Link href="/#">
              <span className={styles.navItem}>About us</span>
            </Link>
            <Link href="/#">
              <span className={styles.navItem}>Contact</span>
            </Link>
          </div>
          <button className={styles.button}>Get started</button>
        </div>
        <button className={styles.bars} onClick={handleShowMenu}>
          <Image src={bars} alt=""></Image>
        </button>
      </div>
      <div
        className={`${styles.menuNav} ${
          showMenuNav ? styles.showMenuNavBar : ''
        }`}
      >
        <div
          className={`${styles.menuContainer} ${
            showMenuNav ? styles.showItemNavBar : ''
          }`}
        >
          <Link href="/#">
            <span className={`${styles.menuNavItem} ${styles.active}`}>
              Product
            </span>
          </Link>
          <Link href="/#">
            <span className={styles.menuNavItem}>Theme gallery</span>
          </Link>
          <Link href="/#">
            <span className={styles.menuNavItem}>Blog</span>
          </Link>
          <Link href="/#">
            <span className={styles.menuNavItem}>About us</span>
          </Link>
          <Link href="/#">
            <span className={styles.menuNavItem}>Contact</span>
          </Link>
          <button className={styles.button}>Get started</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
