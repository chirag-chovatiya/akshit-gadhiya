import React from 'react';

const SidebarWidget: React.FC = () => {
  return (
    <div className="mt-auto mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-center">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Upgrade to Pro</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Unlock all features and get more.</p>
      <button className="mt-4 w-full bg-brand-500 text-white py-2 px-4 rounded-md hover:bg-brand-600 transition-colors duration-200">
        Upgrade
      </button>
    </div>
  );
};

export default SidebarWidget;
