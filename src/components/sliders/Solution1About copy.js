import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const clickedTabsSliderButton = (event) => {
  const buttons = document.querySelectorAll(".mil-tab-buttons a");
  buttons.forEach((button) => {
    button.classList.remove("mil-active");
  });

  event.currentTarget.classList.toggle("mil-active");
};

const Solution1About = () => {
  return (
    <section className="mil-deep-bg mil-p-120-0">
      <div className="container">
        <Swiper
          {...sliderProps.milTabsSlider}
          className="swiper-container mil-tabs-slider"
        >
          <SwiperSlide
            className="swiper-slide"
            data-hash="tab1"
          >
            <div
              className="row justify-content-between align-items-center"
              data-swiper-parallax-y={-100}
              data-swiper-parallax-opacity={0}
            >
              <div className="col-lg-7">
                <div className="mil-hori-box mil-mb-60">
                  <div className="mil-mr-15">
                    <div className="mil-icon-frame mil-icon-frame-md">
                      <img
                        src="img/icons/md/2.svg"
                        alt="icon"
                      />
                    </div>
                  </div>
                  <h5>Genel Özellikler</h5>
                </div>
                <div className="row mil-mb-60">
                  <div className="col-lg-6">
                    <ul>
                      <li >Yatay veya dikeydoğrultu tasarımı</li>
                      <li >Tamamen kaynaklı gövde</li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>Özelleştirilmiş, kompakt tasarım</li>
                      <li>
                        Düşük maliyetli basit modüllasyonlu çalışma prensibine
                        uygun standart anlak (valve) üzerine diğer boyutlar
                        mevcuttur
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <a
                  href="#."
                  className="mil-link mil-mb-60"
                >
                  <span>See More</span>
                  <i className="fas fa-arrow-right" />
                </a> */}
              </div>
              <div className="col-lg-4">
                <div
                  className="mil-circle-illustration mil-with-dots mil-mb-60"
                  data-swiper-parallax-scale=".8"
                >
                  <div className="mil-circle-bg" />
                  <div className="mil-image-frame">
                    <img
                      src="uploads/3YOLLUDAMPER.jpeg"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="swiper-slide"
            data-hash="tab2"
          >
            <div
              className="row justify-content-between align-items-center"
              data-swiper-parallax-y={-100}
              data-swiper-parallax-opacity={0}
            >
              <div className="col-lg-7">
                <div className="mil-hori-box mil-mb-60">
                  <div className="mil-mr-15">
                    <div className="mil-icon-frame mil-icon-frame-md">
                      <img
                        src="img/icons/md/1.svg"
                        alt="icon"
                      />
                    </div>
                  </div>
                  <h5>Teknik Özellikler</h5>
                </div>
                <div className="row mil-mb-60">
                  <div className="col-lg-6">
                    <h6>Basınç</h6>
                    <p>
                      Standart olarak 50kPa (0.5 bar), ancak talep üzerine daha
                      yüksek değerlere de tasarlayabilir.
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <h6>Sıcaklık</h6>
                    <p>
                      Standart olarak 60°C (m/s 2.2), ancak talep üzerine 120°C
                      (m/s2.2)F'ye kadar tasarlayabiliriz.
                    </p>
                  </div>
                </div>
                {/* <a
                  href="#."
                  className="mil-link mil-mb-60"
                >
                  <span>See More</span>
                  <i className="fas fa-arrow-right" />
                </a> */}
              </div>
              <div className="col-lg-4">
                <div
                  className="mil-circle-illustration mil-with-dots mil-mb-60"
                  data-swiper-parallax-scale=".8"
                >
                  <div className="mil-circle-bg" />
                  <div className="mil-image-frame">
                    <img
                      src="uploads/damper 2.png"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide
            className="swiper-slide"
            data-hash="tab3"
          >
            <div
              className="row justify-content-between align-items-center"
              data-swiper-parallax-y={-100}
              data-swiper-parallax-opacity={0}
            >
              <div className="col-lg-7">
                <div className="mil-hori-box mil-mb-60">
                  <div className="mil-mr-15">
                    <div className="mil-icon-frame mil-icon-frame-md">
                      <img
                        src="img/icons/md/11.svg"
                        alt="icon"
                      />
                    </div>
                  </div>
                  <h5>Natural Language</h5>
                </div>
                <div className="row mil-mb-60">
                  <div className="col-lg-6">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden.
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <p>
                      Internet tend to repeat predefined chunks as necessary,
                      making this the first true generator on the Internet. It
                      uses a dictionary of over 200 Latin words, combined with a
                      handful of model sentence structures, to generate Lorem
                      Ipsum which looks reasonable.
                    </p>
                  </div>
                </div>
                <a
                  href="#."
                  className="mil-link mil-mb-60"
                >
                  <span>See More</span>
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
              <div className="col-lg-4">
                <div
                  className="mil-circle-illustration mil-with-dots mil-mb-60"
                  data-swiper-parallax-scale=".8"
                >
                  <div className="mil-circle-bg" />
                  <div className="mil-image-frame">
                    <img
                      src="img/faces/t2.png"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="swiper-slide"
            data-hash="tab4"
          >
            <div
              className="row justify-content-between align-items-center"
              data-swiper-parallax-y={-100}
              data-swiper-parallax-opacity={0}
            >
              <div className="col-lg-7">
                <div className="mil-hori-box mil-mb-60">
                  <div className="mil-mr-15">
                    <div className="mil-icon-frame mil-icon-frame-md">
                      <img
                        src="img/icons/md/3.svg"
                        alt="icon"
                      />
                    </div>
                  </div>
                  <h5>Computer Vision</h5>
                </div>
                <div className="row mil-mb-60">
                  <div className="col-lg-6">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden.
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <p>
                      Internet tend to repeat predefined chunks as necessary,
                      making this the first true generator on the Internet. It
                      uses a dictionary of over 200 Latin words, combined with a
                      handful of model sentence structures, to generate Lorem
                      Ipsum which looks reasonable.
                    </p>
                  </div>
                </div>
                <a
                  href="#."
                  className="mil-link mil-mb-60"
                >
                  <span>See More</span>
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
              <div className="col-lg-4">
                <div
                  className="mil-circle-illustration mil-with-dots mil-mb-60"
                  data-swiper-parallax-scale=".8"
                >
                  <div className="mil-circle-bg" />
                  <div className="mil-image-frame">
                    <img
                      src="img/faces/t5.png"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>
        <div className="mil-tab-buttons mil-mt-60-adapt">
          <a
            href="#tab1"
            className="mil-active"
            onClick={clickedTabsSliderButton}
          >
            <span>Genel Özellikler</span>
          </a>
          <a
            href="#tab2"
            onClick={clickedTabsSliderButton}
          >
            <span>Teknik Özellikler</span>
          </a>
          {/* <a
            href="#tab3"
            onClick={clickedTabsSliderButton}
          >
            <span>Natural Language</span>
          </a>
          <a
            href="#tab4"
            onClick={clickedTabsSliderButton}
          >
            <span>Computer Vision</span>
          </a> */}
        </div>
      </div>
    </section>
  );
};
export default Solution1About;
