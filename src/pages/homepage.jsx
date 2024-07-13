import FrameComponent from "../components/frame-component";
import FrameComponent1 from "../components/frame-component1";
import GroupComponent1 from "../components/group-component1";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent3 from "../components/frame-component3";
import GroupComponent from "../components/group-component";
import Carousel from "../components/carousal";

const Homepage = () => {
  return (
    <div className="w-full relative bg-gray-200 overflow-hidden flex flex-col items-start justify-start pt-8 px-0 pb-0 box-border gap-[103px] leading-[normal] tracking-[normal] mq450:gap-[26px] mq750:gap-[51px]">
      <section className="w-full !m-[0] absolute top-[0px] left-[0px] flex flex-row items-start justify-start max-w-full text-center text-109xl text-gray-1900 font-matter">
        <img
          className="h-[1024px] flex-1 relative max-w-full overflow-hidden object-cover"
          alt=""
          src="/snowymountainousnaturelandscape-1@2x.png"
        />
        <div className="w-[142px] absolute !m-[0] bottom-[-98px] left-[121px] leading-[135px] font-semibold flex items-center justify-center z-[1] mq450:text-13xl mq450:leading-[53px] mq1050:text-32xl mq1050:leading-[80px]">
          01
        </div>
      </section>
      <FrameComponent />
      <FrameComponent1 />
      <GroupComponent1 />
      <FrameComponent2 />
      <FrameComponent3 />
      <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[30px] box-border max-w-full text-left text-lg text-khaki-100 font-matter">
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
          <h1 className="m-0 self-stretch relative text-21xl leading-[120%] font-normal font-inria-serif text-text-color-secondary text-center mq450:text-5xl mq450:leading-[29px] mq1050:text-13xl mq1050:leading-[38px]">
            Read our Clients Experience
          </h1>
        </div>
      </section>
      {/* <FrameComponent4 /> */}
      <Carousel />
      <GroupComponent facebook="/facebook.svg" whatsapp="/whatsapp.svg" />
    </div>
  );
};

export default Homepage;
