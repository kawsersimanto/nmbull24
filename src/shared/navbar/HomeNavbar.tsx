"use client"
import logo from "@/assets/expat-logo.png";
import { menuItems } from "@/constants/menuItems";
import Image from "next/image";
import Link from "next/link";
import { SideDrawer } from "../side-drawer/SideDrawer";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store"; // Assuming this is the path to your store
import Profile from "@/components/profile/Profile";
import { useEffect, useState } from "react";

const HomeNavbar = () => {
  const path = usePathname();
  const isBlack = path.startsWith('/basic');
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Get the user data from Redux store
  const user = useSelector((state: RootState) => state.Auth);

  useEffect(() => {
    const handleScroll = () => {
        // Check if user has scrolled past the banner (100vh)
        if (window.scrollY >= 100 ) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

  
  return (
    <div className="fixed top-6 left-0 right-0 z-[999]">
      <div className="container">
        <div className="py-[14px] px-5 bg-[rgba(244,244,244,0.20)] backdrop-blur-[12px] rounded-2xl">
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
                    className={`font-medium transition-colors duration-300 ${isBlack ? "text-gray-700" : "text-white"}  hover:text-primary`}
                  >
                    <span className={`${isScrolled ? "text-black" : "text-white" }`}> 

                    {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3">
              <SideDrawer className="lg:hidden" />
              
              {/* Show Profile if logged in, otherwise show Login */}
              {user?.token ? (
            <Profile/>
               
              ) : (
                <Link
                  href="/login"
                  className="bg-white py-[10px] lg:px-6 px-4 rounded-xl lg:font-semibold font-medium text-primary"
                >
                  Log in
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;
