import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const GroupComponent4 = ({
  className = "",
  imagePlaceholder,
  rectangle,
  mdilocation,
  solarcalendarLinear,
}) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/trip-schedule-page')
  }
  return (
    <div
      className={`w-[269px] rounded-[11.96px] bg-gray-1700 flex flex-col items-start justify-start text-center text-xs text-black-white-gray10 font-montserrat ${className}`}
    >
      <div className="self-stretch h-[358.7px] relative rounded-[11.96px] bg-gray-1700 hidden z-[1]" />
      <img
        className="self-stretch h-[153.4px] relative rounded-t-[11.96px] rounded-b-none max-w-full overflow-hidden shrink-0 object-cover z-[2]"
        loading="lazy"
        alt=""
        src={imagePlaceholder}
      />
      <div className="self-stretch rounded-[38.24px] flex flex-col items-start justify-start pt-[35.4px] px-0 pb-[14.3px] gap-[13.1px] bg-[url('/public/rectangle@2x.png')] bg-cover bg-no-repeat bg-[top] shrink-0 z-[1] mt-[-25.4px]">
        <img
          className="self-stretch h-[231px] relative rounded-[38.24px] max-w-full overflow-hidden shrink-0 object-cover hidden"
          alt=""
          src={rectangle}
        />
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-3.5 pl-[13px] text-4xs text-gray-200">
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
            <div className="w-[102.6px] rounded-[1.99px] bg-gold-100 flex flex-row items-start justify-start pt-1 px-[3px] pb-[3.9px] box-border shrink-0 whitespace-nowrap z-[2]">
              <div className="h-[18.9px] w-[102.6px] relative rounded-[1.99px] bg-gold-100 hidden" />
              <div className="flex-1 relative leading-[140%] font-semibold shrink-0 z-[1]">
                Group Adventure
              </div>
            </div>
            <b className="self-stretch relative text-base-9 leading-[140%] font-inria-serif text-black-white-gray10 text-left shrink-0 z-[2]">
              Ladakh Adventure: From Valleys to Lakes - A 13D/12N Journey
            </b>
          </div>
        </div>
        <div className="w-[87.8px] flex flex-row items-start justify-start py-0 px-[15px] box-border text-left">
          <div className="flex-1 flex flex-row items-end justify-start gap-[4px]">
            <img
              className="h-[15.9px] w-[13px] relative overflow-hidden shrink-0 z-[2]"
              loading="lazy"
              alt=""
              src={mdilocation}
            />
            <div className="flex-1 relative leading-[16.9px] font-medium z-[2]">
              India
            </div>
          </div>
        </div>
        <div className="w-[98.7px] flex flex-row items-start justify-start py-0 px-[15px] box-border text-left">
          <div className="flex-1 flex flex-row items-end justify-start gap-[4px]">
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[1.9px]">
              <img
                className="w-[13px] h-[13px] relative overflow-hidden shrink-0 z-[2]"
                alt=""
                src={solarcalendarLinear}
              />
            </div>
            <div className="flex-1 relative leading-[16.9px] font-medium shrink-0 z-[2]">
              13 Days
            </div>
          </div>
        </div>
        <div className="self-stretch h-[0.5px] relative box-border z-[2] border-t-[0.5px] border-solid border-gray-1000" />
        <div onClick={()=>handleClick()} className="self-stretch cursor-pointer flex flex-row items-start justify-start py-0 pr-[50px] pl-[49px] text-sm-9 mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div  className="flex-1 relative leading-[22.9px] font-semibold z-[2]">
            View Trip
          </div>
        </div>
      </div>
    </div>
  );
};

GroupComponent4.propTypes = {
  className: PropTypes.string,
  imagePlaceholder: PropTypes.string,
  rectangle: PropTypes.string,
  mdilocation: PropTypes.string,
  solarcalendarLinear: PropTypes.string,
};

export default GroupComponent4;
