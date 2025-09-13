import React, { useState } from 'react';
import DashboardNavbar from '../components/dashboard/DashboardNavbar';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import DashboardPage from '../pages/DashboardPage'; // This will be the default content

const DashboardLayout = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden ${
          isMobileSidebarOpen ? 'block' : 'hidden'
        }`}
        onClick={toggleMobileSidebar}
      ></div>
      <DashboardSidebar
        isMobileSidebarOpen={isMobileSidebarOpen}
        onCloseMobileSidebar={toggleMobileSidebar}
      />
      <div className="flex flex-col flex-1">
        <DashboardNavbar onMenuClick={toggleMobileSidebar} />
        <main className="flex-1 overflow-y-auto">
          <DashboardPage />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
