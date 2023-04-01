
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, History, Autoplay } from "swiper";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from 'react-icons/hi' 
import {Link} from 'react-router-dom'

import "swiper/css";
import "swiper/css/navigation";
import { HashLink } from "react-router-hash-link";

const randomImage1 = "https://source.unsplash.com/1700x602/?technology"
const randomImage2 = "https://source.unsplash.com/1700x599/?agriculture"
const randomImage3 = "https://source.unsplash.com/1700x601/?medicine"
const randomImage4 = "https://source.unsplash.com/1700x600/?mining"

function Hero() {
  return (
    <div className="hero">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        // onSlideChange={}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl :".button-prev",
          nextEl :".button-next",
        }}
        keyboard={{
          enabled: true,
        }}
        pagination={true}
        // history={{
        // key: "slide",
        // }}
        modules={[Autoplay, Navigation, Pagination, History]}
        className="mySwiper"
    >
        <SwiperSlide >
          <div className="swiperImage">  
            <div className="cover"></div>
            <img src={randomImage1} />
            <div className="titleContent">
              <h2>Your Global Trade facilitation and Supply partner</h2>
              <p>Jeffries and Madison makes sure you have the best attorneys on your side.</p>
              <div className="contacts">
                <HashLink to="#footer" className="cta">Book a meeting</HashLink>
                <HashLink to="#footer" className="cta">Learn More</HashLink>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="swiperImage">
            <div className="cover"></div>
            <img src={randomImage2} />
            <div className="titleContent">
              <h2>Your Global Trade facilitation and Supply partner</h2>
              <p>Jeffries and Madison makes sure you have the best attorneys on your side.</p>
              <div className="contacts">
                <HashLink to="#footer" className="cta">Book a meeting</HashLink>
                <HashLink to="#footer" className="cta">Learn More</HashLink>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="swiperImage">
            <div className="cover"></div>
            <img src={randomImage3} />
            <div className="titleContent">
              <h2>Your Global Trade facilitation and Supply partner</h2>
              <p>Jeffries and Madison makes sure you have the best attorneys on your side.</p>
              <div className="contacts">
                <Link className="cta">Book a meeting</Link>
                <Link className="cta">Learn More</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="swiperImage">
            <div className="cover"></div>
            <img src={randomImage4} />
            <div className="titleContent">
              <h2>Your Global Trade facilitation and Supply partner</h2>
              <p>Jeffries and Madison makes sure you have the best attorneys on your side.</p>
              <div className="contacts">
                <HashLink to="#footer" className="cta">Book a meeting</HashLink>
                <HashLink to="#footer" className="cta">Learn More</HashLink>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="button-prev"><HiOutlineArrowLeft /></div>
        <div className="button-next"><HiOutlineArrowRight/></div>
      </Swiper>
    </div>
  )
}

export default Hero