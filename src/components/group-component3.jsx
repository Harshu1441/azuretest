import PropTypes from "prop-types";

const GroupComponent3 = ({ className = "" }) => {
  return (
    <section
      className={`mr-[-3px] mb-[130px] self-stretch bg-gray-300 flex flex-col items-center justify-start pt-[86px] px-5 pb-[95px] box-border gap-[37px] max-w-full text-center text-21xl text-text-color-secondary font-inria-serif mq750:gap-[18px] mq450:pt-14 mq450:pb-[62px] mq450:box-border ${className}`}
    >
      <div className="w-[1445px] h-[410px] relative bg-gray-300 hidden max-w-full" />
      <div className="w-[987px] flex flex-col items-end justify-start gap-[29px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full">
          <h2 className="m-0 w-[422px] relative text-inherit font-bold font-inherit flex items-center justify-center shrink-0 max-w-full z-[1] mq1050:text-13xl mq450:text-5xl">
            Book your trip today
          </h2>
        </div>
        <div className="self-stretch relative text-xl leading-[150%] font-matter text-gray-2200 z-[1] mq450:text-base mq450:leading-[24px]">
          Our Area Specialists know every detail about our tours. They will be
          happy to answer any questions and help you choose the journey that’s
          right for you. Contact us to learn more or book your trip today!
        </div>
      </div>
      <div className="w-[987px] flex flex-row items-start justify-center max-w-full">
        <button className="cursor-pointer [border:none] py-4 pr-[17px] pl-[18px] bg-gold-100 w-[167px] rounded-lg flex flex-row items-start justify-start box-border whitespace-nowrap z-[1] hover:bg-goldenrod-100">
          <div className="h-[55px] w-[167px] relative rounded-lg bg-gold-100 hidden" />
          <div className="flex-1 relative text-xl leading-[23px] font-matter text-black text-center z-[1]">
            Contact Us
          </div>
        </button>
      </div>
    </section>
  );
};

GroupComponent3.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent3;
