"use client";

import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { adminSidebarRoutes } from "@/constants/adminSidebarItems";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AdminSidebar = () => {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/dashboard/admin");
  return (
    <div className=" ">

      <div className="flex flex-col gap-2">
 
        {adminSidebarRoutes.map((routes) => {
          const isActive =
            pathname === routes?.link ||
            pathname.startsWith(`${routes?.link}/`);
          const exactMatch = pathname === routes?.link;

          return (
            <Link
              href={routes.link}
              key={routes.link}
              className={`w-full flex items-center gap-2  pl-3  py-4 ${
                isActive && exactMatch
                  ? `${
                      isAdmin ? " bg-gray-600 text-white " : ""
                    }  border-l-4  dark:bg-[#000B1F] border-green-300 overflow-hidden`
                  : "border-0"
              }`}
            >
              {routes.icon && <routes.icon size={20} />}
              {routes.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AdminSidebar;
