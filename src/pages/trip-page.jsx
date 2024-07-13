
import PropTypes from "prop-types";
import Description from "../components/description";
import Carousel from "../components/carousal";
import FrameComponent from "../components/frame-component";

const TripPage = ({ className = "" }) => {
  return (
    <div
      className={`w-full h-full text-gainsboro-100 bg-gray-200 max-w-full overflow-hidden flex flex-col items-end justify-start pt-8 px-0  box-border relative leading-[normal] tracking-[normal] lg:h-auto ${className}`}
    >
      <img
        className="w-full h-[422px] absolute !m-[0] top-[154px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/banner@2x.png"
      />
      <header className="self-stretch flex flex-row items-start justify-center pt-0 pb-[163px] pr-5 pl-[25px] box-border max-w-full">      
          <FrameComponent />
      </header>
      <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[85px] box-border max-w-full shrink-0 text-center text-lg text-khaki-100 font-matter">
        <div className="w-[924px] flex flex-col items-end justify-start gap-[11px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px]">
            <div className="w-[301px] flex flex-row items-end justify-start gap-[4px]">
              <div className="w-[74px] flex flex-col items-start justify-end pt-0 px-0 pb-[9px] box-border">
                <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-khaki-100" />
              </div>
              <div className="flex-1 relative tracking-[0.17em] leading-[22px] z-[1]">
                Bullet Travel
              </div>
              <div className="w-[74px] flex flex-col items-start justify-end pt-0 px-0 pb-[9px] box-border">
                <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-khaki-100" />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start gap-[79px] max-w-full text-45xl text-black-white-gray10 font-inria-serif mq1050:gap-[39px] mq450:gap-[20px]">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full">
              <h1 className="m-0 w-[617px] relative text-inherit leading-[67px] font-bold font-inherit flex items-center justify-center shrink-0 max-w-full z-[1] mq1050:text-32xl mq1050:leading-[53px] mq450:text-19xl mq450:leading-[40px]">
                Ladakh
              </h1>
            </div>
            <div className="self-stretch relative text-xl leading-[140%] font-montserrat z-[1] mq450:text-base mq450:leading-[22px]">
              Biking in Ladakh, Chadar Trek, Jeep Safari, Markha Valley Trek,
              Snow Leopard Trek, Camping in Ladakh, Camel Safari in Nubra
              Valley, Quad Biking in Nubra Sand Dunes, Rafting in Zanskar and
              many more.
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[25px] box-border max-w-full shrink-0 text-left text-5xl text-black-white-gray10 font-matter">
        <div className="w-[1281px] overflow-hidden shrink-0 flex flex-row items-end justify-start py-[65px] px-0 box-border gap-[14.5px] max-w-full z-[3] lg:pt-[27px] lg:pb-[27px] lg:box-border mq1050:pt-5 mq1050:pb-5 mq1050:box-border">
          <div className="h-[3831px] w-px relative box-border hidden border-r-[1px] border-solid border-black-white-gray10" />
          <div className="h-[76px] w-[300px] relative bg-gray-200 hidden" />
          <div className="h-[3781px] w-[315px] flex flex-col items-start justify-start mq1050:hidden">
            <div className="self-stretch h-[448px] flex flex-col items-start justify-start gap-[32.2px] mq450:gap-[16px]">
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-gold-100">
                <div className="w-[159.8px] flex flex-col items-start justify-start pt-[17px] px-0 pb-0 box-border">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[16.5px]">
                    <div className="flex flex-col items-start justify-start pt-[2.3px] px-0 pb-0">
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/teenyiconstickcircleoutline.svg"
                      />
                    </div>
                    <a className="[text-decoration:none] flex-1 relative font-medium text-[inherit] shrink-0 mq450:text-lgi">
                      Overview
                    </a>
                  </div>
                </div>
                <img
                  className="h-[21.3px] w-[22px] relative z-[1]"
                  loading="lazy"
                  alt=""
                  src="/group-11308.svg"
                />
              </div>
              <div className="w-[250px] flex flex-row items-start justify-start gap-[17px]">
                <div className="flex flex-col items-start justify-start pt-[1.8px] px-0 pb-0">
                  <img
                    className="w-6 h-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/teenyiconstickcircleoutline-1.svg"
                  />
                </div>
                <div className="flex-1 relative font-medium mq450:text-lgi">
                  Tourist Attractions
                </div>
              </div>
              <div className="w-[284px] flex flex-row items-start justify-start gap-[17px]">
                <div className="flex flex-col items-start justify-start pt-[1.8px] px-0 pb-0">
                  <img
                    className="w-6 h-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/teenyiconstickcircleoutline-1.svg"
                  />
                </div>
                <div className="flex-1 relative font-medium mq450:text-lgi">
                  Cultural Experiences
                </div>
              </div>
              <div className="w-[300px] flex-1 flex flex-col items-start justify-start gap-[32px] mq450:gap-[16px]">
                <div className="w-[229px] flex flex-row items-start justify-start gap-[17px]">
                  <div className="flex flex-col items-start justify-start pt-[2.3px] px-0 pb-0">
                    <img
                      className="w-6 h-6 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/teenyiconstickcircleoutline-3.svg"
                    />
                  </div>
                  <div className="flex-1 relative font-medium mq450:text-lgi">
                    Best time to visit
                  </div>
                </div>
                <div className="w-[271px] flex flex-row items-start justify-start pt-0 px-0 pb-[9px] box-border gap-[17px]">
                  <div className="flex flex-col items-start justify-start pt-[1.8px] px-0 pb-0">
                    <img
                      className="w-6 h-6 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/teenyiconstickcircleoutline-1.svg"
                    />
                  </div>
                  <div className="flex-1 relative font-medium mq450:text-lgi">
                    Packages
                  </div>
                </div>
                <div className="self-stretch flex-1 relative bg-gray-200" />
              </div>
            </div>
          </div>
          <div className="h-[3831px] w-px relative box-border z-[4] border-r-[1px] border-solid border-gray-700 mq1050:hidden" />
          <Description />
        </div>
      </section>
      <section className="mr-[-3px] mb-20 self-stretch bg-gray-300 flex flex-row items-end justify-center pt-0.5 pb-0 pr-[5px] pl-[82px] box-border gap-[73px] max-w-full shrink-0 text-left text-21xl text-black-white-gray10 font-inria-serif lg:flex-wrap mq750:gap-[36px] mq750:pl-[41px] mq750:box-border mq450:gap-[18px]">
        <div className="self-stretch w-[1445px] relative bg-gray-300 hidden max-w-full" />
        <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[51px] box-border min-w-[425px] min-h-[346px] max-w-full mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[42px] max-w-full mq750:gap-[21px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full">
              <h1 className="m-0 w-[350px] relative text-inherit font-bold font-inherit flex items-center max-w-full z-[1] mq1050:text-13xl mq450:text-5xl">
                Talk to an expert
              </h1>
              <div className="self-stretch h-[119px] relative text-xl leading-[150%] font-matter text-gray-2200 flex items-center shrink-0 z-[1] mq450:text-base mq450:leading-[24px]">
                Our Area Specialists know every detail about our adventures
                around the world. They will be happy to answer any questions and
                help you choose the journey that’s right for you. Contact us to
                learn more or book your trip today!
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-4 pr-[17px] pl-[18px] bg-gold-100 w-[167px] rounded-lg flex flex-row items-start justify-start box-border whitespace-nowrap z-[1]">
              <div className="h-[55px] w-[167px] relative rounded-lg bg-gold-100 hidden" />
              <div className="flex-1 relative text-xl leading-[23px] font-matter text-black text-center z-[2]">
                Contact Us
              </div>
            </button>
          </div>
        </div>
        <img
          className="w-[631px] relative max-h-full object-contain max-w-full z-[1] lg:flex-1"
          loading="lazy"
          alt=""
          src="/rectangle-10771@2x.png"
        />
      </section>
      <section className="self-stretch flex mb-10 flex-row items-start justify-center pt-0 px-5 pb-[30px] box-border max-w-full text-left text-lg text-khaki-100 font-matter">
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
      <Carousel />
      <section className="self-stretch bg-gray-300 flex mt-40 flex-col items-start justify-start pt-[58.3px] pb-[37.6px] pr-[79px] pl-[134px] box-border gap-[22.3px] max-w-full shrink-0 text-left text-5xl text-black-white-gray10 font-mclaren mq750:pl-[67px] mq750:pr-[39px] mq750:box-border mq450:pl-5 mq450:pt-[38px] mq450:pb-6 mq450:box-border">
        <div className="w-[1439.9px] h-[450.4px] relative bg-gray-300 hidden max-w-full" />
        <div className="self-stretch flex flex-col items-start justify-start gap-[2.5px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[7px] box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start gap-[48px] max-w-full lg:flex-wrap mq750:gap-[24px]">
              <div className="w-[498.4px] flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0 box-border min-w-[498.4px] max-w-full lg:flex-1 mq750:min-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[34px] max-w-full mq750:gap-[17px]">
                  <div className="relative leading-[29px] inline-block min-w-[111px] shrink-0 z-[1] mq450:text-lgi mq450:leading-[23px]">
                    Nomadic
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full shrink-0 text-[16.9px] font-caption-regular-12">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[25.9px] max-w-full">
                      <i className="self-stretch relative font-light z-[1]">
                        <p className="m-0">
                          Jl. Lebak Bulus I Kav. 29 Cilandak
                        </p>
                        <p className="m-0">
                          Jakarta Selatan, DKI Jakarta, Indonesia 12340
                        </p>
                      </i>
                      <div className="w-[168.7px] flex flex-row items-start justify-between gap-[20px]">
                        <img
                          className="h-[33.7px] w-[33.7px] relative min-h-[34px] z-[1]"
                          loading="lazy"
                          alt=""
                          src="/youtube.svg"
                        />
                        <img
                          className="h-[33.7px] w-[33.7px] relative min-h-[34px] z-[1]"
                          loading="lazy"
                          alt=""
                          src="/facebook1.svg"
                        />
                        <img
                          className="h-[33.7px] w-[33.7px] relative min-h-[34px] z-[1]"
                          loading="lazy"
                          alt=""
                          src="/whatsapp1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start gap-[73.6px] min-w-[437px] max-w-full text-2xl-1 font-matter mq750:flex-wrap mq750:gap-[37px] mq750:min-w-full mq450:gap-[18px]">
                <div className="flex-1 flex flex-row items-start justify-start gap-[47.1px] min-w-[241px] max-w-full mq450:flex-wrap mq450:gap-[24px]">
                  <div className="w-[145.6px] flex flex-col items-start justify-start gap-[25.3px] min-w-[145.6px] mq450:flex-1">
                    <div className="relative font-semibold inline-block min-w-[95px] z-[1] mq450:text-mid">
                      Company
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[16.9px] text-[16.9px] text-gray-2200">
                      <div className="relative inline-block min-w-[47px] z-[1]">
                        Home
                      </div>
                      <div className="relative inline-block min-w-[95px] z-[1]">
                        Destinations
                      </div>
                      <div className="relative inline-block min-w-[71px] z-[1]">
                        About Us
                      </div>
                      <div className="relative inline-block min-w-[86px] z-[1]">
                        Contact Us
                      </div>
                      <div className="relative inline-block min-w-[95px] z-[1]">
                        Travel Agent
                      </div>
                      <div className="self-stretch relative z-[1]">{`Dummy Flights & Hotels`}</div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[25.3px] min-w-[116px]">
                    <div className="relative font-semibold inline-block min-w-[53px] z-[1] mq450:text-mid">
                      Legal
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[16.8px] text-[16.9px] text-gray-2200">
                      <a className="[text-decoration:none] relative text-[inherit] z-[1]">{`Terms & Conditions`}</a>
                      <div className="self-stretch relative z-[1]">
                        Cancellation and Refund Policy
                      </div>
                      <div className="relative inline-block min-w-[111px] z-[1]">
                        Cookies Policy
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[227.5px] flex flex-col items-start justify-start gap-[25.3px] min-w-[227.5px] mq750:flex-1">
                  <div className="relative font-semibold inline-block min-w-[109px] z-[1] mq450:text-mid">
                    Contact Us
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[16.8px] text-[16.9px] text-gray-2200">
                    <div className="relative inline-block min-w-[109px] whitespace-nowrap z-[1]">
                      +91-7011481011
                    </div>
                    <div className="w-[167px] relative flex items-center whitespace-nowrap z-[1]">
                      info@visabanana.com
                    </div>
                    <div className="self-stretch h-[60px] relative leading-[20px] flex items-center min-h-[60px] z-[1]">
                      3rd Floor, Landmark Cyber Park Gurgaon Sector 67, 122102
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1207.1px] flex flex-col items-start justify-start gap-[11.2px] max-w-full text-lg font-caption-regular-12">
            <div className="w-[173.4px] flex flex-row items-start justify-start py-0 px-1.5 box-border">
              <div className="flex-1 flex flex-row items-start justify-start py-0 pr-2 pl-0">
                <i className="flex-1 relative leading-[20.27px] font-light shrink-0 z-[1]">{`Made in India `}</i>
                <div className="flex flex-col items-start justify-start pt-[2.3px] px-0 pb-0 ml-[-35.2px] text-8xl">
                  <h3 className="m-0 h-[19.5px] relative text-inherit flex italic font-light font-inherit items-end shrink-0 min-w-[27px] z-[2] mq450:text-3xl">
                    🇮🇳
                  </h3>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[1.1px] relative box-border opacity-[0.6] z-[1] border-t-[1.1px] border-solid border-black-white-gray10" />
          </div>
        </div>
        <div className="w-[1170.1px] flex flex-row items-start justify-center max-w-full text-[16.9px] text-gray-2200 font-sora">
          <div className="relative z-[1]">Copyright © Nomadic Therapies</div>
        </div>
      </section>
    </div>
  );
};

TripPage.propTypes = {
  className: PropTypes.string,
};

export default TripPage;
