import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// @ts-ignore
import Parallax from 'parallax-js';
import Button from 'src/components/general/button';
import styles from './ecommerce-exp.module.css';

const BlogECommerce: React.FC = () => {
  const sceneEl = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
      // hoverOnly: true,
    });

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, []);
  return (
    <div className={styles.home}>
      <Container>
        <Row>
          <Col className={styles.rowTop} xs={0} md={4} lg={4}>
            <h1 className={styles.number}>#1</h1>
            <p className={styles.numberDes}>Intuitive & Educational eCommerce</p>
          </Col>
          <Col className={styles.rowTop} xs={12} md={8} lg={8}>
            <h1 className={styles.title}>
              The first <span className={styles.span}>all-in-one</span> Intuitive and Educational
              eCommerce experience
            </h1>
            <p className={styles.des}>
              Why efficiency and user-friendly can’t get along? Build your pages in confidence with
              the most optimized experience and informative instructions along the way that ensures
              success for even a first-time & non-technical eCommerce store owner.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} lg={12} className={styles.colForm}>
            <div className={styles.form}>
              <img src="/images/Ecommere2.png" alt="" className={styles.imageMobile} />
              <div className={styles.imgForm}>
                <Image
                  src="/images/Ecommere5728.png"
                  alt=""
                  width={380}
                  height={535}
                  objectFit="contain"
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className={styles.discoverH1}>
              Powerful technology to <br />{' '}
              <span className={styles.discoverSpan}>empower your brand</span>
            </h1>
            <p className={styles.discoverP}>
              Our powerful tools are designed with advanced development languages that helps
              optimize any brand experience to work faster and consistently across any devices.
            </p>
            <Button data="Discover now" className={styles.discoverButton} />
          </Col>
        </Row>
        <Row>
          <Col className={styles.bottomDiscover}>
            <div className={styles.wrapper} ref={sceneEl} id="scene">
              <div className={styles.laptop} data-depth="0.1">
                <Image
                  alt=""
                  src={'/images/macbook.png'}
                  width={887.46}
                  height={524.55}
                  objectFit="contain"
                />
              </div>
              <div className={styles.layer} data-depth="0.2">
                <div className={styles.cal}>
                  <Image
                    alt=""
                    src={'/images/cal.png'}
                    width={350}
                    height={300}
                    objectFit="contain"
                  />
                  <div className={styles.calArrow}>
                    <img src="/images/arrowleft.svg" alt="" className={styles.imgCalArrowLeft} />
                    <img
                      src="/images/arrowright.svg"
                      alt=""
                      className={styles.imgCalArrowLeftMobile}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.layer} data-depth="0.3 ">
                <div className={styles.sel}>
                  <Image
                    alt=""
                    src={'/images/sel.png'}
                    width={350}
                    height={300}
                    objectFit="contain"
                  />
                </div>
              </div>
              <div className={styles.layer} data-depth="0.2">
                <div className={styles.stock}>
                  <Image
                    alt=""
                    src={'/images/stock.png'}
                    width={300}
                    height={200}
                    objectFit="contain"
                  />
                </div>
              </div>
              <div className={styles.layer} data-depth="0.2">
                <div className={styles.phone}>
                  <Image
                    alt=""
                    src={'/images/iphone.png'}
                    width={250}
                    height={500}
                    objectFit="contain"
                  />
                  <div className={styles.calArrow} data-depth="0.3">
                    <img src="/images/Component 2.svg" alt="" className={styles.imgCalArrowRight} />
                    <img
                      src="/images/Component 4.svg"
                      alt=""
                      className={styles.imgCalArrowRightMobile}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogECommerce;
