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

const DashboardSidebar = ({ isMobileSidebarOpen, onCloseMobileSidebar }) => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024); // lg breakpoint

  // Detect window resize
  useEffect(() => {
  const handleResize = () => {
    const mobile = window.innerWidth < 1024;

    if (mobile && !isMobile) {
      setCollapsed(false); 
      onCloseMobileSidebar(); 
    }

    if (!mobile && isMobile) {
      setCollapsed(false); 
    }

    setIsMobile(mobile);
  };

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, [isMobile, onCloseMobileSidebar]);



  const menuItems = [
    { to: '/dashboard', label: 'Dashboard Home', icon: Home },
    { to: '/dashboard/compliance', label: 'Compliance Management', icon: FileText },
    { to: '/dashboard/settings', label: 'Financial Solutions', icon: Settings },
    { to: '/dashboard/reports', label: 'CSR Advisory', icon: BarChart2 },
    { to: '/dashboard/reports', label: 'Legal Support', icon: BarChart2 },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isMobileSidebarOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={onCloseMobileSidebar}
        />
      )}

      <div
        className={`fixed min-h-screen inset-y-0 left-0 bg-gray-800 text-white flex flex-col p-4 h-screen transition-all duration-300 z-40
        ${isMobileSidebarOpen && isMobile ? 'translate-x-0' : '-translate-x-full'}
        lg:relative lg:translate-x-0 ${collapsed ? 'lg:w-20' : 'lg:w-64'}`}
      >
        <div className="flex items-center justify-between mb-6">
          {!collapsed && <span className="text-2xl font-bold">Menu</span>}

          {/* Collapse button (Desktop) */}
          {!isMobile && (
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="p-1 bg-gray-700 rounded hover:bg-gray-600 transition-colors hidden lg:block"
            >
              {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
            </button>
          )}

          {/* Close button (Mobile) */}
          {isMobile && (
            <button
              onClick={onCloseMobileSidebar}
              className="p-1 bg-gray-700 rounded hover:bg-gray-600 transition-colors lg:hidden"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        <nav className="flex flex-col gap-2">
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
