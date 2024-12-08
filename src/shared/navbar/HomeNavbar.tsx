import logo from "@/assets/expat-logo.png";
import { menuItems } from "@/constants/menuItems";
import Image from "next/image";
import Link from "next/link";

const HomeNavbar = () => {
  return (
    <div className="fixed top-6 left-0 right-0">
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
                    className="font-medium transition-colors duration-300 text-white hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/login"
              className="bg-white py-[10px] px-6 rounded-xl font-semibold text-primary"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;
