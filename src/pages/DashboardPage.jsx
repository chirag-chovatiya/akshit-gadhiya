import React from 'react';
import CommonTable from '../components/comman/CommonTable';

const DashboardPage = () => {
  const columns = [
    { header: 'Username', accessor: 'username' },
    { header: 'Email', accessor: 'email' },
    { header: 'Mobile Number', accessor: 'mobileNumber' },
    { header: 'PAN Number', accessor: 'panNumber' },
    { header: 'Is Login', accessor: 'isLogin' },
    { header: 'Created At', accessor: 'createdAt' },
    { header: 'Action', accessor: 'action' },
  ];

  const data = [
    {
      username: 'John Doe',
      email: 'john@example.com',
      mobileNumber: '9876543210',
      panNumber: 'ABCDE1234F',
      isLogin: 'Yes',
      createdAt: '2025-09-01',
    },
    {
      username: 'Jane Smith',
      email: 'jane@example.com',
      mobileNumber: '9876500000',
      panNumber: 'XYZAB1234K',
      isLogin: 'No',
      createdAt: '2025-09-02',
    },
    {
      username: 'Rahul Patel',
      email: 'rahul@example.com',
      mobileNumber: '9988776655',
      panNumber: 'LMNOP1234Q',
      isLogin: 'Yes',
      createdAt: '2025-09-03',
    },
  ];

  return (
    <div className="flex-1">
      <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>
      <p className="text-gray-700 mb-8">Here's an overview of your users:</p>
      <CommonTable columns={columns} data={data} />
    </div>
  );
};

export default DashboardPage;
