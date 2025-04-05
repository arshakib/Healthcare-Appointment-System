import DashboardNav from "@/componenet/DashboardNav";
import Sidebar from "@/componenet/Sidebar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className=" lg:ml-64">
        {/* dashboard Navbar */}
        <DashboardNav />

        {/* Page Content */}
        <div className=" bg-[#f0f3fb] min-h-[calc(100vh-61px)]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
