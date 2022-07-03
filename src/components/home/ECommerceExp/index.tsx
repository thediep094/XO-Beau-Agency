import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Parallax } from 'react-scroll-parallax';
// @ts-ignore
import Button from 'src/components/general/button';
import styles from './ecommerce-exp.module.css';

const BlogECommerce: React.FC = () => {
  return (
    <div className={styles.home}>
      <Container>
        <Row>
          <Col className={`${styles.rowTop}`} xs={0} md={4} lg={4}>
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
          <Col className={`${styles.bottomDiscover} `}>
            <div className={`${styles.wrapper}`}>
              <Parallax speed={10}>
                <div className={`${styles.laptop}`}>
                  <Image
                    alt=""
                    src={'/images/macbook.png'}
                    width={887.46}
                    height={524.55}
                    objectFit="contain"
                  />
                </div>
              </Parallax>
              <Parallax speed={11} className={`${styles.cal}`}>
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
              </Parallax>
              <Parallax speed={9} className={`${styles.sel}`}>
                <Image
                  alt=""
                  src={'/images/sel.png'}
                  width={350}
                  height={300}
                  objectFit="contain"
                />
              </Parallax>
              <Parallax className={`${styles.stock}`} speed={11}>
                <Image
                  alt=""
                  src={'/images/stock.png'}
                  width={300}
                  height={200}
                  objectFit="contain"
                />
              </Parallax>

              <Parallax className={`${styles.phone} `} speed={9}>
                <Image
                  alt=""
                  src={'/images/iphone.png'}
                  width={250}
                  height={500}
                  objectFit="contain"
                />
                <div className={styles.calArrow}>
                  <img src="/images/Component 2.svg" alt="" className={styles.imgCalArrowRight} />
                  <img
                    src="/images/Component 4.svg"
                    alt=""
                    className={styles.imgCalArrowRightMobile}
                  />
                </div>
              </Parallax>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogECommerce;
