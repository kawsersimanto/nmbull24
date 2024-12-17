"use client";

import Wizard from "@/components/formWizerd/Wizard";

import { ReactNode } from "react";

interface children {
  children: ReactNode;
}

const Layout = ({ children }: children) => {


  return (
    <>
    
    <div className="container mt-[188px]">
        
          
         <div className="grid grid-cols-12 gap-4">
          
           <div className="col-span-12 md:col-span-10">
          
           {children}
           </div>
   
           {/* Second section (3 columns wide) */}
           <div className="col-span-12 md:col-span-2">
           <Wizard/>
           </div>
         </div>
       </div>

    </>
  );
};

export default Layout;
