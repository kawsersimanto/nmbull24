import { adminSidebarRoutesType } from "@/types/sidebarItemsType";
import { FaBuysellads } from "react-icons/fa6";
import { LiaHomeSolid } from "react-icons/lia";
import home from "@/assets/Vector.png"
import purchaseIcon from "@/assets//Frame.png"

export const adminSidebarRoutes: adminSidebarRoutesType[] = [
  {
    label: "Home",
    link: "/dashboard/admin",
    icon: home,
  },
  {
    label: "Purchase",
    link: "/dashboard/admin/purchase",
    icon: purchaseIcon,
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
