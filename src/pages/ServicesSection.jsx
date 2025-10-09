import React from "react";
import {
  ShieldCheck,
  DollarSign,
  HeartHandshake,
  Scale,
  MessageSquare,
  Mail,
} from "lucide-react";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group [perspective:1000px] cursor-pointer"
              >
                <div
                  className="relative h-full bg-white rounded-2xl shadow-lg border border-gray-100 
                  transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(15deg)]
                  hover:shadow-2xl"
                >
                  {/* Gradient overlay for depth */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition duration-500 rounded-2xl`}
                  />

                  <div className="relative p-8 flex flex-col h-full">
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r ${service.color} text-white shadow-md mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon size={28} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 flex-grow group-hover:text-gray-700 transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Button */}
                    <div className="mt-6 flex space-x-4">
                      <a
                        href="mailto:contact@careandcomply.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-custom-blue text-white hover:bg-custom-orange transition-all duration-300 shadow-md"
                      >
                        <i className="fa-solid fa-envelope text-xl"></i>
                      </a>

                      <a
                        href="https://wa.me/918200528355"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white hover:bg-green-600 transition-all duration-300 shadow-md"
                      >
                        <i className="fa-brands fa-whatsapp text-2xl"></i>
                      </a>
                    </div>
                  </div>
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
