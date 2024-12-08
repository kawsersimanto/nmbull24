import Navbar from "@/shared/navbar/Navbar";
import { ReactNode } from "react";

interface children {
  children: ReactNode;
}

const Layout = ({ children }: children) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
