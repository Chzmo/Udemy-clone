
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, History, Autoplay } from "swiper";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from 'react-icons/hi'

import "swiper/css";
import "swiper/css/navigation";
import { HashLink } from "react-router-hash-link";

const randomImage1 = "https://source.unsplash.com/1700x502/?education"
const randomImage2 = "https://source.unsplash.com/1700x499/?learing"

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
            <div className="cover absolute h-full w-full"></div>
            <div className="h-124">
              <img src={randomImage1} alt="slider"/>
            </div>
            <div className="titleContent absolute top-16 left-20 w-96 p-8 bg-white shadow-xl" >
              <h2 className="text-3xl font-bold">Learning that gets you</h2>
              <p className="pt-4 text-lg">Skills for your present (and your future). Get started with us.</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="swiperImage relative">
            <div className="cover absolute h-full w-full"></div>
            <div className="h-124">
              <img src={randomImage2} alt='slider'/>
            </div>
            <div className="titleContent absolute top-16 left-20 w-96 p-8 bg-white shadow-xl" >
              <h2 className="text-3xl font-bold ">Learning that gets you</h2>
              <p className="pt-4 text-lg">Skills for your present (and your future). Get started with us.</p>
            </div>
          </div>
        </SwiperSlide>

        <div 
          className="button-prev absolute inset-y-1/2 left-7 \
            bg-black h-10 w-10 text-white z-10 rounded-full flex items-center justify-center"
          >
            <HiOutlineArrowLeft />
        </div>
        <div 
          className="button-next absolute inset-y-1/2 right-7 \
            bg-black h-10 w-10 text-white z-10 rounded-full flex items-center justify-center"
          >
            <HiOutlineArrowRight/>
        </div>
      </Swiper>
    </div>
  )
}

export default Hero