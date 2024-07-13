import React, { useState } from "react";

const FAQ = ({ question, answer }) => {
  const [isOpen, setisOpen] = useState(false)
  return (
    <>

      <div className="flex-1 flex flex-col items-start justify-between w-full gap-[18px]  max-w-full mq800:min-w-full">
        <div onClick={() => setisOpen(!isOpen)} className="self-stretch cursor-pointer flex flex-row items-start justify-between gap-[24px] max-w-full mq800:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 box-border min-w-[370px] max-w-full mq800:min-w-full">
            <div className="self-stretch relative leading-[151.52%] font-medium">
              {question}
            </div>
          </div>
          <img
            className="h-8 w-8 relative"
            alt=""
            src={`/${isOpen ? 'close':"open"}-icon.svg`}
          />
        </div>
        {isOpen &&
          (<div className="self-stretch relative leading-[151.52%] font-medium text-slategray">
            {answer}
          </div>)
        }

      </div>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full"
        loading="lazy"
        alt=""
        src="/liner.svg"
      />
    </>
  );
};

export default FAQ;
