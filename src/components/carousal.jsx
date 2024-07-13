import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../styles.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

const Carousel = () => {

    return (
        <>
            <div className=' h-[345px]  max-w-full'>
                <Swiper
                    navigation={{
                        nextEl: ".custom-next-button",
                        prevEl: ".custom-prev-button",
                    }}
                    autoplay={true}
                    slidesPerView={2}
                    keyboard={true}
                    rewind={true}
                    centeredSlides={true}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >

                    <SwiperSlide>
                        {({ isActive }) => (
                            <div className={`w-[812px] !m-[0] absolute bottom-[-37.2px]  [backdrop-filter:blur(115.78px)] rounded-[35.88px] [background:linear-gradient(142.13deg,_rgba(253,_248,_255,_0.21),_rgba(253,_248,_255,_0))] box-border flex flex-col items-center justify-start pt-[37px] px-5 pb-[25px] gap-[23.8px] z-[3] text-base-3 border-[14.5px] border-solid border-gray-2100 ${isActive ? 'z-10!' : ''}`}>
                                <div className={`w-[812px] h-[424.3px] relative [backdrop-filter:blur(115.78px)] rounded-[35.88px] [background:linear-gradient(142.13deg,_rgba(253,_248,_255,_0.21),_rgba(253,_248,_255,_0))] box-border hidden max-w-full z-[0] border-[14.5px] border-solid border-gray-2100 ${isActive ? 'scale-125!' : ''}`} />
                                <img
                                    className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[38.24px] max-w-full overflow-hidden max-h-full object-cover z-[1]"
                                    alt=""
                                    src="/rectangle-1@2x.png"
                                />
                                <div className="w-[512.4px] flex flex-col items-start justify-start gap-[9.1px] max-w-full">
                                    <div className="flex flex-row items-start justify-start py-0 px-[7px]">
                                        <img
                                            className="h-[29.1px] w-[39px] relative z-[2]"
                                            loading="lazy"
                                            alt=""
                                            src="/-2.svg"
                                        />
                                    </div>
                                    <i className="self-stretch relative tracking-[0.03em] text-gainsboro-100 leading-[29.06px] z-[2]">
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's
                                        standard dummy text ever since the 1500s, when an unknown
                                        printer took a galley of type and scrambled it to make a type
                                        specimen book.
                                    </i>
                                </div>
                                <div className="w-[514px] h-[123.6px] flex flex-row items-start justify-center py-0 pr-0 pl-0.5 box-border max-w-full text-mini-5 text-gainsboro-100">
                                    <div className="self-stretch w-[239px] flex flex-col items-start justify-start gap-[6.1px]">
                                        <div className="self-stretch flex-1 flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
                                            <div className="h-[68.1px] w-[64.2px] relative z-[2] flex items-center justify-center">
                                                <img
                                                    className="h-full w-full z-[2] object-contain absolute left-[0px] top-[3px] [transform:scale(1.477)]"
                                                    loading="lazy"
                                                    alt=""
                                                    src="/group-5-2.svg"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end justify-start">
                                            <div className="flex flex-row items-start justify-end py-0 pr-[72px] pl-[73px]">
                                                <div className="relative tracking-[0.05em] leading-[25px] uppercase font-medium inline-block min-w-[96px] z-[2]">
                                                    john smith
                                                </div>
                                            </div>
                                            <div className="relative text-sm-8 leading-[25px] font-light text-lightsteelblue z-[2] mt-[-0.6px]">
                                                Founder of Awesomeux Technology
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                    </SwiperSlide>

                    <SwiperSlide>
                        {({ isActive }) => (
                            <div className={`w-[812px] !m-[0] absolute bottom-[-37.2px]  [backdrop-filter:blur(115.78px)] rounded-[35.88px] [background:linear-gradient(142.13deg,_rgba(253,_248,_255,_0.21),_rgba(253,_248,_255,_0))] box-border flex flex-col items-center justify-start pt-[37px] px-5 pb-[25px] gap-[23.8px] z-[3] text-base-3 border-[14.5px] border-solid border-gray-2100 ${isActive ? 'z-10! scale-110!' : ''}`}>
                                <div className="w-[812px] h-[424.3px] relative [backdrop-filter:blur(115.78px)] rounded-[35.88px] [background:linear-gradient(142.13deg,_rgba(253,_248,_255,_0.21),_rgba(253,_248,_255,_0))] box-border hidden max-w-full z-[0] border-[14.5px] border-solid border-gray-2100" />
                                <img
                                    className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[38.24px] max-w-full overflow-hidden max-h-full object-cover z-[1]"
                                    alt=""
                                    src="/rectangle-1@2x.png"
                                />
                                <div className="w-[512.4px] flex flex-col items-start justify-start gap-[9.1px] max-w-full">
                                    <div className="flex flex-row items-start justify-start py-0 px-[7px]">
                                        <img
                                            className="h-[29.1px] w-[39px] relative z-[2]"
                                            loading="lazy"
                                            alt=""
                                            src="/-2.svg"
                                        />
                                    </div>
                                    <i className="self-stretch relative tracking-[0.03em] text-gainsboro-100 leading-[29.06px] z-[2]">
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's
                                        standard dummy text ever since the 1500s, when an unknown
                                        printer took a galley of type and scrambled it to make a type
                                        specimen book.
                                    </i>
                                </div>
                                <div className="w-[514px] h-[123.6px] flex flex-row items-start justify-center py-0 pr-0 pl-0.5 box-border max-w-full text-mini-5 text-gainsboro-100">
                                    <div className="self-stretch w-[239px] flex flex-col items-start justify-start gap-[6.1px]">
                                        <div className="self-stretch flex-1 flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
                                            <div className="h-[68.1px] w-[64.2px] relative z-[2] flex items-center justify-center">
                                                <img
                                                    className="h-full w-full z-[2] object-contain absolute left-[0px] top-[3px] [transform:scale(1.477)]"
                                                    loading="lazy"
                                                    alt=""
                                                    src="/group-5-2.svg"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end justify-start">
                                            <div className="flex flex-row items-start justify-end py-0 pr-[72px] pl-[73px]">
                                                <div className="relative tracking-[0.05em] leading-[25px] uppercase font-medium inline-block min-w-[96px] z-[2]">
                                                    john smith
                                                </div>
                                            </div>
                                            <div className="relative text-sm-8 leading-[25px] font-light text-lightsteelblue z-[2] mt-[-0.6px]">
                                                Founder of Awesomeux Technology
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                    </SwiperSlide>

                    <SwiperSlide>
                        {({ isActive }) => (
                            <div className={`w-[812px] !m-[0] absolute bottom-[-37.2px]  [backdrop-filter:blur(115.78px)] rounded-[35.88px] [background:linear-gradient(142.13deg,_rgba(253,_248,_255,_0.21),_rgba(253,_248,_255,_0))] box-border flex flex-col items-center justify-start pt-[37px] px-5 pb-[25px] gap-[23.8px] z-[3] text-base-3 border-[14.5px] border-solid border-gray-2100 ${isActive ? 'z-10! scale-110!' : ''}`}>
                                <div className="w-[812px] h-[424.3px] relative [backdrop-filter:blur(115.78px)] rounded-[35.88px] [background:linear-gradient(142.13deg,_rgba(253,_248,_255,_0.21),_rgba(253,_248,_255,_0))] box-border hidden max-w-full z-[0] border-[14.5px] border-solid border-gray-2100" />
                                <img
                                    className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[38.24px] max-w-full overflow-hidden max-h-full object-cover z-[1]"
                                    alt=""
                                    src="/rectangle-1@2x.png"
                                />
                                <div className="w-[512.4px] flex flex-col items-start justify-start gap-[9.1px] max-w-full">
                                    <div className="flex flex-row items-start justify-start py-0 px-[7px]">
                                        <img
                                            className="h-[29.1px] w-[39px] relative z-[2]"
                                            loading="lazy"
                                            alt=""
                                            src="/-2.svg"
                                        />
                                    </div>
                                    <i className="self-stretch relative tracking-[0.03em] text-gainsboro-100 leading-[29.06px] z-[2]">
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's
                                        standard dummy text ever since the 1500s, when an unknown
                                        printer took a galley of type and scrambled it to make a type
                                        specimen book.
                                    </i>
                                </div>
                                <div className="w-[514px] h-[123.6px] flex flex-row items-start justify-center py-0 pr-0 pl-0.5 box-border max-w-full text-mini-5 text-gainsboro-100">
                                    <div className="self-stretch w-[239px] flex flex-col items-start justify-start gap-[6.1px]">
                                        <div className="self-stretch flex-1 flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
                                            <div className="h-[68.1px] w-[64.2px] relative z-[2] flex items-center justify-center">
                                                <img
                                                    className="h-full w-full z-[2] object-contain absolute left-[0px] top-[3px] [transform:scale(1.477)]"
                                                    loading="lazy"
                                                    alt=""
                                                    src="/group-5-2.svg"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end justify-start">
                                            <div className="flex flex-row items-start justify-end py-0 pr-[72px] pl-[73px]">
                                                <div className="relative tracking-[0.05em] leading-[25px] uppercase font-medium inline-block min-w-[96px] z-[2]">
                                                    john smith
                                                </div>
                                            </div>
                                            <div className="relative text-sm-8 leading-[25px] font-light text-lightsteelblue z-[2] mt-[-0.6px]">
                                                Founder of Awesomeux Technology
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                    </SwiperSlide>


                </Swiper>

                <div className="w-full slider-main-container h-14 top-10  my-5 px-5  max-w-full">
                    <div className="nav-btn custom-prev-button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="main-grid-item-icon" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                            <line x1="19" x2="5" y1="12" y2="12" />
                            <polyline points="12 19 5 12 12 5" />
                        </svg>
                    </div>

                    <div className="nav-btn custom-next-button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="main-grid-item-icon" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                            <line x1="5" x2="19" y1="12" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Carousel;