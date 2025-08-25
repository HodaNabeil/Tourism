import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "./style/landing.css";
import { useState } from "react";
import Header from "@/components/shared/header";

export default function Landing() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      img: "/Hero/Hero-1.jpg",
      title: "Enjoy the ride",
      btn: "Order new",
    },
    {
      img: "/Hero/Hero-2.jpg",
      title: "Adventure without limits",
      btn: "Order new",
    },
    {
      img: "/Hero/Hero-3.jpg",
      title: "Unlimited services",
      btn: "Order new",
    },
  ];

  return (
    <div>
      <div
        style={{ backgroundImage: "url(/Hero/Hero-1.jpg)" }}
        className="h-[80vh] w-full"
      >
        <Header />
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper z-3"
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full h-full">
                <img src={slide.img} alt={`hero-${i}`} />
                <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none"></div>
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-6 px-4">
                  <AnimatePresence mode="wait">
                    {activeIndex === i && (
                      <>
                        <motion.h2
                          key={slide.title}
                          className="   text-3xl sm:text-5xl   lg:text-7xl font-2 text-white text-center"
                          initial={{ opacity: 0, y: 90 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -40 }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                          {slide.title}
                        </motion.h2>
                        <motion.button
                          key={slide.btn}
                          className="bg-orange-500 hover:bg-black text-white font-semibold px-6 py-3 rounded"
                          initial={{ opacity: 0, y: 90 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -40 }}
                          transition={{
                            duration: 0.8,
                            ease: "easeOut",
                            delay: 0.2,
                          }}
                        >
                          {slide.btn}
                        </motion.button>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
