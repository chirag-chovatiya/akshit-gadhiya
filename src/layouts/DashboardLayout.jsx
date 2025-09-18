import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";

const DashboardLayout = () => {
   const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false); // 👈 new state

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="hidden md:flex md:w-auto">
        {/* Desktop Sidebar */}
        <DashboardSidebar
          collapsed={collapsed}
          setCollapsed={setCollapsed} // 👈 pass control to sidebar
        />
      </div>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-40 flex md:hidden transition-transform duration-300 ${
          isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Background overlay */}
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={toggleMobileSidebar}
        ></div>

        {/* Sidebar content */}
        <div className="relative w-64 bg-white shadow-lg h-full z-50">
          <DashboardSidebar
            isMobileSidebarOpen={isMobileSidebarOpen}
            onCloseMobileSidebar={toggleMobileSidebar}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex flex-col flex-1 transition-all duration-300 ${collapsed ? 'lg:ml-20' : 'lg:ml-64'}`}>
        {/* Navbar with hamburger menu */}
        <DashboardNavbar onMenuClick={toggleMobileSidebar} collapsed={collapsed} />

        <main className="flex-1 overflow-y-auto p-4 pt-16"> {/* Added pt-16 to account for fixed navbar */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
