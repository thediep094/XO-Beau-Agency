import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import anime from 'animejs';
import { useInView } from 'react-intersection-observer';
import Button from 'src/components/general/button';
import styles from './hero.module.css';

const Hero: React.FC = () => {
  const { ref: myRef, inView: scrollTo } = useInView();
  const [check, setCheck] = useState(false);
  const animation = (): void => {
    anime({
      targets: '.path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
    });
  };
  useEffect(() => {
    if (scrollTo && !check) {
      animation();
      setCheck(true);
    }
  }, [scrollTo, check]);
  return (
    <div className={styles.home}>
      <Container>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <div className={styles.wrapper}>
              <p className={styles.text}>
                We create <span className={styles.span}>Branded eCommerce Experience </span>
                <span>that converts!</span>
              </p>
              <p className={styles.des}>
                We champion meaningful brands, products and services by creating an intuitive and
                codeless eCommerce experience that helps you to engagingly communicate your brand
                and build a strong connection with your audience.
              </p>
              <div className={styles.button}>
                <Button data="Explore now" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div>
        <svg
          width="1920"
          height="477"
          viewBox="0 0 1920 477"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${styles.svg} ${!check ? styles.svgHidden : ''}`}
        >
          <path
            d="M-70.4662 348.245C-70.4662 348.245 124.136 506.323 383.55 462.98C714.543 407.679 700.464 189.206 635.874 158.487C590.325 136.816 547.41 167.821 545.983 220.447C543.811 299.205 600.729 372.181 660.841 413.834C811.337 518.174 1013.77 440.675 1141.72 335.498C1291.92 212.03 1359.84 15.1009 1587.17 5.97434C1857.59 -4.89375 1952.54 189.948 1952.54 189.948"
            stroke="url(#paint0_linear_1575_5385)"
            strokeWidth="11"
            strokeMiterlimit="10"
            className="path"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1575_5385"
              x1="1979.13"
              y1="275.087"
              x2="-49.2324"
              y2="193.547"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FEED02" />
              <stop offset="0.416667" stopColor="#66FFCC" />
              <stop offset="1" stopColor="#11B8F2" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          width="375"
          height="186"
          viewBox="0 0 375 186"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${styles.svgMobile} ${!check ? styles.svgHidden : ''}`}
        >
          <path
            d="M-122.457 165.746C-122.457 165.746 -65.5717 197.903 -0.793815 175.48C81.8579 146.871 68.7362 91.3405 50.8018 86.2562C38.1539 82.6688 28.4746 92.5031 30.3972 106.089C33.2649 126.422 51.0662 142.7 68.3255 150.788C111.539 171.055 160.188 142.333 188.492 109.739C221.719 71.4768 230.608 17.9157 288.628 5.68146C357.648 -8.87521 390.524 37.0642 390.524 37.0642"
            stroke="url(#paint0_linear_1600_6442)"
            strokeWidth="5"
            strokeMiterlimit="10"
            className="path"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1600_6442"
              x1="401.059"
              y1="57.7865"
              x2="-123.73"
              y2="125.069"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FEED02" />
              <stop offset="0.416667" stopColor="#66FFCC" />
              <stop offset="1" stopColor="#11B8F2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className={styles.image}>
        <Image
          src={'/images/hero.png'}
          width={900}
          height={1000}
          objectFit="contain"
          alt=""
        />
      </div>
      <div ref={myRef} className={styles.checkBot}></div>
    </div>
  );
};

export default Hero;
