import FrameComponent from "../components/frame-component";
import GroupComponent from "../components/group-component";

const BrowseTrip = () => {
  return (
    <div className="w-full h-[2048px] relative bg-gray-200 overflow-hidden flex flex-col items-end justify-start pt-8 pb-[943px] pr-[77px] pl-px box-border gap-[493px] leading-[normal] tracking-[normal] mq1225:gap-[246px] mq1225:pr-[38px] mq1225:box-border mq450:h-auto mq450:gap-[62px] mq750:gap-[123px]">
      <img
        className="w-full h-[422px] absolute !m-[0] top-[154px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/banner@2x.png"
      />
      <section className="w-[1301px] flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border gap-[195px] max-w-full shrink-0 text-center text-45xl text-text-color-secondary font-inria-serif mq1225:gap-[97px] mq450:gap-[24px] mq750:gap-[49px]">
        <header className="self-stretch flex flex-row items-start justify-between pt-0 px-0 pb-[18px] box-border max-w-full gap-[20px] text-left text-base text-text-color-secondary font-inter">
          <FrameComponent />
        </header>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[81px] pl-[77px] box-border max-w-full mq1225:pl-[38px] mq1225:pr-10 mq1225:box-border">
          <div className="flex-1 flex flex-col items-end justify-start min-h-[153px] max-w-full">
            <h1 className="m-0 self-stretch h-[153px] relative text-inherit leading-[120%] font-bold font-inherit flex items-center justify-center shrink-0 z-[1] mq450:text-19xl mq450:leading-[46px] mq750:text-32xl mq750:leading-[61px]">
              Find Your Adventure
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
        </div>
        <div className="w-[718px] flex flex-row flex-wrap items-start justify-start gap-[33px] max-w-full text-left text-xl text-gray-1600 font-montserrat mq750:gap-[16px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[40px] min-w-[235px] max-w-full mq450:gap-[20px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[22px] max-w-full">
              <div className="w-[324px] relative [text-decoration:underline] leading-[140%] flex items-center max-w-full mq450:text-base mq450:leading-[22px]">
                Clear Filters
              </div>
              <div className="self-stretch rounded bg-gray-500 box-border flex flex-row items-start justify-start pt-3 px-[11px] pb-[11px] gap-[15px] max-w-full border-[1px] border-solid border-text-color-secondary mq450:flex-wrap">
                <div className="h-[63px] w-[361px] relative rounded bg-gray-500 box-border hidden max-w-full border-[1px] border-solid border-text-color-secondary" />
                <img
                  className="h-9 w-9 relative overflow-hidden shrink-0 z-[1]"
                  alt=""
                  src="/materialsymbolssearch.svg"
                />
                <input
                  className="w-[231px] [border:none] [outline:none] bg-[transparent] h-8 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border font-montserrat text-lg text-gray-400"
                  placeholder="Search"
                  type="text"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[18px] max-w-full text-text-color-secondary">
              <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-1600" />
              <div className="w-[324px] relative leading-[140%] font-semibold flex items-center max-w-full mq450:text-base mq450:leading-[22px]">
                Trip Type
              </div>
              <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-1600" />
              <div className="w-[324px] relative leading-[140%] font-semibold flex items-center max-w-full mq450:text-base mq450:leading-[22px]">
                Destinations
              </div>
              <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-1600" />
              <div className="w-[324px] relative leading-[140%] font-semibold flex items-center max-w-full mq450:text-base mq450:leading-[22px]">
                Activity
              </div>
              <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-1600" />
              <div className="w-[324px] relative leading-[140%] font-semibold flex items-center max-w-full mq450:text-base mq450:leading-[22px]">
                Trip Length
              </div>
              <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-1600" />
              <div className="w-[324px] relative leading-[140%] font-semibold flex items-center max-w-full mq450:text-base mq450:leading-[22px]">
                By Month
              </div>
              <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-1600" />
            </div>
          </div>
          <div className="w-[324px] flex flex-col items-start justify-start gap-[13px] max-w-full">
            <div className="self-stretch relative leading-[140%] mq450:text-base mq450:leading-[22px]">
              Showing 24 Results
            </div>
            <div className="flex flex-row items-start justify-start gap-[13px] text-sm text-gray-200">
              <button className="cursor-pointer [border:none] pt-2.5 pb-[5px] pr-[11px] pl-[15px] bg-gray-600 rounded-81xl flex flex-row items-start justify-start gap-[5px] whitespace-nowrap hover:bg-gainsboro-300">
                <div className="h-[35px] w-[173px] relative rounded-81xl bg-gray-600 hidden" />
                <div className="relative text-sm leading-[20px] font-semibold font-montserrat text-gray-200 text-left inline-block min-w-[126px] z-[1]">
                  Group Adventure
                </div>
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 z-[1]"
                  alt=""
                  src="/charmcross.svg"
                />
              </button>
              <div className="rounded-81xl bg-gray-600 flex flex-row items-start justify-start pt-2.5 pb-[5px] pr-2.5 pl-[15px] gap-[5px]">
                <div className="h-[35px] w-[83px] relative rounded-81xl bg-gray-600 hidden" />
                <div className="relative leading-[20px] font-semibold inline-block min-w-[37px] z-[1]">
                  India
                </div>
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/charmcross.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <img
        className="w-0 h-px absolute !m-[0] top-[816px] left-[430px] object-contain"
        loading="lazy"
        alt=""
        src="/arrow-5.svg"
      />
      <img
        className="w-0 h-px absolute !m-[0] top-[881px] left-[430px] object-contain"
        loading="lazy"
        alt=""
        src="/arrow-5.svg"
      />
      <img
        className="w-0 h-px absolute !m-[0] top-[947px] left-[430px] object-contain"
        loading="lazy"
        alt=""
        src="/arrow-5.svg"
      />
      <img
        className="w-0 h-px absolute !m-[0] top-[1011px] left-[430px] object-contain"
        loading="lazy"
        alt=""
        src="/arrow-5.svg"
      />
      <img
        className="w-0 h-px absolute !m-[0] bottom-[975px] left-[430px] object-contain"
        loading="lazy"
        alt=""
        src="/arrow-5.svg"
      />
      <GroupComponent
        facebook="/facebook1.svg"
        whatsapp="/whatsapp1.svg"
        propAlignSelf="unset"
        propMarginRight="-77.9px"
        propWidth="1439.9px"
      />
    </div>
  );
};

export default BrowseTrip;
