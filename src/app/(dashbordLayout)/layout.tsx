"use client";

import Sidebar from "@/components/admin/Sidebar/AdminSidebar";
import AdminNavbar from "@/shared/navbar/AdminNavbar";
// import Header from '@/app/components/Header';
// import Sidebar from '@/app/components/Sidebar';
import React, { ReactNode } from "react";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="flex md:flex-row flex-col">
      {/* Sidebar */}
      <Sidebar />

      <div className="w-full ">
        {/* Header */}
        <AdminNavbar />

        {/* Main Content Area */}
        <main className="bg-[#efefef] px-10 py-5 ">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
