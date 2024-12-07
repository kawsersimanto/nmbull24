import logo from "@/assets/expat-logo.png";
import Profile from "@/components/profile/Profile";
import Image from "next/image";
import Link from "next/link";

interface MenuItem {
  label: string;
  href: string;
}

const Navbar = () => {
  const menuItems: MenuItem[] = [
    { label: "Dashboard", href: "/" },
    { label: "Country search", href: "/" },
    { label: "Saved profile", href: "/" },
  ];

  return (
    <div className="py-6">
      <div className="container">
        <div className="py-[14px] px-5 bg-white rounded-2xl">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image
                src={logo}
                alt="Expat Girls logo"
                className="w-[108px] h-[80px] object-contain"
              />
            </Link>
            <ul className="flex items-center gap-[56px]">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[18px] font-medium transition-colors duration-300 hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
