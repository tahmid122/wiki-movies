"use client";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
// Banner array
const bannerArray: string[] = [
  "/banner/banner7.jpg",
  "/banner/banner8.jpg",
  "/banner/banner9.jpg",
  "/banner/banner4.jpg",
];
const Banner = () => {
  return (
    <div className="h-100 xl:h-167 w-full relative" id="bannerSlider">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper w-full h-full"
      >
        {bannerArray?.map((banner, idx) => (
          <SwiperSlide key={idx} className="relative">
            <Image
              src={banner}
              fill
              alt="banner image"
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
