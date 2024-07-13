import Header from "../components/header";

const RegisterPage = () => {
  return (
    <div className="w-full relative bg-gray-200 overflow-hidden flex flex-row items-end justify-start gap-[131px] leading-[normal] tracking-[normal] mq450:gap-[16px] mq750:gap-[33px] mq1250:flex-wrap mq1250:gap-[65px]">
      <img
        className="w-[811px] relative max-h-full object-cover max-w-full mq1250:flex-1"
        alt=""
        src="/background@2x.png"
      />
      <div className="w-[360px] flex flex-col items-start justify-start pt-0 px-0 pb-[127px] box-border min-w-[360px] min-h-[682px] max-w-full mq450:min-w-full mq750:pb-[83px] mq750:box-border mq1250:flex-1">
        <Header />
      </div>
    </div>
  );
};

export default RegisterPage;
