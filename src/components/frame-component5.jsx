import GroupComponent from "./group-component";
import PropTypes from "prop-types";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch h-[450px] flex flex-row items-start justify-start pt-0 px-0 pb-[378.7px] box-border gap-[84.3px] max-w-full lg:h-auto mq750:gap-[42px] mq1050:pb-[246px] mq1050:box-border mq450:gap-[21px] mq450:pb-40 mq450:box-border ${className}`}
    >
      <div className="ml-[-116px] flex flex-col items-start justify-start pt-[47.7px] px-0 pb-0">
        <img
          className="w-[31.7px] h-[23.6px] relative shrink-0"
          loading="lazy"
          alt=""
          src="/.svg"
        />
      </div>
      <GroupComponent
        facebook="/facebook1.svg"
        whatsapp="/whatsapp1.svg"
        propAlignSelf="unset"
        propMarginRight="unset"
        propWidth="1439.9px"
      />
    </footer>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
