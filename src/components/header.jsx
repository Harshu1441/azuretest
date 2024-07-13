import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ className = "" }) => {
  const navigate = useNavigate();
  const [username, setusername] = useState('')
  const [phone, setphone] = useState('')
  const [password, setpassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const [checkBox, setcheckBox] = useState(true)

  const onDescriptionTextClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);
  const handleSubmit = async(e) => {
    e.preventDefault()
    if (checkBox === true) {
      if (password === confirmPassword) {
        try {
          const result = await fetch("http://20.244.89.90:8000/auth/register",{
            method:"POST",
            body:JSON.stringify({
              username,
              phone,
              password
            }),
            headers:{
              "Content-Type":"application/json"
            }
          })
          const data = await result.json()
          console.log(data)
            navigate('/login-page')
          
        } catch (error) {
          console.log(error)
        }
       setusername('')
       setphone('')
       setpassword('')
       setconfirmPassword('')
       setcheckBox(true)

      }
      else {
        alert('Password is not match With Comfirm Password')
      }
    }
    else {

      alert('Please Accept the Term and Condition')
    }
    console.log(username, phone, password, confirmPassword, checkBox)
  }

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[25px] max-w-full text-left text-base text-text-color-secondary font-gilroy-medium ${className}`}
    >
      <form onSubmit={(e) => handleSubmit(e)}>

        <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-9xl font-gilroy-bold">
          <div className="self-stretch relative leading-[32px] mq450:text-3xl mq450:leading-[26px]">
            Create an Account
          </div>
          <div className="w-[272px] relative text-sm leading-[24px] font-gilroy-medium inline-block">
            Hello there, Let’s start your journey with us.
          </div>
        </div>



        <div className="self-stretch flex flex-col mt-5 items-start justify-start gap-[15px] max-w-full text-gray-1100">
          <div className="self-stretch flex flex-row items-start justify-start pt-[3px] px-0 pb-[9px] box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start max-w-full z-[1]">
              <input
                type="text"
                placeholder="Full Name"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                className="rounded-lg leading-[24px] [border:none] [outline:none] w-full bg-whitesmoke box-border  py-2.5 px-4 whitespace-nowrap max-w-full border-[1px] border-solid border-lightgray-100"
              />

            </div>
          </div>
          <div className="self-stretch rounded-lg bg-whitesmoke overflow-x-auto flex flex-row items-start justify-start pt-[5px] px-[13px] pb-[3px] gap-[3.8px] text-sm text-gray-900 border-[1px] border-solid border-lightgray-100">
            <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
              <img
                className="w-[26px] h-[19px] relative rounded object-cover"
                alt=""
                src="/image-980@2x.png"
              />
            </div>
            <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
              <div className="h-3 relative leading-[24px] flex items-center shrink-0 min-w-[22px] whitespace-nowrap z-[1]">
                +91
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-3.5 px-0 pb-0">
              <img
                className="w-1.5 h-1 relative z-[1]"
                alt=""
                src="/strength-level.svg"
              />
            </div>
            <div className="h-9 flex flex-col items-start justify-start py-0 pr-1 pl-0 box-border">
              <div className="w-px h-[37px] relative box-border border-r-[1px] border-solid border-gray-1000" />
            </div>
            <div className="flex flex-col w-full items-start justify-start pt-[7px] px-0 pb-0 text-base text-gray-1100">
              <input
                type="text"
                value={phone}
                onChange={(e) => setphone(e.target.value)}
                placeholder="4545-13-531"
                className="relative leading-[24px] [border:none] [outline:none] border-whitesmoke bg-whitesmoke w-full inline-block min-w-[95px] z-[1]"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px] mt-5 max-w-full text-gray-1100">
          <div className="self-stretch h-12 flex flex-row items-end justify-start pt-0 px-0 pb-[3px] box-border max-w-full">

            <input
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className="rounded-lg leading-[24px] w-full [border:none] [outline:none] bg-whitesmoke box-border  py-2.5 px-4 whitespace-nowrap max-w-full border-[1px] border-solid border-lightgray-100"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start max-w-full">
            <input
              type="text"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
              className="rounded-lg leading-[24px] w-full [border:none] [outline:none] bg-whitesmoke box-border  py-2.5 px-4 whitespace-nowrap max-w-full border-[1px] border-solid border-lightgray-100"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start mb-5 mt-5 justify-start pt-0 px-0  gap-[24px] text-xs text-dimgray-200 font-caption-semibold-12">
          <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
            <div className="overflow-hidden flex flex-row mt-2 items-start justify-start">
              <label className="switch">
                <input type="checkbox" defaultChecked value={checkBox} onClick={() => setcheckBox(!checkBox)} />
                <span className="slider round"></span>
              </label>
            </div>
            <div className="flex-1 flex flex-col mt-2 items-start justify-start pt-0.5 px-0 pb-0">
              <div className="self-stretch relative leading-[16px]">
                I accept the Terms of Service and Privacy Policy.
              </div>
            </div>
          </div>
          <button type="submit" className="self-stretch rounded-lg hover:bg-gold-100/90 bg-gold-100 flex flex-row items-start justify-center py-[9.6px] px-5 whitespace-nowrap text-center text-base text-text-color-secondary font-gilroy-bold">
            <div className="h-[28.8px] text-white w-[61px] relative leading-[24px] flex items-center justify-center shrink-0 min-w-[61px]">
              Sign up
            </div>
          </button>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[32px] text-xs mq450:gap-[16px]">
          <div className="self-stretch h-px relative bg-lightgray-100" />
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[74px] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="flex-1 flex flex-row items-start justify-start gap-[8px]">
              <div className="flex-1 relative leading-[16px]">
                Already have an account?
              </div>
              <div
                className="w-[57px] relative leading-[16px] font-gilroy-bold text-gold-100 text-right inline-block min-w-[57px] cursor-pointer"
                onClick={onDescriptionTextClick}
              >
                Login now
              </div>
            </div>
          </div>
        </div>
      </form>

    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
