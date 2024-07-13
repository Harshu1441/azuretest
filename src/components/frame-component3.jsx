import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[37px] box-border max-w-full text-left text-21xl text-text-color-secondary font-inria-serif ${className}`}
    >
      <div className="flex-1 bg-gray-300 flex flex-row items-end justify-start pt-0.5 pb-0 pr-[5px] pl-[82px] box-border gap-[73px] max-w-full lg:flex-wrap mq450:gap-[18px] mq750:gap-[36px] mq750:pl-[41px] mq750:box-border">
        <div className="self-stretch w-[1445px] relative bg-gray-300 hidden max-w-full" />
        <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[51px] box-border min-w-[425px] min-h-[346px] max-w-full mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[42px] max-w-full mq750:gap-[21px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full">
              <h1 className="m-0 w-[350px] relative text-inherit font-bold font-inherit flex items-center max-w-full z-[1] mq450:text-5xl mq1050:text-13xl">
                Talk to an expert
              </h1>
              <div className="self-stretch h-[119px] relative text-xl leading-[150%] font-matter text-gray-2200 flex items-center shrink-0 z-[1] mq450:text-base mq450:leading-[24px]">
                Our Area Specialists know every detail about our adventures
                around the world. They will be happy to answer any questions and
                help you choose the journey that’s right for you. Contact us to
                learn more or book your trip today!
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-4 pr-[17px] pl-[18px] bg-gold-100 w-[167px] rounded-lg flex flex-row items-start justify-start box-border whitespace-nowrap z-[1] hover:bg-goldenrod-100">
              <div className="h-[55px] w-[167px] relative rounded-lg bg-gold-100 hidden" />
              <div className="flex-1 relative text-xl leading-[23px] font-matter text-black text-center z-[2]">
                Contact Us
              </div>
            </button>
          </div>
        </div>
        <img
          className="w-[631px] relative max-h-full object-contain max-w-full z-[1] lg:flex-1"
          loading="lazy"
          alt=""
          src="/rectangle-1077@2x.png"
        />
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
