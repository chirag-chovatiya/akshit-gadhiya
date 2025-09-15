import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNavbar from '../components/dashboard/DashboardNavbar';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';

const DashboardLayout = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <DashboardSidebar
        isMobileSidebarOpen={isMobileSidebarOpen}
        onCloseMobileSidebar={toggleMobileSidebar}
      />
      <div className="flex flex-col flex-1">
        <DashboardNavbar onMenuClick={toggleMobileSidebar} />
        <main className="flex-1 overflow-y-auto">
          <Outlet /> {/* Use Outlet for nested routes */}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
