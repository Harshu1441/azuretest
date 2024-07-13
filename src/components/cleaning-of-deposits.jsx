import PropTypes from "prop-types";

const CleaningOfDeposits = ({ className = "", icon, label }) => {
  return (
    <div
      className={`flex-1 rounded-3xs box-border overflow-hidden flex flex-col items-start justify-start py-[46px] px-[23px] gap-[16px] min-w-[150px] text-center text-5xl text-black-white-gray10 font-caption-regular-12 border-[1px] border-solid border-black-white-gray10 ${className}`}
    >
      <div className="h-[70px] flex flex-row items-start justify-start py-0 px-[41px] box-border">
        <div className="h-[70px] w-[70px] relative flex items-center justify-center">
          <img
            className="h-full w-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.426)]"
            loading="lazy"
            alt=""
            src={icon}
          />
        </div>
      </div>
      <div className="self-stretch relative leading-[151.52%] font-medium [text-shadow:0px_0px_20px_rgba(255,_255,_255,_0.46)] mq450:text-lgi mq450:leading-[29px]">
        {label}
      </div>
    </div>
  );
};

CleaningOfDeposits.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string,
};

export default CleaningOfDeposits;
