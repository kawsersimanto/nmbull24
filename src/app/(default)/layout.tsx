"use client";

import Footer from "@/shared/footer/Footer";
import HomeNavbar from "@/shared/navbar/HomeNavbar";
import Navbar from "@/shared/navbar/Navbar";
import { usePathname } from "next/navigation";

import { ReactNode } from "react";
import { Toaster } from "sonner";


interface children {
  children: ReactNode;
}

const Layout = ({ children }: children) => {
  const path=usePathname()


  return (
    <>
      {path === "/" ? <HomeNavbar /> : <Navbar />}
      {children}
      <Footer/>
      
     
    </>
  );
};

export default Layout;
