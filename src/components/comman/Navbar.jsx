import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link

const MENU_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact" }, // Update Contact Us link
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close sidebar if screen width >= 768px (md)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderLinks = (isMobile = false) =>
    MENU_ITEMS.map((item) => (
      <Link
        key={item.label}
        to={item.href} // Use to for Link
        className={`text-custom-blue px-3 py-2 rounded-md text-base font-bold ${
          isMobile ? "py-0" : "hover:text-red-600"
        }`}
      >
        {item.label}
      </Link>
    ));

  const renderButtons = () => (
    <>
      <Link
        to="/contact" // Link to the Contact Us page
        className="bg-blue-200 text-custom-blue hover:bg-blue-300 px-4 py-2 rounded-full text-base font-bold"
      >
        Contact Us
      </Link>
      <Link
        to="/login" // Link to the login page
        className="bg-blue-200 text-custom-blue hover:bg-blue-300 px-4 py-2 rounded-full text-base font-bold"
      >
        Login
      </Link>
    </>
  );

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 justify-between md:justify-start">
          <div className="flex-shrink-0">
            <img
              className="max-h-20 max-w-[180px] h-auto w-auto"
              src="/images/logo/NewLogo-1.png"
              alt="Care Comply Logo"
            />
          </div>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex flex-1 justify-center space-x-6">
            {renderLinks()}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {renderButtons()}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-auto">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-custom-blue hover:text-white hover:bg-custom-blue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Toggle menu</span>
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col space-y-2">
          {renderLinks(true)}
          {renderButtons()}
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
        />
      )}
    </nav>
  );
};

export default Navbar;
