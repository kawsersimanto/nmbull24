// "use client";

// import React from "react";

// import { adminSidebarRoutes } from "@/constants/adminSidebarItems";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const AdminSidebar = () => {
//   const pathname = usePathname();
//   const isAdmin = pathname.startsWith("/dashboard/admin");
//   return (
//     <div className=" ">

//       <div className="flex flex-col gap-2">

//         {adminSidebarRoutes.map((routes) => {
//           const isActive =
//             pathname === routes?.link ||
//             pathname.startsWith(`${routes?.link}/`);
//           const exactMatch = pathname === routes?.link;

//           return (
//             <Link
//               href={routes.link}
//               key={routes.link}
//               className={`w-full flex items-center gap-2  pl-3  py-4 ${
//                 isActive && exactMatch
//                   ? `${
//                       isAdmin ? " bg-gray-600 text-white " : ""
//                     }  border-l-4  dark:bg-[#000B1F] border-green-300 overflow-hidden`
//                   : "border-0"
//               }`}
//             >
//               {routes.icon && <routes.icon size={20} />}
//               {routes.label}
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default AdminSidebar;



import { adminSidebarRoutes } from "@/constants/adminSidebarItems";
import Image from "next/image";
import SidebarRoutes from "./SidebarRoutes";
import logo from "@/assets/expat-logo.png";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";


const Sidebar = () => {
  return (
    <div className=" w-[300px] md:block hidden relative h-[calc(100vh-20px)] overflow-hidden shrink-0 " id="adminSidebar">
      <div className="logo py-5">
        <Image
          className="h-[68px] w-[92px] mx-auto object-fill "
          src={logo}
          alt="Image Description"
          width={150}
          height={150}
          unoptimized
        />
      </div>


      {/* border */}
      <div className="border-b border"></div>


        {/* sidebar routes */}
      <div className="items flex flex-col gap-2 pt-5">
        {adminSidebarRoutes.map((item) => (
          <SidebarRoutes routes={item} key={item.link} />
        ))}
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <Button className="flex items-center gap-2" variant={"link"} ><LogOut/> Logout</Button>
      </div>
    </div>
  );
};

export default Sidebar;
