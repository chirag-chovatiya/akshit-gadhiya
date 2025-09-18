import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Settings, BarChart2, ChevronLeft, ChevronRight, X, FileText } from 'lucide-react';

const SidebarItem = ({ to, icon: Icon, label, active, collapsed, onClick }) => (
  <Link
    to={to}
    className={`flex items-center gap-3 p-3 rounded-lg hover:bg-gray-600 text-white transition-colors ${
      active ? 'bg-gray-700 font-semibold' : ''
    }`}
    onClick={onClick}
  >
    <Icon className="w-5 h-5" />
    {!collapsed && <span>{label}</span>}
  </Link>
);

const DashboardSidebar = ({ isMobileSidebarOpen, onCloseMobileSidebar, collapsed, setCollapsed }) => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile vs desktop dynamically
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize(); // call initially
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    { to: '/dashboard', label: 'Compliance Management', icon: Home },
    { to: '/dashboard/compliance', label: 'Compliance Management', icon: FileText },
    { to: '/dashboard/settings', label: 'Financial Solutions', icon: Settings },
    { to: '/dashboard/reports', label: 'CSR Advisory', icon: BarChart2 },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isMobile && isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-40 z-30"
          onClick={onCloseMobileSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed inset-y-0 left-0 bg-custom-blue text-white flex flex-col p-4 z-40
          transform transition-transform duration-300 ease-in-out
          ${isMobile ? (isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full') : 'translate-x-0'}
          ${collapsed && !isMobile ? 'lg:w-20' : 'lg:w-64'}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          {!collapsed && <span className="text-2xl font-bold">Menu</span>}

          {/* Collapse button for desktop */}
          {!isMobile && setCollapsed && ( // Only show collapse button if setCollapsed is provided (i.e., not mobile)
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="p-1 bg-gray-700 rounded hover:bg-gray-600 transition-colors"
            >
              {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
            </button>
          )}

          {/* Close button for mobile */}
          {isMobile && (
            <button
              onClick={onCloseMobileSidebar}
              className="p-1 bg-gray-700 rounded hover:bg-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col gap-2 flex-1 overflow-y-auto">
          {menuItems.map((item) => (
            <SidebarItem
              key={item.to}
              to={item.to}
              icon={item.icon}
              label={item.label}
              active={location.pathname === item.to}
              collapsed={collapsed}
              onClick={onCloseMobileSidebar}
            />
          ))}
        </nav>
      </div>
    </>
  );
};

export default DashboardSidebar;
