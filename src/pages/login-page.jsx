import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [phone, setphone] = useState('')
  const [password, setpassword] = useState('')
  const [checkBox, setcheckBox] = useState(true)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const result = await fetch("http://20.244.89.90:8000/auth/login", {
        method: "POST",
        body: JSON.stringify({
          phone,
          password
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const data = await result.json()
      console.log(data)
      if (data.success === true) {
        
        localStorage.setItem("accessToken", data.token)
        navigate('/')
      }

    } catch (error) {
      console.log(error)
    }
    setphone('')
    setpassword('')
    setcheckBox(true)
  }
  return (
    <div className="w-full relative bg-gray-200 overflow-hidden flex flex-row items-start justify-start gap-[111px] leading-[normal] tracking-[normal] text-left text-9xl text-text-color-secondary font-caption-semibold-12 mq450:gap-[28px] mq750:gap-[55px] mq1250:flex-wrap">
      <img
        className="w-[811px] relative max-h-full object-cover max-w-full mq1250:flex-1"
        loading="lazy"
        alt=""
        src="/rectangle-1097@2x.png"
      />
      <div className="w-[388px] flex flex-col items-start justify-start pt-[211px] px-0 pb-0 box-border min-w-[388px] max-w-full mq450:min-w-full mq750:pt-[137px] mq750:box-border mq1250:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[26px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-7 pl-0 gap-[6px]">
            <h1 className="m-0 self-stretch relative text-inherit leading-[32px] font-semibold font-inherit mq450:text-3xl mq450:leading-[26px]">
              Welcome Back!
            </h1>
            <div className="relative text-sm leading-[25px] text-gray-1200">
              Get access to your Orders, Wishlist Easily
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full text-xs mq450:gap-[16px]">
            <form onSubmit={(e) => handleSubmit(e)} className="m-0 self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
              <div className="self-stretch rounded-lg bg-whitesmoke overflow-hidden flex flex-row items-start justify-start py-2.5 px-4 border-[1px] border-solid border-lightgray-100">
                <input
                  className="w-[185px] [border:none] [outline:none] font-caption-semibold-12 text-sm bg-[transparent] h-6 relative leading-[24px] text-dimgray-100 text-left flex items-end p-0 z-[1]"
                  placeholder="Email or phone number"
                  type="text"
                  value={phone}
                  onChange={(e) => setphone(e.target.value)}
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                <div className="flex-1 rounded-lg bg-whitesmoke box-border overflow-hidden flex flex-row items-start justify-between py-2.5 pr-[17px] pl-[15px] max-w-full gap-[20px] border-[1px] border-solid border-lightgray-100">
                  <input
                    className="w-[108px] [border:none] [outline:none] font-caption-semibold-12 text-sm bg-[transparent] h-6 relative leading-[24px] text-dimgray-100 text-left flex items-end p-0 z-[1]"
                    placeholder="Enter password"
                    type="text"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                  />
                  <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                    <div className="w-4 h-4 relative z-[1]">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                      <img
                        className="absolute h-[68.13%] w-full top-[16.88%] right-[0%] bottom-[15%] left-[0%] max-w-full overflow-hidden max-h-full z-[1]"
                        alt=""
                        src="/login-icon.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-7 pl-0 gap-[16px] mq450:flex-wrap">
                <div className="flex-1 flex flex-row items-center justify-start gap-[8px] min-w-[112px]">
                  <div className=" overflow-hidden shrink-0 flex flex-row items-start justify-start">
                    <label className="switch">
                      <input type="checkbox" defaultChecked value={checkBox} onClick={() => setcheckBox(!checkBox)} />
                      <span className="slider round"></span>
                    </label>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                    <div className="self-stretch relative text-xs leading-[16px] font-caption-semibold-12 text-gray-1300 text-left">
                      Remember me
                    </div>
                  </div>
                </div>
                <div className="flex-1 relative text-xs leading-[16px] font-caption-semibold-12 text-gold-100 text-right inline-block min-w-[112px]">
                  Forgot password?
                </div>
              </div>
              <button type="submit" className="cursor-pointer [border:none] pt-[9.6px] px-5 pb-[14.4px] bg-gold-100 self-stretch rounded-lg flex flex-row items-start justify-center whitespace-nowrap hover:bg-goldenrod-100">
                <div className="w-[59.3px] relative text-base leading-[24px] font-semibold font-caption-semibold-12 text-text-color-secondary text-center flex items-center justify-center shrink-0 min-w-[59.3px]">
                  Sign in
                </div>
              </button>
            </form>
            <div className="self-stretch h-px relative bg-lightgray-100" />
            <div className="flex flex-row items-start justify-start py-0 px-[69px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="flex flex-row items-start justify-start gap-[8px]">
                <div className="relative leading-[16px]">
                  Don’t have an account?
                </div>
                <div className="relative leading-[16px] font-semibold text-gold-100 text-right inline-block min-w-[70px] whitespace-nowrap">
                  Get Started
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
