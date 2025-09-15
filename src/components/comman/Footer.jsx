import React from "react";
import { Phone, Mail } from "lucide-react";

const SPECIAL_LINKS = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Contact", href: "#" },
];

const CONTACT_INFO = [
  {
    icon: <Phone className="h-5 w-5 text-custom-blue mr-2" />,
    text: "+91 8200528355",
  },
  {
    icon: <Phone className="h-5 w-5 text-custom-blue mr-2" />,
    text: "+91 9773243414",
  },
  {
    icon: <Mail className="h-5 w-5 text-custom-blue mr-2" />,
    text: "careandcomply@gmail.com",
  },
];

const Footer = () => {
  return (
    <footer className="bg-white bottom-0 w-full mt-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b pb-8 mb-4">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="mb-4">
              <img
                className="max-h-20 max-w-[180px] h-auto w-auto"
                src="/images/logo/NewLogo-1.png"
                alt="Care Comply Logo"
              />
            </div>

            <p className="text-custom-blue text-lg leading-relaxed max-w-md">
              We are a compliance-focused consulting firm helping businesses
              grow with expert financial and legal solutions. With a proven
              track record, we ensure seamless compliance and sustainable
              growth.
            </p>
          </div>

          {/* Special Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-custom-blue mb-4">
              Special Links
            </h3>
            <ul className="space-y-2">
              {SPECIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-custom-blue hover:text-custom-blue text-lg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-custom-blue mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2">
              {CONTACT_INFO.map((contact, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center md:justify-start text-custom-blue text-lg "
                >
                  {contact.icon}
                  {contact.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-custom-blue text-lg mb-4">
          &copy; Copyright {new Date().getFullYear()}, All Rights Reserved by
          CareComply
        </div>
      </div>
    </footer>
  );
};

export default Footer;
