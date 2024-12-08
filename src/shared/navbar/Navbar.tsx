import logo from "@/assets/expat-logo.png";
import Profile from "@/components/profile/Profile";
import { menuItems } from "@/constants/menuItems";
import Image from "next/image";
import Link from "next/link";
import { SideDrawer } from "../side-drawer/SideDrawer";

const Navbar = () => {
  return (
    <div className="py-6 sticky top-0 left-0 right-0">
      <div className="container">
        <div className="py-[14px] px-5 bg-white rounded-2xl">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image
                src={logo}
                alt="Expat Girls logo"
                className="lg:w-[108px] w-[65px] h-[auto] lg:h-[60px] object-contain"
              />
            </Link>
            <ul className="lg:flex hidden items-center gap-[56px]">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-medium transition-colors duration-300 hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3">
              <SideDrawer className="lg:hidden" />
              <Profile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
