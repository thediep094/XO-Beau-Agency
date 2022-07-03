import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/assets/logo.png';
import buttonScroll from 'public/assets/go-to-top.png';
import facebook from 'public/assets/facebook.svg';
import twitter from 'public/assets/twitter.svg';
import styles from './footer.module.scss';

const index = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src={logo} alt="Xopify" />
          </Link>
        </div>
        <div className={styles.footerNav}>
          <div className={styles.footerRow}>
            <div className={styles.footerCol}>
              <h3 className={styles.footerTitle}>Product</h3>
              <ul>
                <li>
                  <Link href="#">
                    <a className={styles.footerLink}>XO Sections</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className={styles.footerLink}>XO gallery</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.footerCol}>
              <h3 className={styles.footerTitle}>more about xo</h3>
              <ul>
                <li>
                  <Link href="#">
                    <a className={styles.footerLink}>Theme gallery</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className={styles.footerLink}>Casestudy</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className={styles.footerLink}>About us</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={`${styles.footerCol} ${styles.margin0}`}>
              <h3 className={styles.footerTitle}>Support</h3>
              <ul>
                <li>
                  <Link href="#">
                    <a className={styles.footerLink}>Document</a>
                  </Link>
                </li>
                <li>
                  Email:{' '}
                  <a className={styles.footerLink} href="mailto: hi@xopify.com">
                    hi@xopify.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <button className={styles.buttonOnTop} onClick={handleScrollTop}>
            <Image src={buttonScroll} alt="Xopify" />
          </button>
        </div>
      </div>
      <div className={styles.footerInfo}>
        <span className={styles.textInfo}>Xopify &copy; 2022. All rights resserved.</span>
        <div className={styles.textCenter}>
          <Link href="#">
            <span className={styles.textInfo}>Document</span>
          </Link>
          <Link href="#">
            <span className={styles.textInfo}>Changelog</span>
          </Link>
          <Link href="#">
            <span className={styles.textInfo}>Privacy Policy</span>
          </Link>
        </div>
        <div className={styles.social}>
          <Link href="#">
            <a className={styles.icon} target="_blank">
              <Image src={facebook} alt="" />
            </a>
          </Link>
          <Link href="#">
            <a className={styles.icon} target="_blank">
              <Image src={twitter} alt="" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default index;
