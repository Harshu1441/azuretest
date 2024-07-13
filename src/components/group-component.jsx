import { useMemo } from "react";
import PropTypes from "prop-types";

const GroupComponent = ({
  className = "",
  facebook,
  whatsapp,
  propAlignSelf,
  propMarginRight,
  propWidth,
}) => {
  const groupSectionStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      marginRight: propMarginRight,
      width: propWidth,
    };
  }, [propAlignSelf, propMarginRight, propWidth]);

  return (
    <section
      className={`self-stretch bg-gray-300 flex mt-16 flex-col items-start justify-start pt-[58.3px] pb-[37.6px] pr-[79px] pl-[134px] box-border gap-[22.3px] max-w-full text-left text-5xl text-text-color-secondary font-mclaren mq450:pl-5 mq450:pt-[38px] mq450:pb-6 mq450:box-border mq750:pl-[67px] mq750:pr-[39px] mq750:box-border ${className}`}
      style={groupSectionStyle}
    >
      <footer className="w-[1439.9px] h-[450.4px] relative bg-gray-300 hidden max-w-full" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[2.5px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[7px] box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-start gap-[48px] max-w-full lg:flex-wrap mq750:gap-[24px]">
            <div className="w-[498.4px] flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0 box-border min-w-[498.4px] max-w-full lg:flex-1 mq750:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[34px] max-w-full mq750:gap-[17px]">
                <div className="relative leading-[29px] inline-block min-w-[111px] z-[1] mq450:text-lgi mq450:leading-[23px]">
                  Nomadic
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full text-[16.9px] font-caption-semibold-12">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[25.9px] max-w-full">
                    <i className="self-stretch relative font-light z-[1]">
                      <p className="m-0">Jl. Lebak Bulus I Kav. 29 Cilandak</p>
                      <p className="m-0">
                        Jakarta Selatan, DKI Jakarta, Indonesia 12340
                      </p>
                    </i>
                    <div className="w-[168.7px] flex flex-row items-start justify-between gap-[20px]">
                      <img
                        className="h-[33.7px] w-[33.7px] relative min-h-[34px] z-[1]"
                        loading="lazy"
                        alt=""
                        src="/youtube.svg"
                      />
                      <img
                        className="h-[33.7px] w-[33.7px] relative min-h-[34px] z-[1]"
                        loading="lazy"
                        alt=""
                        src={facebook}
                      />
                      <img
                        className="h-[33.7px] w-[33.7px] relative min-h-[34px] z-[1]"
                        loading="lazy"
                        alt=""
                        src={whatsapp}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start gap-[73.6px] min-w-[437px] max-w-full text-2xl-1 font-matter mq450:gap-[18px] mq750:flex-wrap mq750:gap-[37px] mq750:min-w-full">
              <div className="flex-1 flex flex-row items-start justify-start gap-[47.1px] min-w-[241px] max-w-full mq450:flex-wrap mq450:gap-[24px]">
                <div className="w-[145.6px] flex flex-col items-start justify-start gap-[25.3px] min-w-[145.6px] mq450:flex-1">
                  <div className="relative font-semibold inline-block min-w-[95px] z-[1] mq450:text-mid">
                    Company
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[16.9px] text-[16.9px] text-gray-2200">
                    <div className="relative inline-block min-w-[47px] z-[1]">
                      Home
                    </div>
                    <div className="relative inline-block min-w-[95px] z-[1]">
                      Destinations
                    </div>
                    <div className="relative inline-block min-w-[71px] z-[1]">
                      About Us
                    </div>
                    <div className="relative inline-block min-w-[86px] z-[1]">
                      Contact Us
                    </div>
                    <div className="relative inline-block min-w-[95px] z-[1]">
                      Travel Agent
                    </div>
                    <div className="self-stretch relative z-[1]">{`Dummy Flights & Hotels`}</div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[25.3px] min-w-[116px]">
                  <div className="relative font-semibold inline-block min-w-[53px] z-[1] mq450:text-mid">
                    Legal
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[16.8px] text-[16.9px] text-gray-2200">
                    <a className="[text-decoration:none] relative text-[inherit] z-[1]">{`Terms & Conditions`}</a>
                    <div className="self-stretch relative z-[1]">
                      Cancellation and Refund Policy
                    </div>
                    <div className="relative inline-block min-w-[111px] z-[1]">
                      Cookies Policy
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[227.5px] flex flex-col items-start justify-start gap-[25.3px] min-w-[227.5px] mq750:flex-1">
                <div className="relative font-semibold inline-block min-w-[109px] z-[1] mq450:text-mid">
                  Contact Us
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[16.8px] text-[16.9px] text-gray-2200">
                  <div className="relative inline-block min-w-[109px] whitespace-nowrap z-[1]">
                    +91-7011481011
                  </div>
                  <div className="w-[167px] relative flex items-center whitespace-nowrap z-[1]">
                    info@visabanana.com
                  </div>
                  <div className="self-stretch h-[60px] relative leading-[20px] flex items-center min-h-[60px] z-[1]">
                    3rd Floor, Landmark Cyber Park Gurgaon Sector 67, 122102
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1207.1px] flex flex-col items-start justify-start gap-[11.3px] max-w-full text-lg font-caption-semibold-12">
          <div className="w-[173.4px] flex flex-row items-start justify-start py-0 px-1.5 box-border">
            <div className="flex-1 flex flex-row items-start justify-start py-0 pr-2 pl-0">
              <i className="flex-1 relative leading-[20.27px] font-light shrink-0 z-[1]">{`Made in India `}</i>
              <div className="flex flex-col items-start justify-start pt-[2.2px] px-0 pb-0 ml-[-35.2px] text-8xl">
                <h3 className="m-0 h-[19.5px] relative text-inherit flex italic font-light font-inherit items-end shrink-0 min-w-[27px] z-[2] mq450:text-3xl">
                  🇮🇳
                </h3>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[1.1px] relative box-border opacity-[0.6] z-[1] border-t-[1.1px] border-solid border-text-color-secondary" />
        </div>
      </div>
      <div className="w-[1170.1px] flex flex-row items-start justify-center max-w-full text-[16.9px] text-gray-2200 font-sora">
        <div className="relative z-[1]">Copyright © Nomadic Therapies</div>
      </div>
    </section>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  facebook: PropTypes.string,
  whatsapp: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propMarginRight: PropTypes.any,
  propWidth: PropTypes.any,
};

export default GroupComponent;
