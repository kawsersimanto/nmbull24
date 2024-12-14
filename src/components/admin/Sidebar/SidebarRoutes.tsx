"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const SidebarRoutes = ({ routes }: {routes:any}) => {
  const pathname = usePathname();

  // Check if this route or any of its subItems is active
  const isActive =
    pathname === routes.link ||
    routes.subItems?.some((subItem:any) => pathname.startsWith(subItem.link));

  return (
    <Link
      href={routes.link}
      className={`w-full py-2 pl-6 border-l-4 ${
        isActive
          ? "border-l-[#0076EF] bg-[linear-gradient(90deg,_rgba(0,_118,_239,_0.27)_0%,_rgba(0,_118,_239,_0.06)_100%)]"
          : ""
      }`}
      style={{}}
      key={routes.link}
    >
      <p className="flex items-center gap-2">
        <routes.icon />
        {routes.label}
      </p>
    </Link>
  );
};

export default SidebarRoutes;
