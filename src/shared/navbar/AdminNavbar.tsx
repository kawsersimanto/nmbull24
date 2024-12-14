// "use client";

// import Image from "next/image";
// import React from "react";
// import logo from "@/assets/expat-logo.png";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { purachaseSubItems } from "@/constants/subitems";

// const AdminNavbar = () => {
// //   const location = usePathname();
// //   const pathExist = location.startsWith("/dashboard/admin/purchase");

//   const pathname = usePathname();
//   const isAdmin = pathname.startsWith("/dashboard/admin");

//   return (
//     <div className=" min-h-[4rem] py-2 content-center">
//       <div className="flex justify-between items-center">
//         <div className="flex gap-5">
//           <Link href="/dashboard/admin">
//             <Image
//               src={logo}
//               alt=""
//               className="lg:w-[108px] w-[65px] h-[auto] lg:h-[60px] object-contain ml-[100px]"
//             />
//           </Link>
//           <div className={`subitems flex items-center gap-2`}>
//             {pathname === "/dashboard/admin/purchase" &&
//              purachaseSubItems.map(item=>(
//                 <Link href={item.link} className="" key={item.link}>
//                         {
//                             item.label
//                         }
//                 </Link>
//              ))
//             }
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminNavbar;

"use client";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { adminSidebarRoutes } from "@/constants/adminSidebarItems";
import { subItems } from "@/types/sidebarItemsType";

const Header = () => {
  const [subitems, setSubitems] = useState<subItems[]>([]);
  const [activeRoute] = useState("dashboard/admin/purchase");
  const pathname = usePathname(); // Use usePathname for dynamic routing
  // console.log(pathname)

  useEffect(() => {
    // Find the sidebar item that matches the current route
    const activeItem = adminSidebarRoutes.find(
      (item) =>
        (pathname.startsWith(item.link) ||
          item.subItems?.some((si) => si.link == pathname)) &&
        item.subItems
    );

    if (activeItem?.subItems) {
      setSubitems(activeItem.subItems);
    } else {
      setSubitems([]);
    }
  }, [pathname]);

  // const basePath = "/admin/category/"; // Define the base path
  // const pathnam = "/admin/category/allroutes"; // Current path

  // // Ensure pathname starts with basePath
  // const isSubPath = basePath.startsWith(pathnam);

  return (
    <div className=" flex items-center gap-2 h-[81px] flex-shrink-0 md:pl-0 pl-3">
      {subitems.map((item, index) => (
        <Link
          href={item.link}
          className={`${
            pathname == item.link || activeRoute == item.link
              ? "font-extrabold"
              : "font-thin"
          }`}
          key={index}
        >
          {item.label} {/* Ensure label is correct */}
        </Link>
      ))}
    </div>
  );
};

export default Header;
