import PropTypes from "prop-types";

const Testimonials = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[134px] box-border gap-[92.9px] max-w-full text-center text-smi-4 text-text-color-secondary font-prompt mq750:gap-[46px] mq750:pb-[87px] mq750:box-border mq450:gap-[23px] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap mq1050:justify-center">
        <div className="w-[416.2px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border max-w-full">
          <div className="self-stretch h-[345px] relative">
            <div className="absolute h-full top-[0px] bottom-[0px] left-[-244px] [backdrop-filter:blur(94.14px)] rounded-[29.17px] [background:linear-gradient(142.13deg,_rgba(253,_248,_255,_0.21),_rgba(253,_248,_255,_0))] box-border w-[660.2px] border-[11.8px] border-solid border-gray-2100" />
            <div className="absolute top-[0px] left-[-244px] rounded-[31.09px] w-[660.2px] flex flex-col items-center justify-start pt-[73.8px] px-5 pb-[33px] box-border gap-[79.3px] bg-cover bg-no-repeat bg-[top] z-[1]">
              <img
                className="w-[660.2px] h-[345px] relative rounded-[31.09px] object-cover hidden max-w-full z-[0]"
                alt=""
                src="/rectangle@2x.png"
              />
              <i className="w-[416.6px] relative tracking-[0.03em] leading-[23.63px] inline-block max-w-full z-[2]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </i>
              <div className="w-[52.2px] h-[55.3px] absolute !m-[0] bottom-[77.9px] left-[calc(50%_-_26.1px)] z-[2] flex items-center justify-center">
                <img
                  className="w-full h-full z-[2] object-contain absolute left-[0px] top-[2px] [transform:scale(1.477)]"
                  loading="lazy"
                  alt=""
                  src="/group-51.svg"
                />
              </div>
              <div className="w-[418.2px] flex flex-row items-start justify-center py-0 pr-0.5 pl-0 box-border max-w-full text-xs-8 text-gainsboro-100">
                <div className="flex flex-col items-end justify-start">
                  <div className="flex flex-row items-start justify-end py-0 pr-[58px] pl-[59px]">
                    <div className="relative tracking-[0.05em] leading-[20px] uppercase font-medium inline-block min-w-[76px] z-[2]">
                      john smith
                    </div>
                  </div>
                  <div className="relative text-xs-2 leading-[20px] font-light text-lightsteelblue z-[3] mt-[-0.1px]">
                    Founder of Awesomeux Technology
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[351.1px] w-[428px] relative max-w-full text-smi-7">
          <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] [backdrop-filter:blur(95.8px)] rounded-[29.69px] [background:linear-gradient(142.13deg,_rgba(253,_248,_255,_0.21),_rgba(253,_248,_255,_0))] box-border w-[671.9px] border-[12px] border-solid border-gray-2100" />
          <div className="absolute top-[0px] left-[0px] rounded-[31.64px] w-[671.9px] flex flex-col items-center justify-start pt-[43.4px] px-5 pb-[32.9px] box-border gap-[80.8px] bg-cover bg-no-repeat bg-[top] z-[1]">
            <img
              className="w-[671.9px] h-[351.1px] relative rounded-[31.64px] object-cover hidden max-w-full z-[0]"
              alt=""
              src="/rectangle@2x.png"
            />
            <div className="w-[53.2px] h-[56.3px] absolute !m-[0] right-[309.3px] bottom-[79.2px] z-[2] flex items-center justify-center">
              <img
                className="w-full h-full z-[2] object-contain absolute left-[0px] top-[2px] [transform:scale(1.476)]"
                loading="lazy"
                alt=""
                src="/group-5-1.svg"
              />
            </div>
            <div className="w-[424px] flex flex-col items-start justify-start gap-[7.7px] max-w-full">
              <div className="flex flex-row items-start justify-start py-0 px-1.5">
                <img
                  className="h-6 w-[32.3px] relative z-[2]"
                  loading="lazy"
                  alt=""
                  src="/-1.svg"
                />
              </div>
              <i className="self-stretch relative tracking-[0.03em] leading-[24.05px] z-[2]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </i>
            </div>
            <div className="w-[425.9px] flex flex-row items-start justify-center py-0 pr-[3px] pl-0 box-border max-w-full text-xs text-gainsboro-100">
              <div className="flex flex-col items-end justify-start">
                <div className="flex flex-row items-start justify-end py-0 pr-[58px] pl-[60px]">
                  <div className="relative tracking-[0.05em] leading-[21px] uppercase font-medium inline-block min-w-[78px] z-[2]">
                    john smith
                  </div>
                </div>
                <div className="relative text-xs-4 leading-[21px] font-light text-lightsteelblue z-[3] mt-[-0.7px]">
                  Founder of Awesomeux Technology
                </div>
              </div>
            </div>
            <div className="w-[812px] !m-[0] absolute bottom-[-37.2px] left-[-688px] [backdrop-filter:blur(115.78px)] rounded-[35.88px] [background:linear-gradient(142.13deg,_rgba(253,_248,_255,_0.21),_rgba(253,_248,_255,_0))] box-border flex flex-col items-center justify-start pt-[37px] px-5 pb-[25px] gap-[23.8px] z-[3] text-base-3 border-[14.5px] border-solid border-gray-2100">
              <div className="w-[812px] h-[424.3px] relative [backdrop-filter:blur(115.78px)] rounded-[35.88px] [background:linear-gradient(142.13deg,_rgba(253,_248,_255,_0.21),_rgba(253,_248,_255,_0))] box-border hidden max-w-full z-[0] border-[14.5px] border-solid border-gray-2100" />
              <img
                className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[38.24px] max-w-full overflow-hidden max-h-full object-cover z-[1]"
                alt=""
                src="/rectangle@2x.png"
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
                <i className="self-stretch relative tracking-[0.03em] leading-[29.06px] z-[2]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </i>
              </div>
              <div className="w-[514px] h-[123.7px] flex flex-row items-start justify-center py-0 pr-0 pl-0.5 box-border max-w-full text-mini-5 text-gainsboro-100">
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
                      <div className="relative tracking-[0.05em] leading-[25px] uppercase font-medium inline-block min-w-[94px] z-[2]">
                        john smith
                      </div>
                    </div>
                    <div className="relative text-sm-8 leading-[25px] font-light text-lightsteelblue z-[2] mt-[-0.5px]">
                      Founder of Awesomeux Technology
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full">
        <img
          className="w-[516.3px] relative max-h-full max-w-full"
          loading="lazy"
          alt=""
          src="/group-11269.svg"
        />
      </div>
    </section>
  );
};

Testimonials.propTypes = {
  className: PropTypes.string,
};

export default Testimonials;
