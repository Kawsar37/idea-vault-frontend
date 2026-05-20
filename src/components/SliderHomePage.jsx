"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Button } from "@heroui/react";

export default function HeroSlider() {
  return (
    <div className="relative -mt-7 lg:-mt-15">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        centeredSlides={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
        }}
        loop={true}
        className="swiper w-full h-155"
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              src="/assets/AI.webp"
              alt="Slide 1"
              className="w-full h-full object-cover"
              height={400}
              width={600}
            />

            <div className="absolute inset-0 bg-black/50 flex items-center">
              <div className="max-w-2xl px-10 text-white ml-6">
                <h1 className="text-5xl font-bold mb-4">
                  Turn Your Ideas Into Reality
                </h1>

                <p className="text-lg">
                  Share your innovative ideas with the world, inspire others,
                  and build a creative community together.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              src="/assets/agriculture.webp"
              alt="slide-2"
              className="w-full h-full object-cover"
              height={400}
              width={600}
            />

            <div className="absolute inset-0 bg-black/50 flex items-center">
              <div className="max-w-2xl px-10 text-white ml-6">
                <h1 className="text-5xl font-bold mb-4">
                  Discover Brilliant Projects
                </h1>

                <p className="text-lg">
                  Explore unique ideas from creators around the globe and find
                  inspiration for your next big project.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              src="/assets/meeting.jpeg"
              alt="slide-3"
              className="w-full h-full object-cover"
              height={400}
              width={600}
            />

            <div className="absolute inset-0 bg-black/50 flex items-center">
              <div className="max-w-2xl px-10 text-white ml-6">
                <h1 className="text-5xl font-bold mb-4">
                  Publish, Connect, and Grow
                </h1>

                <p className="text-lg">
                  Post your ideas, receive valuable feedback, and connect with
                  passionate innovators and developers.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div className="swiper-button-next text-white"></div>
        <div className="swiper-button-prev text-white"></div>

        <div className="swiper-pagination"></div>
      </Swiper>

      <Button
        variant="outline"
        className={
          "text-xl p-8 rounded-full text-white hover:bg-amber-300 transition hover:ring-1 font-semibold z-50 absolute left-[50%] translate-x-[-50%] translate-y-[-50%] bottom-10"
        }
        onClick={() => redirect("/ideas")}
      >
        Explore Ideas
      </Button>
    </div>
  );
}
