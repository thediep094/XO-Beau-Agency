import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import anime from 'animejs';
import Button from 'src/components/general/button';
import styles from './call-to-action.module.css';

const CallToAction: React.FC = () => {
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
          <Col>
            <div className={styles.wrapper}>
              <h1 className={styles.title}>Try professional tools for free</h1>
              <p className={styles.des}>
                Build your <span className={styles.span}>Branded eCommerce Experience</span> today
                with Xopify!
              </p>
              <Button data="Get start now" />
            </div>
          </Col>
        </Row>
      </Container>
      <div className={styles.overlay}></div>
      <div className={styles.img}></div>
      <div>
        <svg
          width="1492"
          height="434"
          viewBox="0 0 1492 434"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${styles.svg} ${!check ? styles.svgHidden : ''}`}
        >
          <path
            d="M1702.07 236.988C1496.99 366.294 1325.67 357.602 1246.21 231.74C1196.08 152.332 1203.21 57.5047 1258.35 22.7373C1296.54 -1.3404 1342.05 1.4964 1360.15 30.1628C1386.62 72.1081 1359.31 157.993 1245.1 229.986C944.523 419.507 582.876 64.794 232.532 285.687C26.6933 415.432 6.20632 640.12 6.20632 640.12"
            stroke="url(#paint0_linear_1584_5995)"
            strokeWidth="11"
            strokeMiterlimit="10"
            className="path"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1584_5995"
              x1="-41.9064"
              y1="572.378"
              x2="1633.33"
              y2="57.6755"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FEED02" />
              <stop offset="0.416667" stopColor="#66FFCC" />
              <stop offset="1" stopColor="#11B8F2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div>
        <svg
          width="358"
          height="137"
          viewBox="0 0 358 137"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${styles.svgMobile} ${!check ? styles.svgHidden : ''}`}
        >
          <path
            d="M397.158 56.7552C349.471 86.8231 309.634 84.8019 291.158 55.5348C279.499 37.0697 281.157 15.0192 293.98 6.93467C302.859 1.33579 313.442 1.99544 317.65 8.66134C323.807 18.415 317.456 38.3861 290.899 55.1269C221.004 99.1968 136.909 16.7143 55.4424 68.0791C7.5781 98.2493 2.81419 150.497 2.81419 150.497"
            stroke="url(#paint0_linear_1610_7909)"
            strokeWidth="5"
            strokeMiterlimit="10"
            className="path"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1610_7909"
              x1="-8.37362"
              y1="134.745"
              x2="381.175"
              y2="15.0589"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FEED02" />
              <stop offset="0.416667" stopColor="#66FFCC" />
              <stop offset="1" stopColor="#11B8F2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className={styles.checkBot} ref={myRef}></div>
    </div>
  );
};

export default CallToAction;
