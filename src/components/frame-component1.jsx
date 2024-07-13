import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section
      className={`w-[1388px] flex flex-row items-start justify-center pt-0 px-5 pb-[37px] box-border max-w-full text-center text-lg text-khaki-100 font-matter ${className}`}
    >
      <div className="w-[1134px] flex flex-col items-end justify-start gap-[91px] max-w-full lg:gap-[45px] mq750:gap-[23px]">
        <div className="w-[1046px] flex flex-row items-start justify-end py-0 px-[13px] box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[22px] max-w-full">
            <div className="w-[985px] flex flex-row items-start justify-center pt-0 px-5 pb-6 box-border max-w-full">
              <div className="w-[617px] flex flex-col items-start justify-start gap-[11px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                  <div className="w-[355px] flex flex-row flex-wrap items-end justify-start gap-[7px] max-w-full">
                    <div className="w-[74px] flex flex-col items-start justify-end pt-0 px-0 pb-[9px] box-border">
                      <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-khaki-100" />
                    </div>
                    <div className="flex-1 relative tracking-[0.17em] leading-[22px] inline-block min-w-[125px] z-[1]">
                      Your Travel Guide
                    </div>
                    <div className="w-[74px] flex flex-col items-start justify-end pt-0 px-0 pb-[9px] box-border">
                      <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-khaki-100" />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[42px] max-w-full text-53xl text-text-color-secondary font-inria-serif mq750:gap-[21px]">
                  <h1 className="m-0 self-stretch relative text-inherit leading-[104%] font-bold font-inherit z-[1] mq450:text-24xl mq450:leading-[45px] mq1050:text-39xl mq1050:leading-[60px]">
                    Travel and Inspire your Life
                  </h1>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 px-[3px] box-border max-w-full text-13xl text-gray-2000 font-matter">
                    <h2 className="m-0 flex-1 relative text-inherit leading-[126%] font-normal font-inherit inline-block max-w-full z-[1] mq450:text-lgi mq450:leading-[24px] mq1050:text-7xl mq1050:leading-[32px]">
                      Experience beyond your boundaries and get your life full
                      of adventures
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[984px] flex flex-row items-start justify-start pt-0 px-[29px] pb-6 box-border max-w-full text-13xl text-text-color-secondary font-inria-serif">
              <div className="flex-1 [backdrop-filter:blur(50px)] rounded-[14.08px] bg-gray-1800 box-border flex flex-col items-center justify-start pt-4 pb-[18px] pr-[21px] pl-5 relative gap-[19.5px] max-w-full z-[1] border-[1px] border-solid border-gray-1700">
                <div className="w-[926px] h-[229px] relative [backdrop-filter:blur(50px)] rounded-[14.08px] bg-gray-1800 box-border hidden max-w-full z-[0] border-[1px] border-solid border-gray-1700" />
                <img
                  className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-2xl max-w-full overflow-hidden max-h-full object-cover z-[1]"
                  alt=""
                  src="/search-input-background@2x.png"
                />
                <div className="w-[619px] flex flex-row items-start justify-center py-0 pr-0 pl-px box-border max-w-full">
                  <h2 className="m-0 w-64 relative text-inherit font-bold font-inherit inline-block shrink-0 z-[2] mq450:text-lgi mq1050:text-7xl">
                    Find Your Trip
                  </h2>
                </div>
                <div className="w-[619px] flex flex-col items-start justify-start gap-[13px] max-w-full text-left text-base font-montserrat">
                  <div className="w-[181px] flex flex-row items-start justify-start py-0 px-[5px] box-border">
                    <div className="flex-1 relative font-medium z-[2]">
                      Enter Destination
                    </div>
                  </div>
                  <div className="self-stretch rounded-[3.52px] bg-gray-1600 box-border flex flex-row items-end justify-start pt-2.5 px-3 pb-3 gap-[14.7px] max-w-full z-[2] border-[0.4px] border-solid border-gray-1500">
                    <div className="h-[39px] w-[619px] relative rounded-[3.52px] bg-gray-1600 box-border hidden max-w-full border-[0.4px] border-solid border-gray-1500" />
                    <img
                      className="h-[15px] w-[11.3px] relative overflow-hidden shrink-0 min-h-[15px] z-[3]"
                      alt=""
                      src="/fa6solidlocationpin.svg"
                    />
                    <input
                      className="w-[78px] [border:none] [outline:none] font-medium font-montserrat text-smi-3 bg-[transparent] h-3.5 relative text-gray-1400 text-left flex items-center p-0 z-[3]"
                      placeholder="Anywhere"
                      type="text"
                    />
                  </div>
                </div>
                <div className="w-[619px] flex flex-row items-start justify-center py-0 pr-0 pl-px box-border max-w-full">
                  <button className="cursor-pointer [border:none] pt-[12.3px] px-[18px] pb-[13.2px] bg-gold-100 w-[137.3px] rounded-[7.92px] flex flex-row items-start justify-start box-border gap-[13.9px] z-[2]">
                    <div className="h-[40.5px] w-[137.3px] relative rounded-[7.92px] bg-gold-100 hidden" />
                    <div className="flex flex-col items-start justify-start pt-[1.8px] px-0 pb-0">
                      <img
                        className="w-[12.3px] h-[12.3px] relative z-[1]"
                        alt=""
                        src="/search-button-icon.svg"
                      />
                    </div>
                    <div className="relative text-smi-3 font-medium font-montserrat text-black text-left inline-block min-w-[69px] z-[1]">
                      Show Trips
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[983px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-xl text-gray-2200">
              <div className="w-[121px] flex flex-row items-start justify-start gap-[12px]">
                <div className="h-[33px] flex-1 relative leading-[126%] flex items-center justify-center z-[1] mq450:text-base mq450:leading-[20px]">
                  Read More
                </div>
                <div className="w-0 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border">
                  <img
                    className="w-0 h-3.5 relative object-contain z-[1]"
                    loading="lazy"
                    alt=""
                    src="/arrow-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-end justify-center gap-[126px] max-w-full text-left mq450:gap-[16px] mq750:gap-[31px] mq1050:flex-wrap mq1050:gap-[63px]">
              <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-14 box-border min-w-[344px] min-h-[339px] max-w-full mq450:min-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full">
                  <div className="w-[350px] flex flex-row items-start justify-start relative max-w-full">
                    <div className="h-px w-[42px] absolute !m-[0] bottom-[9px] left-[0px] box-border border-t-[1px] border-solid border-khaki-100" />
                    <div className="flex-1 flex flex-row items-start justify-end max-w-full">
                      <div className="relative tracking-[0.17em] leading-[104%]">
                        TRAVEL WITH THE EXPERTS
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-21xl text-text-color-secondary font-inria-serif">
                    <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-normal font-inherit z-[2] mq450:text-5xl mq450:leading-[29px] mq1050:text-13xl mq1050:leading-[38px]">
                      Unleash the Explorer Within and Discover Your Inner
                      Compass
                    </h1>
                    <div className="self-stretch h-[92px] relative text-lg leading-[130%] font-light font-matter text-gray-2000 text-justify inline-block shrink-0">
                      Nomadic Therapies isn't just about travel; it's about a
                      transformative journey. We curate immersive experiences
                      that ignite your sense of adventure while fostering
                      personal growth and well-being.
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="w-[364px] relative rounded-lg max-h-full object-cover max-w-full z-[1] mq1050:flex-1"
                loading="lazy"
                alt=""
                src="/rectangle-209@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-[20px] text-left mq1050:flex-wrap">
          <img
            className="w-[364px] relative rounded-lg max-h-full object-cover max-w-full mq1050:flex-1"
            loading="lazy"
            alt=""
            src="/rectangle-210@2x.png"
          />
          <div className="w-[526px] flex flex-col items-start justify-start pt-0 px-0 pb-[82px] box-border min-w-[526px] min-h-[339px] max-w-full mq750:min-w-full mq1050:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full">
              <div className="flex flex-row items-start justify-start py-0 px-[50px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="h-[22px] relative tracking-[0.17em] leading-[104%] flex items-center">
                  TRAVEL WITH THE EXPERTS
                </div>
              </div>
              <div className="w-[471px] flex flex-row items-start justify-start relative max-w-full text-center text-109xl text-gray-1900">
                <div className="h-[135px] w-40 absolute !m-[0] top-[-78px] left-[-116px]">
                  <div className="absolute top-[58px] left-[116px] box-border w-[42px] h-px border-t-[1px] border-solid border-khaki-100" />
                  <div className="absolute top-[0px] left-[0px] leading-[135px] font-semibold flex items-center justify-center w-full h-full z-[1] mq450:text-13xl mq450:leading-[53px] mq1050:text-32xl mq1050:leading-[80px]">
                    02
                  </div>
                </div>
                <h1 className="m-0 flex-1 relative text-21xl leading-[120%] font-normal font-inria-serif text-text-color-secondary text-left inline-block max-w-full z-[2] mq450:text-5xl mq450:leading-[29px] mq1050:text-13xl mq1050:leading-[38px]">
                  Unforgettable Itineraries with a Wellness Twist
                </h1>
              </div>
              <div className="self-stretch h-[115px] relative leading-[130%] font-light text-gray-2000 text-justify inline-block shrink-0">
                We craft experiences that seamlessly blend cultural exploration
                with activities designed to rejuvenate your mind, body, and
                spirit. Imagine practicing yoga beneath the Northern Lights or
                meditating in the heart of the Amazon rainforest.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
