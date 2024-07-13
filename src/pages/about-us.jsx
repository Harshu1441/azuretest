
import PropTypes from "prop-types";
import FrameComponent from "../components/frame-component";
import ContentArea from "../components/content-area";
import CleaningOfDeposits from "../components/cleaning-of-deposits";
import Section3FaqQuestion from "../components/section3-faq-question";
import GroupComponent from "../components/group-component";

const AboutUs = ({ className = "" }) => {
  return (
    <div
      className={`w-full text-white bg-gray-200 max-w-full overflow-hidden flex flex-col items-end justify-start pt-8 px-0 box-border relative gap-[68px] leading-[normal] tracking-[normal] mq800:gap-[34px] mq450:h-auto mq450:gap-[17px] ${className}`}
    >
      <img
        className="w-full h-[422px] absolute !m-[0] top-[154px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/banner@2x.png"
      />
      <FrameComponent />
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[195px] pr-5 pl-[21px] box-border max-w-full shrink-0 text-center text-45xl text-black-white-gray10 font-inria-serif">
        <div className="w-[1123px] flex flex-col items-end justify-start min-h-[153px] max-w-full">
          <h1 className="m-0 self-stretch h-[153px] relative text-inherit leading-[120%] font-bold font-inherit flex items-center justify-center shrink-0 z-[1] mq800:text-32xl mq800:leading-[61px] mq450:text-19xl mq450:leading-[46px]">
            About Us
          </h1>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[22px] box-border max-w-full mt-[-153px] text-lg text-khaki-100 font-matter">
            <div className="w-[327px] flex flex-row flex-wrap items-end justify-center max-w-full [row-gap:20px]">
              <div className="w-[74px] flex flex-col items-start justify-end pt-0 px-0 pb-[9px] box-border">
                <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-khaki-100" />
              </div>
              <div className="flex-1 relative tracking-[0.17em] leading-[22px] inline-block min-w-[116px] z-[1]">
                Group Journey
              </div>
              <div className="w-[74px] flex flex-col items-start justify-end pt-0 px-0 pb-[9px] box-border">
                <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-khaki-100" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContentArea />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[72px] box-border max-w-full shrink-0 text-left text-lg text-black-white-gray10 font-caption-regular-12 mq450:pb-[47px] mq450:box-border">
        <div className="flex-1 rounded-lg overflow-hidden flex flex-row items-start justify-between p-16 box-border relative bg-[url('/public/section-2--product-features@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full gap-[20px] mq800:pl-8 mq800:pr-8 mq800:box-border mq450:pt-[42px] mq450:pb-[42px] mq450:box-border mq1350:flex-wrap">
          <div className="w-[535px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[535px] max-w-full mq800:min-w-full mq1350:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
              <div className="flex flex-row items-center justify-start py-0 pr-[276px] pl-0 gap-[12px] mq800:flex-wrap mq800:pr-[138px] mq800:box-border mq450:pr-5 mq450:box-border">
                <div className="shadow-[0px_0px_6.8px_rgba(170,_32,_94,_0.2)] rounded-lg bg-gold-300 flex flex-row items-center justify-center p-1.5">
                  <img
                    className="h-6 w-6 relative"
                    loading="lazy"
                    alt=""
                    src="/box.svg"
                  />
                </div>
                <div className="relative capitalize">
                  Carlio Product Features
                </div>
              </div>
              <h1 className="m-0 self-stretch relative text-17xl capitalize font-semibold font-inherit mq800:text-10xl mq450:text-3xl">
                The feature of Carlio engine oil that you will benefit from
              </h1>
              <button className="cursor-pointer py-3.5 px-[25px] bg-[transparent] rounded-lg flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-aliceblue hover:bg-lightgray-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-lightgray-200">
                <div className="relative text-white text-lg capitalize font-medium font-montserrat text-black-white-gray10 text-center">
                  Visit Shop Page
                </div>
              </button>
            </div>
          </div>
          <div className="w-[656px] flex flex-row items-start justify-start gap-[28px] min-w-[656px] max-w-full text-center text-5xl mq800:flex-wrap mq1125:min-w-full mq1350:flex-1">
            <div className="flex-1 rounded-3xs box-border overflow-hidden flex flex-col items-start justify-start py-[46px] px-[25px] gap-[16px] min-w-[150px] border-[1px] border-solid border-black-white-gray10">
              <div className="h-[70px] flex flex-row items-start justify-start py-0 px-[39px] box-border">
                <div className="h-[70px] w-[70px] relative flex items-center justify-center">
                  <img
                    className="h-full w-full object-contain absolute left-[-1px] top-[0px] [transform:scale(1.436)]"
                    loading="lazy"
                    alt=""
                    src="/icon.svg"
                  />
                </div>
              </div>
              <div className="relative leading-[151.52%] font-medium [text-shadow:0px_0px_20px_rgba(255,_255,_255,_0.46)] mq450:text-lgi mq450:leading-[29px]">
                <p className="m-0">High Quality</p>
                <p className="m-0">Product</p>
              </div>
            </div>
            <CleaningOfDeposits
              icon="/icon-1.svg"
              label="Cleaning of deposits"
            />
            <CleaningOfDeposits icon="/icon-2.svg" label="Engine protection" />
          </div>
          <div className="h-[1025px] w-[856px] absolute !m-[0] bottom-[-399px] left-[-429px] [filter:blur(400px)] rounded-[50%] [background:linear-gradient(190.18deg,_rgba(255,_208,_43,_0.11),_rgba(255,_208,_43,_0.22)_22%,_rgba(255,_208,_43,_0.44))] z-[1]" />
        </div>
      </section>
      <Section3FaqQuestion />
      <GroupComponent
        facebook="/facebook1.svg"
        whatsapp="/whatsapp1.svg"
        propAlignSelf="stretch"
        propMarginRight="unset"
        propWidth="unset"
      />
    </div>
  );
};

AboutUs.propTypes = {
  className: PropTypes.string,
};

export default AboutUs;
