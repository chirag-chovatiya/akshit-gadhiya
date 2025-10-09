import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const HeroSection = () => {
  const slides = [
    {
      title: "EXPERT CARE IN EVERY COMPLIANCE",
      companyName: "Care Comply Private Limited",
      description:
        "At Care Comply Private Limited, we deliver Expert Care in Every Compliance, ensuring your business stays aligned with all regulatory requirements. Our dedicated team provides tailored financial and legal solutions to support your business needs. Trust us to handle your compliance, so you can focus on what you do best.",
      image: "/images/blog/blog4.png",
    },
    {
      title: "YOUR TRUSTED PARTNER IN BUSINESS COMPLIANCE",
      companyName: "Care Comply Private Limited",
      description:
        "We simplify compliance so you can focus on growth. Our experts ensure your business meets all regulatory standards efficiently and accurately.",
      image: "/images/blog/blog2.png",
    },
    {
      title: "STREAMLINED FINANCIAL & LEGAL SOLUTIONS",
      companyName: "Care Comply Private Limited",
      description:
        "Our tailored financial and legal services are designed to help your business operate confidently and compliantly.",
      image: "/images/blog/blog3.png",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    beforeChange: (_, next) => setActiveSlide(next),
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <Slider {...settings} className="h-screen">
        {slides.map((slide, index) => (
          <div key={index} className="relative h-screen">
            {/* Background with gradient overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-1000 scale-105"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/60 to-blue-200/50 backdrop-blur-[1px]"></div>

            {/* Floating gradient orbs */}
            <div className="absolute top-10 left-[-60px] w-64 h-64 bg-gradient-to-br from-custom-blue/40 to-blue-400/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-[-60px] right-[-80px] w-80 h-80 bg-gradient-to-tr from-custom-orange/40 to-yellow-300/30 rounded-full blur-3xl animate-pulse"></div>

            {/* Glass card content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl text-center bg-white/40 backdrop-blur-md border border-white/50 shadow-xl rounded-3xl p-8 md:p-12"
              >
                <h1
                  key={activeSlide}
                  className="text-2xl md:text-4xl font-title font-extrabold text-custom-blue mb-6 relative inline-block leading-relaxed overflow-hidden animate-typing-multiline"
                >
                  {slide.title}
                  <span className="absolute left-0 bottom-[-10px] w-full h-1 bg-gradient-to-r from-custom-blue to-custom-orange rounded-full animate-pulse"></span>
                </h1>

                <p className="text-lg text-justify md:text-[21px]  text-gray-800 max-w-3xl mx-auto leading-relaxed">
                  {slide.description.split(slide.companyName)[0]}
                  <span className="font-semibold text-custom-blue">
                    {slide.companyName}
                  </span>
                  {slide.description.split(slide.companyName)[1]}
                </p>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSection;
