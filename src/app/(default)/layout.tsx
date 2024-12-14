"use client";

import HomeNavbar from "@/shared/navbar/HomeNavbar";
import { ReactNode } from "react";

interface children {
  children: ReactNode;
}

const Layout = ({ children }: children) => {


  return (
    <>
      {/* {path === "/" ? <HomeNavbar /> : <Navbar />} */}
      <HomeNavbar/>
      {children}
    </>
  );
};

export default Layout;
