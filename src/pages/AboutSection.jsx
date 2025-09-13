import React from "react";
import Button from "../components/button";

const AboutSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className="absolute top-[-50px] left-[-50px] w-72 h-72 bg-blue-200 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-[-60px] right-[-60px] w-96 h-96 bg-indigo-200 rounded-full opacity-30 blur-3xl"></div>

      <div className="container mx-auto px-6 py-20 relative z-10 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left Column - Text */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-4xl font-extrabold leading-tight text-custom-blue">
            Expanding your compliance with expert care for unprecedented growth.
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            At <span className="font-semibold text-custom-green">Care Comply Private Limited</span>,  
            is dedicated to providing comprehensive financial and legal solutions tailored specifically for the corporate world. Our mission is to ensure seamless compliance and strategic growth for businesses, leveraging our expertise across various domains.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Care Comply, our approach is encapsulated in our tagline: "Connect - Consult - Comply." We connect with our clients to understand their unique needs, consult with tailored solutions, and ensure they comply with all necessary regulations efficiently.
          </p>
          
        </div>

        {/* Right Column - Image */}
        <div className="md:w-1/2 relative">
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-tr from-blue-400 to-indigo-400 rounded-2xl rotate-12 opacity-20"></div>
          <img
            src="/images/Section-1.png"
            alt="Compliance Solutions"
            className="relative rounded-2xl shadow-xl w-full max-w-md mx-auto transform hover:scale-105 transition duration-500"
          />
          <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-green-400 to-blue-400 rounded-full opacity-30 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
