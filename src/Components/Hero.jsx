
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, History, Autoplay } from "swiper";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from 'react-icons/hi'

import "swiper/css";
import "swiper/css/navigation";
import { HashLink } from "react-router-hash-link";

const randomImage1 = "https://source.unsplash.com/1700x502/?education"
const randomImage2 = "https://source.unsplash.com/1700x499/?graduation"

function Hero() {
  return (
    <div className="hero">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        // onSlideChange={}
        autoplay={{
          delay: 7000,
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
        <SwiperSlide className="">
          <div className="swiperImage relative">
            <div className="cover position "></div>
            <img src={randomImage1} />
            <div className="titleContent absolute top-0">
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