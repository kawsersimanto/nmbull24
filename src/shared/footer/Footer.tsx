import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/expat-logo.png";

export function Footer() {
  const SocialIcons = {
    Twitter: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<g clipPath="url(#clip0_543_3144)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#03A9F4"/>
<path d="M19.774 7.18C19.1893 7.43536 18.5708 7.605 17.9377 7.68368C18.6051 7.28789 19.104 6.66087 19.3398 5.92158C18.7151 6.29237 18.0315 6.55351 17.3187 6.69368C16.8819 6.22655 16.3147 5.90167 15.6908 5.7613C15.0668 5.62092 14.4151 5.67155 13.8203 5.9066C13.2255 6.14165 12.7152 6.55023 12.3558 7.07922C11.9964 7.6082 11.8045 8.2331 11.8051 8.87263C11.8028 9.11674 11.8277 9.36034 11.8793 9.59895C10.6113 9.53667 9.37079 9.20761 8.23868 8.63326C7.10658 8.0589 6.10837 7.25218 5.30926 6.26579C4.89852 6.96749 4.77126 7.79956 4.95351 8.59195C5.13576 9.38434 5.61375 10.0772 6.28979 10.5289C5.7852 10.5153 5.29129 10.3805 4.84979 10.1358V10.1705C4.85121 10.906 5.1058 11.6186 5.57075 12.1886C6.03571 12.7585 6.68269 13.1509 7.40295 13.3C7.13038 13.3716 6.84949 13.4067 6.56769 13.4042C6.36477 13.408 6.16203 13.39 5.96295 13.3505C6.1693 13.9831 6.56656 14.5362 7.10011 14.9337C7.63366 15.3313 8.27727 15.5537 8.94242 15.5705C7.81525 16.4516 6.4257 16.9301 4.99505 16.93C4.74014 16.9322 4.48537 16.9174 4.23242 16.8858C5.69117 17.8263 7.39152 18.3232 9.12716 18.3163C14.9929 18.3163 18.1998 13.4579 18.1998 9.24684C18.1998 9.10632 18.1998 8.97053 18.1887 8.83474C18.8133 8.38401 19.3505 7.82328 19.774 7.18Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_543_3144">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
    ),
    Instagram: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 22.5469C17.8249 22.5469 22.5469 17.8249 22.5469 12C22.5469 6.17512 17.8249 1.45312 12 1.45312C6.17512 1.45312 1.45312 6.17512 1.45312 12C1.45312 17.8249 6.17512 22.5469 12 22.5469Z" fill="url(#paint0_linear_543_3150)"/>
  <path d="M14.2398 6.14062H9.76328C7.76641 6.14062 6.14453 7.7625 6.14453 9.75937V14.2359C6.14453 16.2328 7.76641 17.8547 9.76328 17.8547H14.2398C16.2367 17.8547 17.8586 16.2328 17.8586 14.2359V9.75937C17.8586 7.7625 16.2367 6.14062 14.2398 6.14062ZM16.5508 14.2406C16.5508 15.5156 15.5148 16.5562 14.2352 16.5562H9.75859C8.48359 16.5562 7.44297 15.5203 7.44297 14.2406V9.76406C7.44297 8.48906 8.47891 7.44844 9.75859 7.44844H14.2352C15.5102 7.44844 16.5508 8.48438 16.5508 9.76406V14.2406Z" fill="white"/>
  <path d="M11.9992 9.00391C10.3492 9.00391 9.00391 10.3492 9.00391 11.9992C9.00391 13.6492 10.3492 14.9945 11.9992 14.9945C13.6492 14.9945 14.9945 13.6492 14.9945 11.9992C14.9945 10.3492 13.6492 9.00391 11.9992 9.00391ZM11.9992 13.818C10.9961 13.818 10.1805 13.0023 10.1805 11.9992C10.1805 10.9961 10.9961 10.1805 11.9992 10.1805C13.0023 10.1805 13.818 10.9961 13.818 11.9992C13.818 13.0023 13.0023 13.818 11.9992 13.818Z" fill="white"/>
  <path d="M15.2222 9.3324C15.4982 9.28766 15.6856 9.02769 15.6409 8.75173C15.5961 8.47577 15.3362 8.28833 15.0602 8.33306C14.7843 8.3778 14.5968 8.63777 14.6415 8.91373C14.6863 9.18969 14.9463 9.37713 15.2222 9.3324Z" fill="white"/>
  <defs>
    <linearGradient id="paint0_linear_543_3150" x1="3.96933" y1="20.0307" x2="18.9576" y2="5.04239" gradientUnits="userSpaceOnUse">
      <stop stopColor="#FEE411"/>
      <stop offset="0.0518459" stopColor="#FEDB16"/>
      <stop offset="0.1381" stopColor="#FEC125"/>
      <stop offset="0.2481" stopColor="#FE983D"/>
      <stop offset="0.3762" stopColor="#FE5F5E"/>
      <stop offset="0.5" stopColor="#FE2181"/>
      <stop offset="1" stopColor="#9000DC"/>
    </linearGradient>
  </defs>
</svg>
    ),
    LinkedIn: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<g clipPath="url(#clip0_543_3157)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#007AB9"/>
<path d="M19.1707 12.9651V17.9124H16.3024V13.2967C16.3024 12.1377 15.8883 11.3462 14.8497 11.3462C14.0572 11.3462 13.5864 11.8791 13.3785 12.395C13.3029 12.5794 13.2835 12.8355 13.2835 13.0941V17.9122H10.4149C10.4149 17.9122 10.4534 10.0946 10.4149 9.28539H13.2837V10.5079C13.2779 10.5175 13.2698 10.5269 13.2647 10.5361H13.2837V10.5079C13.6649 9.92135 14.3447 9.08282 15.8688 9.08282C17.7559 9.08282 19.1707 10.3158 19.1707 12.9651ZM7.41417 5.12695C6.43296 5.12695 5.79102 5.77104 5.79102 6.61727C5.79102 7.44554 6.41435 8.10824 7.37653 8.10824H7.39514C8.3956 8.10824 9.01765 7.44554 9.01765 6.61727C8.99862 5.77104 8.3956 5.12695 7.41417 5.12695ZM5.9615 17.9124H8.82898V9.28539H5.9615V17.9124Z" fill="#F1F2F2"/>
</g>
<defs>
<clipPath id="clip0_543_3157">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
    ),
    Facebook: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<g clipPath="url(#clip0_543_3162)">
