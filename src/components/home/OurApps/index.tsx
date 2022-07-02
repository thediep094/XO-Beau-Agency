import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './ourapps.module.css';

const OurApps: React.FC = () => {
  const [swipe, setSwipe] = useState<any>();
  return (
    <div className={styles.home}>
      <Container>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <p className={styles.title}>
              Explore our add-ons for <br />
              <span className={styles.span}>better conversion</span>
            </p>
            <p className={styles.titleMobile}>
              More add-ons for <br />
              <span className={styles.span}>better conversion</span>
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} lg={12} className={styles.col}>
            <div onClick={() => swipe?.slidePrev()} className={styles.left}>
              {/* <img src="./PathCopy2.png" alt="" className={styles.button} /> */}
            </div>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              modules={[Pagination]}
              loopFillGroupWithBlank={true}
              className={styles.mySwiper}
              onBeforeInit={(swipper) => setSwipe(swipper)}
            >
              <Row>
                <SwiperSlide>
                  <div className={styles.wrapper}>
                    <Image
                      src="/images/swiperImage1.png"
                      width={468}
                      height={387}
                      className={styles.img}
                      alt=""
                    />
                    <p className={styles.name}>XO Gallery</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.wrapper}>
                    <Image
                      src="/images/swiperImage2.png"
                      width={468}
                      height={387}
                      className={styles.img}
                      alt=""
                    />
                    <p className={styles.name}>XO Gallery</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.wrapper}>
                    <Image
                      src="/images/swiperImage3.png"
                      width={468}
                      height={387}
                      className={styles.img}
                      alt=""
                    />
                    <p className={styles.name}>XO Gallery</p>
                  </div>
                </SwiperSlide>
              </Row>
            </Swiper>
            <div onClick={() => swipe?.slideNext()} className={styles.right}>
              {/* <img src="./PathCopy2.png" alt="" className={styles.button} /> */}
            </div>
          </Col>
        </Row>

        {/* For Mobile */}
        <Row className={styles.mobile}>
          <Col xs={12}>
            <div className={styles.wrapper}>
              <Image
                src="/images/swiperImage3.png"
                width={468}
                height={387}
                className={styles.img}
                alt=""
              />
              <p className={styles.name}>XO Lookbook</p>
            </div>
          </Col>
        </Row>
        <Row className={styles.mobile}>
          <Col xs={12}>
            <div className={styles.wrapper}>
              <Image
                src="/images/swiperImage2.png"
                width={468}
                height={387}
                className={styles.img}
                alt=""
              />
              <p className={styles.name}>XO Section Builder</p>
            </div>
          </Col>
        </Row>
        <Row className={styles.mobile}>
          <Col xs={12}>
            <div className={styles.wrapper}>
              <Image
                src="/images/swiperImage1.png"
                width={468}
                height={387}
                className={styles.img}
                alt=""
              />
              <p className={styles.name}>XO Gallery</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurApps;
