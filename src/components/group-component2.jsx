import PropTypes from "prop-types";

const GroupComponent2 = ({ className = "", day1LehToShamValley }) => {
  return (
    <div
      className={`self-stretch rounded-sm bg-text-color-secondary flex flex-row items-end justify-between pt-[29px] pb-7 pr-14 pl-[33px] box-border max-w-full gap-[20px] text-left text-5xl text-gray-200 font-montserrat mq1050:pr-7 mq1050:box-border ${className}`}
    >
      <div className="h-[105px] w-[930px] relative rounded-sm bg-text-color-secondary hidden max-w-full" />
      <div className="h-12 relative font-semibold flex items-center z-[1] mq450:text-lgi">
        {day1LehToShamValley}
      </div>
      <div className="h-6 w-0 flex flex-col items-start justify-end pt-0 px-0 pb-[23px] box-border">
        <img
          className="w-0 h-px relative object-contain z-[1]"
          alt=""
          src="/arrow-4.svg"
        />
      </div>
    </div>
  );
};

GroupComponent2.propTypes = {
  className: PropTypes.string,
  day1LehToShamValley: PropTypes.string,
};

export default GroupComponent2;
