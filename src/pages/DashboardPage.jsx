import React from 'react';
import CommonTable from '../components/comman/CommonTable';

const DashboardPage = () => {
  const columns = [
    { header: 'Service Name', accessor: 'name' },
    { header: 'Status', accessor: 'status' },
    { header: 'Last Updated', accessor: 'lastUpdated' },
  ];

  const data = [
    { name: 'Compliance Management', status: 'Active', lastUpdated: '2025-09-01' },
    { name: 'Financial Solutions', status: 'Pending', lastUpdated: '2025-08-25' },
    { name: 'CSR Advisory', status: 'Completed', lastUpdated: '2025-09-05' },
    { name: 'Legal Support', status: 'Active', lastUpdated: '2025-09-03' },
  ];

  return (
    <div className="flex-1 p-6 ">
      <h1 className="text-3xl font-bold mb-6">Welcome to your Dashboard!</h1>
      <p className="text-gray-700 mb-8">Here's an overview of your services:</p>
      <CommonTable columns={columns} data={data} />
    </div>
  );
};

export default DashboardPage;
