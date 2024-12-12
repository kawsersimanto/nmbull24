"use client";

import Image from "next/image";
import React from "react";
import logo from "@/assets/expat-logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { purachaseSubItems } from "@/constants/subitems";

const AdminNavbar = () => {
//   const location = usePathname();
//   const pathExist = location.startsWith("/dashboard/admin/purchase");

  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/dashboard/admin");


  return (
    <div className=" min-h-[4rem] py-2 content-center">
      <div className="flex justify-between items-center">
        <div className="flex gap-5">
          <Link href="/dashboard/admin">
            <Image
              src={logo}
              alt=""
              className="lg:w-[108px] w-[65px] h-[auto] lg:h-[60px] object-contain ml-[100px]"
            />
          </Link>
          <div className={`subitems flex items-center gap-2`}>
            {pathname === "/dashboard/admin/purchase" &&
             purachaseSubItems.map(item=>(
                <Link href={item.link} className="" key={item.link}>
                        {
                            item.label
                        }
                </Link>
             ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
