import React from "react";

const CallToActionSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      {/* Background decorative blobs */}
      <div className="absolute top-[-80px] left-[-80px] w-96 h-96 bg-blue-200 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-96 h-96 bg-custom-green rounded-full opacity-20 blur-3xl"></div>

      <div className="relative container mx-auto px-6">
        <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between border border-gray-100">
          {/* Text */}
          <div className="md:w-2/3 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Ensure Full Compliance - Schedule Your Consultation Today!
            </h2>
            <p className="text-lg md:text-xl text-gray-700 opacity-90">
              Get Started Today Ready to ensure your business is fully compliant? Contact us today to schedule a consultation or explore our services further to see how we can assist you.
            </p>
          </div>

          {/* Button */}
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <button className="bg-gradient-to-r from-custom-blue to-custom-green text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg transition transform hover:scale-110">
              Connect With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
