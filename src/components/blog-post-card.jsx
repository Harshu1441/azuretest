import PropTypes from "prop-types";

const BlogPostCard = ({ className = "", gSTOut, imgLibCover01, heading }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[8.8px] box-border gap-[45.1px] min-w-[362px] max-w-full text-left text-base-9 text-silver font-inter mq450:gap-[23px] ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[13.6px]">
        <div className="self-stretch h-[272px] rounded-sm-6 overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[37.4px] box-border gap-[14.8px]">
          <img
            className="self-stretch h-[234.6px] relative max-w-full overflow-hidden shrink-0 object-cover"
            alt=""
            src={gSTOut}
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[9.7px] shrink-0">
            <div className="self-stretch relative leading-[140%] z-[1]">
              19 Jan 2024
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src={imgLibCover01}
            />
          </div>
        </div>
        <b className="w-[297px] relative text-3xl-7 leading-[142%] [display:-webkit-inline-box] font-dm-sans text-text-color-secondary overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] mq450:text-lg mq450:leading-[26px]">
          {heading}
        </b>
      </div>
      <div className="w-[110px] relative [text-decoration:underline] leading-[23px] font-dm-sans text-text-color-secondary flex items-center">
        Read More
      </div>
    </div>
  );
};

BlogPostCard.propTypes = {
  className: PropTypes.string,
  gSTOut: PropTypes.string,
  imgLibCover01: PropTypes.string,
  heading: PropTypes.string,
};

export default BlogPostCard;
