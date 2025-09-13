import React from "react";
import Button from "../components/button";

const HeroSection = () => {
  return (
    <>
      <section className="relative pt-40 pb-32 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="absolute top-10 left-[-80px] w-72 h-72 bg-blue-200 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-[-80px] right-[-60px] w-96 h-96 bg-custom-blue rounded-full opacity-20 blur-3xl"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl font-title font-extrabold text-custom-blue mb-6 relative inline-block">
            EXPERT CARE IN EVERY COMPLIANCE
            <span className="absolute left-0 bottom-[-6px] w-full h-1 bg-gradient-to-r from-custom-blue to-custom-green rounded-full animate-pulse"></span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-[21px] text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
            At{" "}
            <span className="font-semibold text-custom-blue">
              Care Comply Private Limited
            </span>
            , we deliver Expert Care in Every Compliance, ensuring your business
            stays aligned with all regulatory requirements. Our dedicated team
            provides tailored financial and legal solutions to support your
            business needs. Trust us to handle your compliance, so you can focus
            on what you do best.
          </p>
          <Button
            text="Let's Talk"
            onClick={() => alert("Talk button clicked!")}
            className="bg-custom-blue text-white hover:bg-custom-green font-bold py-3 px-10 rounded-full text-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
