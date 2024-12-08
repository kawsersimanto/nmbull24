"use client";

import HomeNavbar from "@/shared/navbar/HomeNavbar";
import Navbar from "@/shared/navbar/Navbar";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface children {
  children: ReactNode;
}

const Layout = ({ children }: children) => {
  const path = usePathname();

  return (
    <>
      {path === "/" ? <HomeNavbar /> : <Navbar />}
      {children}
    </>
  );
};

export default Layout;
