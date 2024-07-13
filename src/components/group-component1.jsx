
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';

import '../styles.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

const GroupComponent1 = ({ className = "" }) => {


  return (
    <section
      className={`ml-[-20px] w-[1540px] h-[879px] relative max-w-[107%] shrink-0 cursor-pointer text-center text-lg text-khaki-100 font-matter ${className}`}
    >

      <div className="absolute top-[0px] left-[50px] bg-gray-300 w-[1440px] flex flex-col items-start justify-start pt-[67px] px-3.5 pb-[37px] box-border gap-[46px] max-w-full">
        <div className="w-[1445px] h-[879px] relative bg-gray-300 hidden max-w-full" />
        <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[18px] box-border max-w-full">
          <div className="w-[782px] flex flex-col items-start justify-start gap-[10px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-left">
              <div className="w-[236px] flex flex-row items-end justify-start gap-[9px]">
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[9px]">
                  <div className="w-[42px] h-px relative box-border z-[1] border-t-[1px] border-solid border-khaki-100" />
                </div>
                <div className="flex-1 relative tracking-[0.17em] leading-[22px] z-[1]">
                  Read experience
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1.5 box-border max-w-full text-21xl text-text-color-secondary font-inria-serif">
              <h1 className="m-0 flex-1 relative text-inherit leading-[120%] font-normal font-inherit inline-block max-w-full z-[1] mq450:text-5xl mq450:leading-[29px] mq1050:text-13xl mq1050:leading-[38px]">
                Crafting Trips for Every Travel Style
              </h1>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[76px] box-border max-w-full text-gray-2000">
              <div className="flex-1 relative leading-[130%] font-light inline-block max-w-full z-[1]">
                Browse our trips based on your specific interests. Whether you
                are looking for hiking and trekking adventures, snorkeling
                excursions, in-depth cultural encounters, or more, we have the
                trip for you.
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full overflow-hidden relative flex-row items-start justify-start gap-[3px] max-w-full  text-25xl text-text-color-secondary ">
          <Swiper
            navigation={{
              nextEl: ".custom-next-button1",
              prevEl: ".custom-prev-button1",
            }}
            autoplay={true}
            slidesPerView={4}
            keyboard={true}
            loop={true}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper1"
          >
            <SwiperSlide>
              <section className="flex h-[50px] flex-row w-full items-start justify-start py-52 px-6 box-border relative max-w-full z-[1]">
                <img
                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/rectangle-211@2x.png"
                />
                <h1 className="m-0 h-[65px] flex-1 relative text-inherit leading-[130%] font-semibold font-inherit flex items-center justify-center z-[1] mq450:text-7xl mq450:leading-[34px] mq1050:text-16xl mq1050:leading-[46px]">
                  Cultural
                </h1>
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section className="flex h-[50px] flex-row w-full items-start justify-start py-52 px-6 box-border relative max-w-full z-[1]">
                <img
                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/rectangle-215@2x.png"
                />
                <h1 className="m-0 h-[65px] flex-1 relative text-inherit leading-[130%] font-semibold font-inherit flex items-center justify-center z-[1] mq450:text-7xl mq450:leading-[34px] mq1050:text-16xl mq1050:leading-[46px]">
                Hiking
                </h1>
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section className="flex h-[50px] flex-row w-full items-start justify-start py-52 px-6 box-border relative max-w-full z-[1]">
                <img
                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/rectangle-216@2x.png"
                />
                <h1 className="m-0 h-[65px] flex-1 relative text-inherit leading-[130%] font-semibold font-inherit flex items-center justify-center z-[1] mq450:text-7xl mq450:leading-[34px] mq1050:text-16xl mq1050:leading-[46px]">
                Walking
                </h1>
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section className="flex flex-row w-full items-start justify-start py-52 px-6 box-border relative max-w-full z-[1]">
                <img
                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/rectangle-217@2x.png"
                />
                <h1 className="m-0 h-[65px] flex-1 relative text-inherit leading-[130%] font-semibold font-inherit flex items-center justify-center z-[1] mq450:text-7xl mq450:leading-[34px] mq1050:text-16xl mq1050:leading-[46px]">
                River Rafting
                </h1>
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section className="flex flex-row w-full items-start justify-start py-52 px-6 box-border relative max-w-full z-[1]">
                <img
                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/rectangle-211@2x.png"
                />
                <h1 className="m-0 h-[65px] flex-1 relative text-inherit leading-[130%] font-semibold font-inherit flex items-center justify-center z-[1] mq450:text-7xl mq450:leading-[34px] mq1050:text-16xl mq1050:leading-[46px]">
                  Cultural
                </h1>
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section className="flex flex-row w-full items-start justify-start py-52 px-6 box-border relative max-w-full z-[1]">
                <img
                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/rectangle-215@2x.png"
                />
                <h1 className="m-0 h-[65px] flex-1 relative text-inherit leading-[130%] font-semibold font-inherit flex items-center justify-center z-[1] mq450:text-7xl mq450:leading-[34px] mq1050:text-16xl mq1050:leading-[46px]">
                Hiking
                </h1>
              </section>
            </SwiperSlide>
    
          </Swiper>
          <div className="w-full h-5 absolute slider-main-container  top-1/2  max-w-full">
            <div className="nav-btn1 custom-prev-button1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="main-grid-item-icon" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <line x1="19" x2="5" y1="12" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </div>

            <div className="nav-btn1 custom-next-button1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="main-grid-item-icon" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <line x1="5" x2="19" y1="12" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent1;
