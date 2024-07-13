import PropTypes from "prop-types";

const Navigation1 = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[145px] pr-5 pl-[25px] box-border max-w-full text-left text-base text-text-color-secondary font-inter ${className}`}
    >
      <div className="w-[1281px] flex flex-row items-start justify-between gap-[20px] max-w-full mq800:w-[888px]">
        <div className="w-[177px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border text-5xl font-mclaren">
          <div className="relative leading-[29px] inline-block min-w-[111px] whitespace-nowrap">
            Nomadic
          </div>
        </div>
        <div className="w-[393px] flex flex-row items-start justify-start gap-[25px] max-w-full text-center mq800:hidden">
          <div className="h-[33px] flex-1 relative">
            <div className="absolute top-[0px] left-[0px] leading-[120%] flex items-center justify-center w-[111px] h-[33px]">
              Destination
            </div>
            <img
              className="absolute top-[17px] left-[109px] w-0 h-px object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/arrow-10.svg"
            />
          </div>
          <div className="flex-1 flex flex-row items-end justify-start gap-[5px]">
            <div className="flex-1 relative leading-[20px] whitespace-nowrap">
              Browse Trips
            </div>
            <div className="w-0 flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border">
              <img
                className="w-0 h-px relative object-contain"
                loading="lazy"
                alt=""
                src="/arrow-10.svg"
              />
            </div>
          </div>
          <div className="flex-1 relative leading-[20px] whitespace-nowrap">
            About Us
          </div>
        </div>
        <div className="w-[111px] relative leading-[20px] text-right flex items-center shrink-0">
          Account
        </div>
      </div>
    </header>
  );
};

Navigation1.propTypes = {
  className: PropTypes.string,
};

export default Navigation1;
