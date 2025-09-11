import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNavbar from '../../components/admin-dashboard/header/Header';
import AppSidebar from '../../components/layout/AppSidebar';

const DashboardPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <AppSidebar /> 
      <div className="flex-1 flex flex-col">
        <DashboardNavbar />
        <main className="flex-1 p-6">
          <Outlet /> {/* This will render MainDashboardContent or BlogContent */}
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
