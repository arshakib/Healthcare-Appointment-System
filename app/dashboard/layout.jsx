import DashboardNav from '@/componenet/DashboardNav';
import Sidebar from '@/componenet/Sidebar';
import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* dashboard Navbar */}
        <DashboardNav/>

        {/* Page Content */}
        <main className="p-4">{children}</main>
      </div>
    </div>
    );
};

export default DashboardLayout;