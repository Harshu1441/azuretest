import PropTypes from "prop-types";

const ContentArea = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch text-gainsboro-100 flex flex-row items-start justify-start pt-0 px-0 pb-[72px] box-border max-w-full shrink-0 text-left text-lg text-black-white-gray10 font-caption-regular-12 mq800:pb-[47px] mq800:box-border ${className}`}
    >
      <div className="flex-1 rounded-lg flex flex-row items-start justify-center py-0 px-16 box-border gap-[12px] max-w-full mq800:pl-8 mq800:pr-8 mq800:box-border mq1350:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border min-w-[460px] max-w-full mq800:min-w-full">
          <div className="self-stretch h-[529px] relative overflow-hidden shrink-0">
            <img
              className="absolute bottom-[-0.5px] left-[18px] w-[672px] h-[529px] object-cover"
              loading="lazy"
              alt=""
              src="/photo@2x.png"
            />
          </div>
        </div>
        <div className="w-[592px] flex flex-col items-start justify-center gap-[32px] min-w-[592px] max-w-full mq800:gap-[16px] mq800:min-w-full mq1350:flex-1">
          <div className="self-stretch flex flex-col items-start justify-center max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full mq1350:self-stretch mq1350:w-auto">
              <div className="self-stretch flex flex-col items-start justify-center gap-[12px]">
                <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[463px] pl-0 gap-[12px] mq800:flex-wrap mq800:pr-[231px] mq800:box-border mq450:pr-5 mq450:box-border">
                  <div className="rounded-lg bg-gold-200 flex flex-row items-center justify-center p-1.5">
                    <img
                      className="h-6 w-6 relative"
                      loading="lazy"
                      alt=""
                      src="/component.svg"
                    />
                  </div>
                  <div className="relative capitalize inline-block min-w-[81px]">
                    About us
                  </div>
                </div>
                <h2 className="m-0 self-stretch relative text-16xl capitalize font-semibold font-inherit mq800:text-9xl mq450:text-2xl">
                  Our Company Overview
                </h2>
              </div>
              <div className="w-[579px] relative text-base leading-[151.52%] font-medium text-slategray inline-block max-w-full">
                Carlio brand is one of the most reliable motor oil
                manufacturers, which is engaged in the production of high
                quality products with a history of more than decades in the
                industry. In order to get more information about other aspects
                and products of the Carlio brand, you can use the following
                buttons:
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-center py-0 pr-[13px] pl-0 gap-[24px] text-base text-slategray">
            <div className="self-stretch h-[189px] relative leading-[151.52%] font-medium inline-block shrink-0">
              The meaning of production in Carlio is the creation, development,
              and the path to progress, and the starting point to achieve the
              goals that we all have the Petroforce brand, with over 20 years of
              experience in the oil and petrochemical industry, we officially
              started our activities in the field of design, engineering,
              construction of refinery equipment, and the production of various
              motor and industrial lubricants in the year 1390 (2011)
            </div>
            <button className="cursor-pointer [border:none] py-4 px-6 bg-gold-100 rounded flex flex-row items-center justify-center whitespace-nowrap hover:bg-goldenrod-100">
              <b className="relative text-lg capitalize inline-block font-montserrat text-gray-200 text-center min-w-[107px]">
                Learn More
              </b>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

ContentArea.propTypes = {
  className: PropTypes.string,
};

export default ContentArea;