<path d="M24 12C24 17.9897 19.6116 22.9542 13.875 23.8542V15.4688H16.6711L17.2031 12H13.875V9.74906C13.875 8.79984 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9703 4.6875 14.6573 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C4.38844 22.9542 0 17.9897 0 12C0 5.37281 5.37281 0 12 0C18.6272 0 24 5.37281 24 12Z" fill="#1877F2"/>
<path d="M16.6711 15.4688L17.2031 12H13.875V9.74902C13.875 8.80003 14.3399 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9165 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C10.736 23.95 11.3621 24 12 24C12.6379 24 13.264 23.95 13.875 23.8542V15.4688H16.6711Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_543_3162">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
    ),
  };
  return (
    <footer className="bg-white px-6 pb-10 mt-[115px]">
  <div className="container pt-10 flex flex-col md:flex-row justify-between items-center">
    {/* Logo and Description */}
    <div className="text-center md:text-left">
      <Image
        src={logo}
        alt="Expat Logo"
        className="w-[140px] h-auto object-contain mx-auto md:mx-0"
      />
      <p className="max-w-[588px] mt-7 text-[18px] font-medium text-gray-600 mx-auto md:mx-0">
        Scan a Turning Hearts Medallion to learn about and interact with
        those who have passed on. You can also begin documenting the legacy
        you wish to leave behind.
      </p>
      <div className="mt-7 text-center md:text-left">
        <p className="text-sm font-medium text-gray-900">Social Media:</p>
        <div className="flex space-x-4 mt-2 justify-center md:justify-start">
          <Link href="#">{SocialIcons.Twitter}</Link>
          <Link href="#">{SocialIcons.Instagram}</Link>
          <Link href="#">{SocialIcons.LinkedIn}</Link>
          <Link href="#">{SocialIcons.Facebook}</Link>
        </div>
      </div>
    </div>

    {/* Quick Links */}
    <div className="mt-8 md:mt-0">
      <h3 className="text-[18px] font-semibold text-[#1D2939] font-sans text-center md:text-left">
        Quick Link
      </h3>
      <nav className="gap-3 mt-3 font-normal text-center md:text-left text-[18px] text-[#344054] font-sans grid grid-cols-1">
        <Link href="/" className="text-gray-600 hover:text-blue-600">
          Home
        </Link>
        <Link href="/faq" className="text-gray-600 hover:text-blue-600">
          FAQ
        </Link>
        <Link href="/country-search" className="text-gray-600 hover:text-blue-600">
          Country search
        </Link>
        <Link href="/register" className="text-gray-600 hover:text-blue-600">
          Register
        </Link>
      </nav>
    </div>

    {/* Contact Information */}
    <div className="mt-8 md:mt-0 text-center md:text-left">
      <p className="text-gray-600">(316) 555-0116</p>
      <p className="text-gray-600">deanna.curtis@example.com</p>
    </div>
  </div>

  {/* Copyright Section */}
  <div className="mt-12 bg-blue-50 container border-t pt-8 text-center md:text-right">
    <p className="text-sm text-gray-600">
      ©[ {new Date().getFullYear()} ] Ash and Fire. All Rights Reserved.
    </p>
  </div>
</footer>
  );
}
