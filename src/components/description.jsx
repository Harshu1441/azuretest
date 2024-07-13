
import PropTypes from "prop-types";
import GroupComponent4 from "./group-component4";
import GroupComponent from "./group-component";
import {Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';

import '../styles.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

const Description = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-end justify-start gap-[59px] max-w-[calc(100%_-_345px)] text-left text-17xl text-black-white-gray10 font-inria-serif mq750:gap-[29px] mq1050:max-w-full ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-end py-0 px-1.5 box-border max-w-full text-29xl">
        <div className="flex-1 flex flex-col items-start justify-start gap-[10px] max-w-full">
          <h1 className="m-0 relative text-inherit font-bold font-inherit mq1050:text-19xl mq450:text-10xl">
            Overview
          </h1>
          <div className="self-stretch relative text-lg leading-[140%] font-montserrat text-justify">
            A Land of Spectacular Beauty and Rich Culture Nestled in the
            northernmost region of India, Leh Ladakh is a breathtaking
            destination renowned for its awe-inspiring landscapes, rich cultural
            heritage, and serene monasteries. This high-altitude desert is a
            paradise for adventure seekers, nature enthusiasts, and those
            seeking spiritual enlightenment.
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col  justify-start pt-0 px-0 pb-[23px] box-border gap-[46.5px] max-w-full text-justify text-lg font-montserrat mq750:gap-[23px]">
        <div className="self-stretch relative flex flex-col items-start justify-start gap-[28.5px] max-w-full text-left text-17xl font-inria-serif">
          <div className="w-[352px] flex flex-row items-start justify-start py-0 px-1.5 box-border max-w-full">
            <h1 className="m-0 flex-1 relative text-inherit font-bold font-inherit inline-block max-w-full z-[4] mq1050:text-10xl mq450:text-3xl">
              Tourist Attractions:
            </h1>
          </div>
          <Swiper
            navigation={{
              nextEl: ".custom-next-button2",
              prevEl: ".custom-prev-button2",
            }}
            autoplay={true}
            slidesPerView={1}
            keyboard={true}
            rewind={true}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper2"
          >

            <SwiperSlide>
              <div className="self-stretch  p-10 flex flex-col items-start justify-end pt-[272px] pb-[29px] pr-[66px] pl-[84px] box-border relative gap-[19px] max-w-full text-center text-5xl font-montserrat mq750:pl-[21px] mq750:box-border mq1050:pl-[42px] mq1050:pr-[33px] mq1050:box-border mq450:pt-[177px] mq450:pb-5 mq450:box-border">
                <img
                  className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/rectangle-1081@2x.png"
                />
               
                <div className="self-stretch flex flex-row items-start justify-center py-0 pr-1.5 pl-0 box-border max-w-full">
                  <b className="w-[336px] relative [text-decoration:underline] leading-[34px] inline-block shrink-0 max-w-full z-[1] mq450:text-lgi mq450:leading-[27px]">
                    Pangong Lake
                  </b>
                </div>
                <div className="self-stretch relative text-base leading-[140%] z-[1]">
                  The crystal-clear blue waters of Pangong Lake set against the
                  backdrop of rugged mountains create a mesmerizing sight. Visitors
                  can indulge in camping by the lakeshore and witness the
                  ever-changing hues of the water as the day progresses.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="self-stretch flex flex-col items-start justify-end pt-[272px] pb-[29px] pr-[66px] pl-[84px] box-border relative gap-[19px] max-w-full text-center text-5xl font-montserrat mq750:pl-[21px] mq750:box-border mq1050:pl-[42px] mq1050:pr-[33px] mq1050:box-border mq450:pt-[177px] mq450:pb-5 mq450:box-border">
                <img
                  className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/rectangle-1081@2x.png"
                />
             
                <div className="self-stretch flex flex-row items-start justify-center py-0 pr-1.5 pl-0 box-border max-w-full">
                  <b className="w-[336px] relative [text-decoration:underline] leading-[34px] inline-block shrink-0 max-w-full z-[1] mq450:text-lgi mq450:leading-[27px]">
                    Pangong Lake
                  </b>
                </div>
                <div className="self-stretch relative text-base leading-[140%] z-[1]">
                  The crystal-clear blue waters of Pangong Lake set against the
                  backdrop of rugged mountains create a mesmerizing sight. Visitors
                  can indulge in camping by the lakeshore and witness the
                  ever-changing hues of the water as the day progresses.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="self-stretch flex flex-col items-start justify-end pt-[272px] pb-[29px] pr-[66px] pl-[84px] box-border relative gap-[19px] max-w-full text-center text-5xl font-montserrat mq750:pl-[21px] mq750:box-border mq1050:pl-[42px] mq1050:pr-[33px] mq1050:box-border mq450:pt-[177px] mq450:pb-5 mq450:box-border">
                <img
                  className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/rectangle-1081@2x.png"
                />
            
                <div className="self-stretch flex flex-row items-start justify-center py-0 pr-1.5 pl-0 box-border max-w-full">
                  <b className="w-[336px] relative [text-decoration:underline] leading-[34px] inline-block shrink-0 max-w-full z-[1] mq450:text-lgi mq450:leading-[27px]">
                    Pangong Lake
                  </b>
                </div>
                <div className="self-stretch relative text-base leading-[140%] z-[1]">
                  The crystal-clear blue waters of Pangong Lake set against the
                  backdrop of rugged mountains create a mesmerizing sight. Visitors
                  can indulge in camping by the lakeshore and witness the
                  ever-changing hues of the water as the day progresses.
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="w-full slider-main-container absolute h-14 top-1/2  my-5 px-5  max-w-full">
            <div className="nav-btn2 custom-prev-button2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="main-grid-item-icon" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <line x1="19" x2="5" y1="12" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </div>

            <div className="nav-btn2 custom-next-button2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="main-grid-item-icon" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <line x1="5" x2="19" y1="12" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </div>

        </div>
        <div className="self-stretch flex flex-col pt-10 items-start justify-start gap-[26px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[25px] max-w-full text-left text-9xl font-inria-serif">
            <div className="w-[370px] flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full text-17xl">
              <h1 className="m-0 flex-1 relative text-inherit font-bold font-inherit inline-block max-w-full mq1050:text-10xl mq450:text-3xl">
                Cultural Experiences:
              </h1>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-lg font-montserrat">
              <div className="self-stretch relative leading-[140%]">
                <ul className="m-0 font-inherit text-inherit pl-6">
                  <li>
                    Engage with the warm and welcoming locals to gain insights
                    into their traditional lifestyle, cuisine, and
                    craftsmanship, including the famous Pashmina shawls and
                    Tibetan handicrafts.
                  </li>
                </ul>
              </div>
              <div className="self-stretch relative leading-[140%]">
                <ul className="m-0 font-inherit text-inherit pl-6">
                  <li>
                    Participate in meditation sessions or interact with monks at
                    the monasteries to experience the spiritual essence of
                    Ladakh.
                  </li>
                </ul>
              </div>
              <div className="self-stretch relative leading-[140%]">
                <ul className="m-0 font-inherit text-inherit pl-6">
                  <li>
                    Taste the delectable local cuisine, including Thukpa, Momos,
                    and Butter Tea, to savor the flavors of Ladakhi culture.
                  </li>
                </ul>
              </div>
            </div>
            <div className="self-stretch relative text-lg leading-[140%] font-montserrat">
              In conclusion, Leh Ladakh beckons travelers with its surreal
              beauty, spiritual aura, and a treasure trove of cultural
              experiences, making it an unforgettable destination for those
              seeking adventure and tranquility in equal measure.
            </div>
            <div className="self-stretch relative text-lg leading-[140%] font-montserrat">
              Leh Ladakh, located in the northernmost region of India, has
              limited accessibility due to its geographical location and
              terrain. However, there are several ways to reach this stunning
              destination:
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full">
              <h3 className="m-0 w-[370px] relative text-inherit font-bold font-inherit flex items-center max-w-full mq450:text-3xl">
                By Air:
              </h3>
              <div className="self-stretch relative text-lg leading-[140%] font-montserrat whitespace-pre-wrap text-justify">
                The most convenient way to reach Leh Ladakh is by air. Kushok
                Bakula Rimpochee Airport in Leh is well-connected to major
                cities in India, including Delhi, Mumbai, and Srinagar. Flights
                to Leh operate regularly, especially during the peak tourist
                season from April to June.
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full">
              <h3 className="m-0 w-[370px] relative text-inherit font-bold font-inherit flex items-center max-w-full mq450:text-3xl">
                By Road:
              </h3>
              <div className="self-stretch relative text-lg leading-[140%] font-montserrat text-justify">
                Leh Ladakh is accessible by road via the Manali-Leh Highway and
                the Srinagar-Leh Highway. These routes offer breathtaking views
                but are open only during the summer months when the snow has
                melted. The road journey to Leh Ladakh is an adventure in
                itself, with travelers traversing high mountain passes and
                splendid landscapes.
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full">
              <h3 className="m-0 w-[370px] relative text-inherit font-bold font-inherit flex items-center max-w-full mq450:text-3xl">
                Permits:
              </h3>
              <div className="self-stretch relative text-lg leading-[140%] font-montserrat text-justify">
                It's important to note that foreign nationals and domestic
                tourists from certain states in India are required to obtain
                inner-line permits to visit certain areas in Ladakh. These
                permits can be obtained online or from the authorities in Leh.
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full">
              <h3 className="m-0 w-[473px] relative text-inherit font-bold font-inherit flex items-center max-w-full mq450:text-3xl">
                Accessibility Considerations:
              </h3>
              <div className="self-stretch relative text-lg leading-[140%] font-montserrat text-justify">
                Due to the high altitude of Leh Ladakh, travelers should be
                mindful of the potential effects of altitude sickness and
                acclimatize accordingly. It's advisable to plan for a gradual
                ascent to allow the body to acclimate to the altitude.
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-3.5 box-border max-w-full">
            <div className="flex-1 relative leading-[140%] inline-block max-w-full">
              Overall, while reaching Leh Ladakh may require some planning and
              consideration of weather conditions, the journey to this
              awe-inspiring destination is an integral part of the experience,
              offering travelers a chance to witness some of the most stunning
              landscapes in the world.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start gap-[24px]">
            <div className="self-stretch relative leading-[140%]">
              When visiting Ladakh as a tourist, there are several important
              do's and don'ts to keep in mind:
            </div>
            <div className="self-stretch h-[513px] relative rounded-2xl box-border z-[1] text-base border-[2px] border-solid border-black-white-gray10">
              <div className="absolute top-[0px] left-[0px] rounded-t-2xl rounded-b-none bg-gold-100 w-[926px] h-[46px]" />
              <div className="absolute top-[66px] left-[27px] leading-[140%] inline-block w-[409px]">
                <ol className="m-0 font-inherit text-inherit pl-[21px]">
                  <li>
                    Acclimatize: Allow your body time to acclimatize to the high
                    altitude to prevent altitude sickness.
                  </li>
                </ol>
              </div>
              <div className="absolute top-[66px] left-[490px] leading-[140%] inline-block w-[409px]">
                <ol className="m-0 font-inherit text-inherit pl-[21px]">
                  <li>
                    Littering: Avoid littering and maintain the pristine
                    environment by disposing of waste responsibly.
                  </li>
                </ol>
              </div>
              <div className="absolute top-[156px] left-[27px] leading-[140%] inline-block w-[409px]">
                <ol className="m-0 font-inherit text-inherit pl-[21px]">
                  <li>
                    Stay Hydrated: Drink plenty of water to stay hydrated due to
                    the dry climate and high altitude.
                  </li>
                </ol>
              </div>
              <div className="absolute top-[156px] left-[490px] leading-[140%] inline-block w-[409px]">
                <ol className="m-0 font-inherit text-inherit pl-[21px]">
                  <li>
                    Disrespecting Wildlife: Refrain from disturbing or harming
                    the local wildlife.
                  </li>
                </ol>
              </div>
              <div className="absolute top-[246px] left-[27px] leading-[140%] inline-block w-[409px]">
                <ol className="m-0 font-inherit text-inherit pl-[21px]">
                  <li>
                    Respect Local Culture: Respect the local customs,
                    traditions, and religious sites.
                  </li>
                </ol>
              </div>
              <div className="absolute top-[246px] left-[490px] leading-[140%] inline-block w-[409px]">
                <ol className="m-0 font-inherit text-inherit pl-[21px]">
                  <li>
                    Overexertion: Avoid overexerting yourself, especially in the
                    initial days of your visit.
                  </li>
                </ol>
              </div>
              <div className="absolute top-[314px] left-[27px] leading-[140%] inline-block w-[409px]">
                <ol className="m-0 font-inherit text-inherit pl-[21px]">
                  <li>
                    Pack Wisely: Carry appropriate clothing, sunscreen, and
                    sunglasses to protect yourself from the strong sun and cold
                    weather.
                  </li>
                </ol>
              </div>
              <div className="absolute top-[314px] left-[490px] leading-[140%] inline-block w-[409px]">
                <ol className="m-0 font-inherit text-inherit pl-[21px]">
                  <li>
                    Disrupting Local Customs: Refrain from disrupting local
                    customs and traditions, especially during religious
                    ceremonies
                  </li>
                </ol>
              </div>
              <div className="absolute top-[404px] left-[27px] leading-[140%] inline-block w-[409px]">
                <ol className="m-0 font-inherit text-inherit pl-[21px]">
                  <li>
                    Plan Responsibly: Plan your itinerary carefully and obtain
                    any necessary permits for restricted areas.
                  </li>
                </ol>
              </div>
              <div className="absolute top-[404px] left-[490px] leading-[140%] inline-block w-[409px]">
                <ol className="m-0 font-inherit text-inherit pl-[21px]">
                  <li>
                    Ignoring Safety Precautions: Do not ignore safety
                    guidelines, especially while trekking or engaging in
                    adventure activities.
                  </li>
                </ol>
              </div>
              <div className="absolute top-[0px] left-[0px] rounded-2xl box-border w-full h-full hidden border-[2px] border-solid border-black-white-gray10" />
              <div className="absolute top-[4px] left-[164px] text-5xl leading-[36px] font-semibold text-gray-200 text-center flex items-center justify-center w-[135px] h-9 z-[2] mq450:text-lgi mq450:leading-[27px]">
                Do’s
              </div>
              <div className="absolute top-[4px] left-[627px] text-5xl leading-[36px] font-semibold text-gray-200 text-center flex items-center justify-center w-[135px] h-9 z-[2] mq450:text-lgi mq450:leading-[27px]">
                Dont’s
              </div>
              <div className="absolute top-[0px] left-[463px] box-border w-0.5 h-[515px] z-[2] border-r-[2px] border-solid border-black-white-gray10" />
            </div>
          </div>
        </div>
        <div className="self-stretch relative leading-[140%]">
          By adhering to these do's and don'ts, you can ensure a respectful and
          enjoyable experience while visiting Ladakh.
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[22px] box-border gap-[53px] max-w-full mq750:gap-[26px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[31px] max-w-full mq450:gap-[15px]">
          <h1 className="m-0 w-[370px] relative text-inherit font-bold font-inherit flex items-center max-w-full mq1050:text-10xl mq450:text-3xl">
            Best Time to Visit
          </h1>
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-justify text-lg font-montserrat">
            <div className="self-stretch relative leading-[140%]">
              The best time to visit Leh Ladakh while keeping tourism in mind is
              during the summer season, specifically between the months of April
              and June. This period offers pleasant weather, clear skies, and
              cool temperatures, making it the peak tourist season for the
              region. The average temperature ranges between 10-22 degrees
              Celsius during these months, providing an ideal environment for
              sightseeing, adventure activities, and exploration of the
              breathtaking landscapes and ancient monasteries. Additionally,
              this time allows tourists to savor authentic Tibetan delicacies
              while enjoying views of the snow-clad Himalayas.
            </div>
            <div className="self-stretch relative leading-[140%]">
              It's important to note that this period sees a high footfall and
              may result in higher rates for accommodations due to the influx of
              tourists. Therefore, planning a visit to Leh Ladakh during the
              summer season ensures a vibrant and bustling tourist experience
              while taking advantage of the favorable weather conditions for
              tourism.
            </div>
          </div>
        </div>
        <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-1700" />
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[39px] pl-2.5 box-border max-w-full text-center">
        <div className="flex-1 flex flex-col items-start justify-start gap-[46px] max-w-full mq450:gap-[23px]">
          <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq1050:text-10xl mq450:text-3xl">
            Explore Ladakh Packages
          </h1>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[39px_38px]  text-xs font-montserrat mq750:gap-[19px]">
            <GroupComponent4
              imagePlaceholder="/rectangle-1091@2x.png"
              rectangle="/rectangle@2x.png"
              mdilocation="/mdilocation.svg"
              solarcalendarLinear="/solarcalendarlinear.svg"
            />
            <GroupComponent4
              imagePlaceholder="/rectangle-1091-1@2x.png"
              rectangle="/rectangle1@2x.png"
              mdilocation="/mdilocation-1.svg"
              solarcalendarLinear="/solarcalendarlinear-1.svg"
            />
            <div className="w-[269px] rounded-[11.96px] bg-gray-1700 flex flex-col items-start justify-start">
              <div className="self-stretch h-[300px] relative rounded-[11.96px] bg-gray-1700 hidden z-[1]" />
              <img
                className="self-stretch h-[153.4px] relative rounded-t-[11.96px] rounded-b-none max-w-full overflow-hidden shrink-0 object-cover z-[2]"
                loading="lazy"
                alt=""
                src="/rectangle-1091-2@2x.png"
              />
              <div className="self-stretch rounded-2xs flex flex-col items-start justify-start pt-[35.4px] px-0 pb-[14.3px] gap-[13.1px] bg-[url('/public/rectangle2@2x.png')] bg-cover bg-no-repeat bg-[top] shrink-0 z-[1] mt-[-25.4px]">
                <img
                  className="self-stretch h-[231px] relative rounded-2xs max-w-full overflow-hidden shrink-0 object-cover hidden"
                  alt=""
                  src="/rectangle2@2x.png"
                />
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-3.5 text-3xs text-gray-200">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                    <div className="w-[102.6px] rounded-[1.99px] bg-gold-100 flex flex-row items-start justify-start pt-1 px-[3px] pb-[3.9px] box-border shrink-0 whitespace-nowrap z-[2]">
                      <div className="h-[18.9px] w-[102.6px] relative rounded-[1.99px] bg-gold-100 hidden" />
                      <div className="flex-1 relative leading-[11px] font-semibold inline-block min-w-[96.6px] shrink-0 z-[1]">
                        Group Adventure
                      </div>
                    </div>
                    <b className="self-stretch relative text-base-9 leading-[140%] font-inria-serif text-black-white-gray10 text-left shrink-0 z-[2]">
                      Ladakh Adventure: From Valleys to Lakes - A 13D/12N
                      Journey
                    </b>
                  </div>
                </div>
                <div className="w-[88.8px] flex flex-row items-start justify-start py-0 px-4 box-border text-left">
                  <div className="flex-1 flex flex-row items-end justify-start gap-[3.9px]">
                    <img
                      className="h-[15.9px] w-[13px] relative overflow-hidden shrink-0 z-[2]"
                      alt=""
                      src="/mdilocation-1.svg"
                    />
                    <div className="flex-1 relative leading-[16.9px] font-medium z-[2]">
                      India
                    </div>
                  </div>
                </div>
                <div className="w-[99.7px] flex flex-row items-start justify-start py-0 px-4 box-border text-left">
                  <div className="flex-1 flex flex-row items-end justify-start gap-[3.9px]">
                    <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[1.9px]">
                      <img
                        className="w-[13px] h-[13px] relative overflow-hidden shrink-0 z-[2]"
                        alt=""
                        src="/solarcalendarlinear-2.svg"
                      />
                    </div>
                    <div className="flex-1 relative leading-[16.9px] font-medium shrink-0 z-[2]">
                      13 Days
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[0.5px] relative box-border z-[2] border-t-[0.5px] border-solid border-gray-1000" />
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[50px] pl-[49px] text-sm-9 mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <div className="flex-1 relative leading-[22.9px] font-semibold z-[2]">
                    View Trip
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

Description.propTypes = {
  className: PropTypes.string,
};

export default Description;
