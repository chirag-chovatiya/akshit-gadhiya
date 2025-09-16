import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const DashboardNavbar = ({ onMenuClick, sidebarCollapsed  }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const user = {
    name: "John Doe",
    image: "" // empty string means no image
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Left: Menu button */}
      <div className="flex items-center gap-4">
        <button onClick={onMenuClick} className="lg:hidden focus:outline-none">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Right: profile */}
      <div
        className={`relative transition-all duration-300 ${
          sidebarCollapsed ? 'ml-20' : 'ml-64' // adjust according to sidebar width
        }`}
      >
        <button onClick={toggleDropdown} className="focus:outline-none">
          {user.image ? (
            <img
              src={user.image}
              alt="Profile"
              className="w-10 h-10 rounded-full cursor-pointer"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-white font-bold cursor-pointer">
              {getInitials(user.name)}
            </div>
          )}
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
            <Link
              to="/profile"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setDropdownOpen(false)}
            >
              Profile
            </Link>
            <Link
              to="/"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setDropdownOpen(false)}
            >
              Logout
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default DashboardNavbar;
