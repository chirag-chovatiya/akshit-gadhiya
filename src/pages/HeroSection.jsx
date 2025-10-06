import React from "react";

const HeroSection = () => {
  const HeroData = {
    title: "EXPERT CARE IN EVERY COMPLIANCE",
    companyName: "Care Comply Private Limited",
    description:
      "At Care Comply Private Limited, we deliver Expert Care in Every Compliance, ensuring your business stays aligned with all regulatory requirements. Our dedicated team provides tailored financial and legal solutions to support your business needs. Trust us to handle your compliance, so you can focus on what you do best.",
    bannerImage: "/images/blog/blog4.png", // 👈 your banner image path
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url(${HeroData.bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Optional floating circles */}
      <div className="absolute top-10 left-[-80px] w-72 h-72 bg-blue-200 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-[-80px] right-[-60px] w-96 h-96 bg-custom-blue rounded-full opacity-20 blur-3xl"></div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-2xl md:text-4xl font-title font-extrabold text-custom-blue mb-6 relative inline-block">
          {HeroData.title}
          <span className="absolute left-0 bottom-[-6px] w-full h-1 bg-gradient-to-r from-custom-blue to-custom-green rounded-full animate-pulse"></span>
        </h1>

        <p className="text-lg text-justify md:text-[21px]  text-gray-800 max-w-3xl mx-auto leading-relaxed">
          {HeroData.description.split(HeroData.companyName)[0]}
          <span className="font-semibold text-custom-blue">
            {HeroData.companyName}
          </span>
          {HeroData.description.split(HeroData.companyName)[1]}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
