import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css/pagination';
import styles from './testimonial.module.css';

const Testimonial = () => {
  const [slide, setSlide] = useState(0);
  const onChange = (activeIndex: number) => {
    setSlide(activeIndex);
  };
  return (
    <div className={styles.home}>
      <Container>
        <Row className={styles.row}>
          <Col xs={12} lg={5} md={12} xl={5}>
            <div className={styles.left}>
              <img src="/images/phay.svg" alt="" className={styles.phay} />
              <div className={styles.from}>
                <h1 className={styles.title}>from our customers</h1>

                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  initialSlide={slide}
                  modules={[Autoplay, Pagination]}
                  className={styles.mySwiper}
                  onSlideChange={({ activeIndex }) => onChange(activeIndex)}
                >
                  <Row>
                    <SwiperSlide>
                      <div className={styles.leftInfo}>
                        <p className={styles.des}>
                          Xopify is not like any other online store builder, it helps us to tell our
                          story in the most meaningful way that reacts the deeper emotional level of
                          our target customer. We would have never reached such success like today.
                        </p>
                        <h2 className={styles.author}>Mr. NeoKhuat</h2>
                        <h3 className={styles.position}>Marketing Manager at XO</h3>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={styles.leftInfo}>
                        <p className={styles.des}>
                          Xopify is not like any other online store builder, it helps us to tell our
                          story in the most meaningful way that reacts the deeper emotional level of
                          our target customer. We would have never reached such success like today.
                        </p>
                        <h2 className={styles.author}>Mr. NeoKhuat</h2>
                        <h3 className={styles.position}>Marketing Manager at XO</h3>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={styles.leftInfo}>
                        <p className={styles.des}>
                          Xopify is not like any other online store builder, it helps us to tell our
                          story in the most meaningful way that reacts the deeper emotional level of
                          our target customer. We would have never reached such success like today.
                        </p>
                        <h2 className={styles.author}>Mr. NeoKhuat</h2>
                        <h3 className={styles.position}>Marketing Manager at XO</h3>
                      </div>
                    </SwiperSlide>
                  </Row>
                </Swiper>
              </div>

              <div className={styles.wrapLine}>
                <div className={`${styles.line} ${slide === 0 ? styles.active : ''}`}></div>
                <div className={`${styles.line} ${slide === 1 ? styles.active : ''}`}></div>
                <div className={`${styles.line} ${slide === 2 ? styles.active : ''}`}></div>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={5} md={12} xl={5}>
            <div className={styles.img}> </div>
          </Col>
        </Row>
        <Row className={styles.rowCount}>
          <Col xs={12} lg={12} md={12} xl={12} className={styles.col}>
            <h1 className={styles.titleCount}>XOPIFY IN NUMBERS</h1>
            <div className={`${styles.wrapCount} ${styles.fixLeft}`}>
              <div className={styles.wrapCountTop}>
                <CountUp
                  start={0}
                  end={100}
                  duration={2}
                  className={styles.count}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                />
                <p className={styles.sufflix}>M</p>
                <div className={styles.wrapCountTitle}>active users</div>
              </div>
            </div>
            <div className={styles.wrapCount}>
              <div className={styles.wrapCountTop}>
                <CountUp
                  start={0}
                  end={128}
                  duration={2}
                  className={styles.count}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                />
                <p className={styles.sufflix}></p>
                <div className={styles.wrapCountTitle}>stores have used XO Apps </div>
              </div>
            </div>
            <div className={styles.wrapCount}>
              <div className={styles.wrapCountTop}>
                <CountUp
                  start={0}
                  end={59}
                  duration={2}
                  className={styles.count}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                />
                <p className={styles.sufflix}>%</p>
                <div className={styles.wrapCountTitle}>more satisfied customers</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonial;
