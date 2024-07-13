import PropTypes from "prop-types";
import FAQ from "./faq";

const faqData = [
 
  {
    id:1,
    question: "Non consectetur a erat nam at lectus urna duis?",
    answer: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id:2,
    question: "Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?",
    answer: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id:3,
    question: "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?",
    answer: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id:4,
    question: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
    answer: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  
];
const Section3FaqQuestion = ({ className = "" }) => {

  return (
    <section
      className={`self-stretch rounded-3xs text-gainsboro-100 flex flex-row items-start justify-start py-0 px-16 box-border gap-[64px] max-w-full shrink-0 text-left text-lg text-black-white-gray10 font-caption-regular-12 mq800:gap-[16px] mq1350:flex-wrap mq1350:gap-[32px] mq1350:pl-8 mq1350:pr-8 mq1350:box-border ${className}`}
    >
      <div className="h-[600px] w-[602px] flex flex-row items-start justify-start relative min-w-[602px] max-w-full mq800:min-w-full mq1350:flex-1">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
          <img
            className="absolute top-[0px] left-[0px] rounded-3xs w-[569px] h-[561px] object-cover"
            alt=""
            src="/large-photo@2x.png"
          />
          <img
            className="absolute top-[276px] left-[331px] rounded-3xs w-[271px] h-[324px] object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/small-photo@2x.png"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[420px] max-w-full mq800:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-center gap-[12px]">
          <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[477px] pl-0 gap-[12px] mq800:flex-wrap mq800:pr-[238px] mq800:box-border mq450:pr-5 mq450:box-border">
            <div className="rounded-lg bg-khaki-200 flex flex-row items-center justify-center p-1.5">
              <img
                className="h-6 w-6 relative"
                loading="lazy"
                alt=""
                src="/messagequestion.svg"
              />
            </div>
            <div className="relative capitalize inline-block min-w-[121px]">
              FAQ Question
            </div>
          </div>
          <h1 className="m-0 self-stretch relative text-17xl capitalize font-semibold font-inherit mq800:text-10xl mq450:text-3xl">
            Frequently asked questions
          </h1>
        </div>
        <div className="self-stretch rounded-3xs bg-gray-100 flex flex-col items-start justify-start py-8 px-0 box-border gap-[31px] max-w-full text-darkslategray mq800:gap-[15px] mq800:pt-[21px] mq800:pb-[21px] mq800:box-border">
          <div className="self-stretch flex px-5 flex-col items-start justify-start gap-[16px] max-w-full text-black mq800:flex-wrap">
            {faqData.map((item, index) => (
               <FAQ key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Section3FaqQuestion.propTypes = {
  className: PropTypes.string,
};

export default Section3FaqQuestion;
