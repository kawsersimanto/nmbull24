"use client";

import Sidebar from "@/components/admin/Sidebar/AdminSidebar";
import AdminNavbar from "@/shared/navbar/AdminNavbar";
// import Header from '@/app/components/Header';
// import Sidebar from '@/app/components/Sidebar';
import React, { ReactNode, useState } from "react";
import { Toaster } from "sonner";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [expand, setExpand] = useState(false);

  return (
    <div className="flex !font-inter md:flex-row flex-col">
      {/* Sidebar */}
      <Sidebar expand={expand} setExpand={setExpand} />

      <div className="w-full ">
        {/* Header */}
        <AdminNavbar expand={expand} />

        {/* Main Content Area */}
        <main
          className={`bg-[#efefef] md:px-10 px-1  py-5 min-h-screen ${
            !expand ? "md:ml-[300px] ml-[60px]" : "md:ml-[300px] ml-[100px]"
          }`}
        >
          {children}
          <Toaster position="top-right" />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
