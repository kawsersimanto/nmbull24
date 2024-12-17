"use client";

import Wizard from "@/components/formWizerd/Wizard";
import WizardSmall from "@/components/formWizerd/WizardSmall";

import { ReactNode } from "react";

interface children {
  children: ReactNode;
}

const Layout = ({ children }: children) => {


  return (
    <>
    
    <div className="container mt-[137px]">
        
          
        <div className="md:block hidden">
        <div className="grid grid-cols-12 gap-4">
          
          <div className=" md:col-span-10">
         
          {children}
          </div>
  
          {/* Second section (3 columns wide) */}
          <div className=" md:col-span-2">
          <Wizard/>
          </div>
        </div>
        </div>
        <div className="md:hidden block">
          <div>
          <WizardSmall/>
          </div>
          <div>
          {children}
          </div>


        </div>
       </div>

    </>
  );
};

export default Layout;
