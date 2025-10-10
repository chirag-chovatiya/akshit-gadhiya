import React from "react";
import { Phone, Mail } from "lucide-react";

const SPECIAL_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "about-us" },
  { label: "Contact", href: "contact" },
  { label: "Privacy Policy", href: "privacy-policy" },
];

const CONTACT_INFO = [
  {
    icon: <Phone className="h-5 w-5" />,
    text: "+91 8200528355",
    href: "https://wa.me/918200528355",
  },
  {
    icon: <Phone className="h-5 w-5" />,
    text: "+91 9773243414",
    href: "https://wa.me/919773243414",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    text: "contact@careandcomply.com",
    href: "mailto:contact@careandcomply.com",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-white to-gray-100 shadow-lg w-full mt-10">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Company Info */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <img
            className="h-16 w-auto mb-4" // decreased from h-20 to h-12
            src="/images/logo/NewLogo-1.png"
            alt="Care Comply Logo"
          />
          <p className="text-custom-blue text-base leading-relaxed max-w-xs">
            Compliance-focused consulting firm helping businesses grow with
            expert financial and legal solutions. Ensuring seamless compliance
            and sustainable growth.
          </p>
        </div>

        {/* Special Links */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-custom-blue mb-4">
            Special Links
          </h3>
          <ul className="space-y-2 flex flex-col items-center md:items-start">
            {SPECIAL_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-custom-blue hover:text-custom-orange text-lg transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-custom-blue mb-4">
            Contact Us
          </h3>
          <ul className="space-y-3 flex flex-col items-center md:items-start">
            {CONTACT_INFO.map((contact, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <div className="bg-custom-blue p-2 rounded-full text-white">
                  {contact.icon}
                </div>
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-custom-blue hover:text-custom-orange transition-colors duration-300"
                >
                  {contact.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-custom-blue text-sm py-4 border-t border-gray-200">
        &copy; {new Date().getFullYear()} CareComply. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
