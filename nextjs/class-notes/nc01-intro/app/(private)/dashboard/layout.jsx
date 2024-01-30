import Sidebar from "@/components/Sidebar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      {/* Include shared UI here e.g. a header or sidebar */}
      <Sidebar />

      {children}
    </div>
  );
};

export default DashboardLayout;
