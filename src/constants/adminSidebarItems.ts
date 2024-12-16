import { adminSidebarRoutesType } from "@/types/sidebarItemsType";
import { FaBuysellads } from "react-icons/fa6";
import { LiaHomeSolid } from "react-icons/lia";

export const adminSidebarRoutes: adminSidebarRoutesType[] = [
  {
    label: "Home",
    link: "/dashboard/admin",
    icon: LiaHomeSolid,
  },
  {
    label: "Purchase",
    link: "/dashboard/admin/purchase",
    icon: FaBuysellads,
    subItems: [
      {
        label: "Purchase History",
        link: "/dashboard/admin/purchase",
      },
      {
        label: "Membership",
        link: "/dashboard/admin/purchase/membership-plan",
      },
    ],
  },
];
