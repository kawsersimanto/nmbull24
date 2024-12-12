"use client";

import AdminSidebar from "@/components/admin/Sidebar/Sidebar";
import { Button } from "@/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import AdminNavbar from "@/shared/navbar/AdminNavbar";
import HomeNavbar from "@/shared/navbar/HomeNavbar";
import Navbar from "@/shared/navbar/Navbar";
import { Ghost, LogOut } from "lucide-react";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface children {
  children: ReactNode;
}

const AdminLaout = ({ children }: children) => {
  const path = usePathname();

  return (
    <>
      <div className="">
        {/* Dashboard Header */}
        {/* <Navbar /> */}

        <AdminNavbar />

        <ResizablePanelGroup
          direction="horizontal"
          className="min-h-[100vh] max-w-full rounded-lg border md:min-w-[450px]"
        >
          <ResizablePanel className="relative h-[100vh] pt-5" defaultSize={15}>
            <AdminSidebar />
            <div className="absolute bottom-32 flex justify-center  w-full gap-2  z-40">
              <Button className="flex items-center gap-2" variant={"ghost"}>
                {" "}
                <span>
                  <LogOut />
                </span>{" "}
                Logout
              </Button>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={75}>
            <div className=" p-6 bg-[#d9d9d9]">
              <span className="font-semibold">{children}</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  );
};

export default AdminLaout;
