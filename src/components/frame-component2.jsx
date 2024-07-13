import BlogPostCard from "./blog-post-card";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 pb-[37px] pr-[81px] pl-20 box-border max-w-full text-left text-lg text-khaki-100 font-matter mq750:pl-10 mq750:pr-10 mq750:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-end justify-start gap-[83.1px] max-w-full mq450:gap-[21px] mq750:gap-[42px]">
        <div className="w-[1228px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[546px] flex flex-col items-start justify-start gap-[19px] max-w-full">
            <div className="w-[496px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <div className="w-[236px] flex flex-col items-start justify-start gap-[10px]">
                <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[9px]">
                  <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[9px]">
                    <div className="w-[42px] h-px relative box-border border-t-[1px] border-solid border-khaki-100" />
                  </div>
                  <div className="flex-1 relative tracking-[0.17em] leading-[22px] inline-block min-w-[121px]">
                    Read experience
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-1.5 text-center text-21xl text-text-color-secondary font-inria-serif">
                  <h1 className="m-0 flex-1 relative text-inherit leading-[120%] font-normal font-inherit mq450:text-5xl mq450:leading-[29px] mq1050:text-13xl mq1050:leading-[38px]">
                    The Journal
                  </h1>
                </div>
              </div>
            </div>
            <div className="self-stretch relative leading-[130%] font-light text-gray-2000 text-center">{`Since 1978, we’ve remained dedicated to designing innovative trips to the most fascinating corners of the world. `}</div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-0 pr-1 pl-0 box-border gap-[45.3px_43.3px] max-w-full text-base-9 text-silver font-inter mq750:gap-[22px]">
          <BlogPostCard
            gSTOut="/gst--out@2x.png"
            imgLibCover01="/img-libcover01@2x.png"
            heading="Best Places to visit in 2024"
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[8.8px] box-border gap-[13.6px] min-w-[362px] max-w-full text-text-color-secondary font-dm-sans">
            <div className="self-stretch h-[272px] rounded-sm-6 overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[37.4px] box-border gap-[14.8px] text-silver font-inter">
              <img
                className="self-stretch h-[234.6px] relative max-w-full overflow-hidden shrink-0 object-cover"
                alt=""
                src="/gst--out-1@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[9.7px] shrink-0">
                <div className="self-stretch relative leading-[140%] z-[1]">
                  19 Jan 2024
                </div>
                <img
                  className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/img-libcover01-1@2x.png"
                />
              </div>
            </div>
            <div className="w-[311px] flex flex-row items-start justify-start pt-0 px-0 pb-[31.5px] box-border text-3xl-7">
              <b className="flex-1 relative leading-[142%] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] mq450:text-lg mq450:leading-[26px]">
                Achieving your healthier self
              </b>
            </div>
            <div className="w-[110px] relative [text-decoration:underline] leading-[23px] flex items-center">
              Read More
            </div>
          </div>
          <BlogPostCard
            gSTOut="/gst--out-2@2x.png"
            imgLibCover01="/img-libcover01-2@2x.png"
            heading="Trekking in mountains"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
