
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, History, Autoplay } from "swiper";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from 'react-icons/hi'

import "swiper/css";
import "swiper/css/navigation";
import { HashLink } from "react-router-hash-link";

const randomImage1 = "https://source.unsplash.com/1700x502/?education"
const randomImage3 = "https://source.unsplash.com/1000x502/?education"
const randomImage2 = "https://source.unsplash.com/1700x499/?learing"

function Hero() {
  return (
    <div className="hero">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        // onSlideChange={}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl :".button-prev",
          nextEl :".button-next"
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
        <SwiperSlide className="sm:hidden">
          <div className="swiperImage bg-black">
            <div className="cover "></div>
            <div className="">
              <img 
                src={randomImage3} alt="slider"
                className="h-60 w-full object-cover"
              />
            </div>
            <div className="titleContent px-5 py-5 bg-white shadow-xl" >
              <h2 className="text-3xl font-bold">Learning that gets you</h2>
              <p className="pt-2 text-lg">Skills for your present (and your future). Get started with us.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="hidden sm:block">
          <div className="swiperImage relative h-80 bg-black">
            <div className="cover absolute h-full w-full"></div>
            <div className="">
              <img 
                src={randomImage1} 
                alt='slider'
                className="h-80 object-cover w-full"  
              />
            </div>
            <div className="titleContent absolute top-16 left-20 w-96 p-8 bg-white shadow-xl" >
              <h2 className="text-3xl font-bold ">Learning that gets you</h2>
              <p className="pt-4 text-lg">Skills for your present (and your future). Get started with us.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="hidden sm:block">
          <div className="swiperImage relative h-80 bg-black">
            <div className="cover absolute h-full w-full"></div>
            <div className="">
              <img 
                src={randomImage2} 
                alt='slider'
                className="h-80 object-cover w-full"  
              />
            </div>
            <div className="titleContent absolute top-16 left-20 w-96 p-8 bg-white shadow-xl" >
              <h2 className="text-3xl font-bold ">Learning that gets you</h2>
              <p className="pt-4 text-lg">Skills for your present (and your future). Get started with us.</p>
            </div>
          </div>
        </SwiperSlide>

        <div 
          className="
            hidden hover:cursor-pointer sm:flex
            button-prev absolute inset-y-1/2 left-7 \
            bg-black h-10 w-10 text-white z-10 
            rounded-full items-center justify-center
          "
        >
          <HiOutlineArrowLeft />
        </div>
        <div 
          className="
            hidden hover:cursor-pointer sm:flex
            button-next absolute inset-y-1/2 right-7 \
            bg-black h-10 w-10 text-white z-10 
            rounded-full items-center justify-center
          "
        >
          <HiOutlineArrowRight/>
        </div>
      </Swiper>
    </div>
  )
}

export default Hero