import React from "react";
import { ShieldCheck, DollarSign, HeartHandshake, Scale } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Compliance Management",
      description:
        "We ensure your business adheres to all compliance requirements, offering end-to-end support.",
      icon: ShieldCheck,
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Financial Solutions",
      description:
        "Expert advice on accounting, tax planning, and financial management for sustainable growth.",
      icon: DollarSign,
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "CSR Advisory & Implementation",
      description:
        "Guidance on CSR initiatives with trusted NGOs for impactful implementation and reporting.",
      icon: HeartHandshake,
      color: "from-yellow-500 to-orange-600",
    },
    {
      title: "Legal Support",
      description:
        "Robust legal services to help you navigate corporate laws and regulations with confidence.",
      icon: Scale,
      color: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition duration-500`}
                />

                <div className="relative p-8 flex flex-col h-full">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r ${service.color} text-white shadow-md mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon size={28} />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 flex-grow group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Button */}
                  <a
                    href="/contact"
                    className="mt-6 inline-block bg-gray-900 text-white px-5 py-2 rounded-lg 
             transition-colors duration-300 text-center 
             hover:bg-[#49A947]"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
