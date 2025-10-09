import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MessageSquareText, MessageCircle } from "lucide-react";

// Dynamic contact data
const contactData = [
  {
    type: "Phone",
    icon: <Phone className="text-custom-orange text-3xl mb-2" />,
    title: "+91 9571684256",
    subtitle: "07:00 - 19:00 | Monday to Saturday",
  },
  {
    type: "Email",
    icon: <Mail className="text-custom-orange text-3xl mb-2" />,
    title: "contact@careandcomply.com",
    subtitle: "07:00 - 19:00 | Monday to Saturday",
  },
  {
    type: "Whatsapp",
    icon: <MessageCircle className="text-custom-orange text-3xl mb-2" />,
    title: "Whatsapp Us",
    subtitle: "07:00 - 19:00 | Monday to Saturday",
  },
];

const CallToActionSection = () => {
  return (
    <section className="bg-custom-blue py-16 text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8 text-center">
          <h2 className="text-3xl font-semibold">
            Speak to one of our expert team members
          </h2>
          <MessageCircle className="w-10 h-10 text-custom-orange" />
        </div>

        <hr className="border-t border-white my-8 mx-28" />

        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-8 md:space-y-0">
          {contactData.map((contact, index) => (
            <div
              key={index}
              className="relative p-6 w-full md:w-1/4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              {/* Top badge */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-custom-orange text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                {contact.type}
              </div>

              {/* Icon and Content */}
              <div className="flex flex-col items-center mt-6 space-y-3">
                <div className="text-custom-orange text-5xl">
                  {contact.icon}
                </div>
                <p className="text-lg font-bold text-white">{contact.title}</p>
                <p className="text-sm text-gray-300 text-center">
                  {contact.subtitle}
                </p>
              </div>

              {/* Optional floating circle effect */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-custom-blue/30 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-custom-orange/20 rounded-full blur-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
