import FrameComponent from "../components/frame-component";
import TripContent from "../components/trip-content";
import GroupComponent3 from "../components/group-component3";
import Testimonials from "../components/testimonials";
import FrameComponent5 from "../components/frame-component5";

const TripSchedulePage = () => {
  return (
    <div className="w-full relative bg-gray-200 overflow-hidden flex flex-col items-end justify-start pt-8 px-0 pb-0 box-border gap-[23px] leading-[normal] tracking-[normal]">
      <img
        className="w-full h-[422px] absolute !m-[0] top-[154px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/banner@2x.png"
      />
      <FrameComponent />
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[118px] pr-5 pl-[21px] box-border max-w-full text-center text-lg text-khaki-100 font-matter">
        <div className="w-[1123px] flex flex-col items-end justify-start gap-[32px] max-w-full mq750:gap-[16px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[22px] box-border max-w-full">
            <div className="w-[327px] flex flex-row flex-wrap items-end justify-start max-w-full [row-gap:20px]">
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
          <h1 className="m-0 self-stretch relative text-45xl leading-[120%] font-bold font-inria-serif text-text-color-secondary z-[1] mq1050:text-32xl mq1050:leading-[61px] mq450:text-19xl mq450:leading-[46px]">
            Ladakh Adventure: From Valleys to Lakes - A 13D/12N Journey
          </h1>
        </div>
      </section>
      <TripContent />
      <GroupComponent3 />
      <section className="w-[1420px] flex flex-row items-start justify-center pt-0 px-5 pb-[110px] box-border max-w-full text-left text-lg text-khaki-100 font-matter">
        <div className="w-[516px] flex flex-col items-end justify-start gap-[10px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px]">
            <div className="w-[283px] flex flex-row items-end justify-start gap-[9px]">
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[9px]">
                <div className="w-[42px] h-px relative box-border border-t-[1px] border-solid border-khaki-100" />
              </div>
              <div className="flex-1 relative tracking-[0.17em] leading-[22px]">
                Customer experience
              </div>
            </div>
          </div>
          <h2 className="m-0 self-stretch relative text-21xl leading-[120%] font-normal font-inria-serif text-text-color-secondary text-center mq1050:text-13xl mq1050:leading-[38px] mq450:text-5xl mq450:leading-[29px]">
            Read our Clients Experience
          </h2>
        </div>
      </section>
      <Testimonials />
      <FrameComponent5 />
    </div>
  );
};

export default TripSchedulePage;
