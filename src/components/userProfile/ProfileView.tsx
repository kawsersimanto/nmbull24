'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Heart, PencilIcon } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/profile/tabler_edit.png";
import age from "@/assets/profile/fi_5670747.png";
import zodiac from "@/assets/profile/fi_5796707.png";
import { useRef, useState } from "react";

export const ProfileView = () => {
       const [avatarSrc, setAvatarSrc] = useState(
         "https://i.ibb.co.com/nskVT9Z/348s.jpg"
       );
       const fileInputRef = useRef<HTMLInputElement>(null);
    
       const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
         const file = event.target.files?.[0];
         if (file) {
           const reader = new FileReader();
           reader.onload = (e) => {
             setAvatarSrc(e.target?.result as string);
           };
           reader.readAsDataURL(file);
         }
       };
    
       const triggerFileInput = () => {
         fileInputRef.current?.click();
       };
  return (
    <div>
         <div className="flex flex-col md:flex-row items-start justify-between p-4 md:p-6 gap-4 bg-white">
        <div className="flex flex-col md:flex-row gap-8 items-center w-full md:w-auto">
          <div className="relative w-32 h-32 md:w-[133px] md:h-[133px] bg-red-500 rounded-full">
            <Avatar className="w-[133px] h-[133px]">
              <AvatarImage src={avatarSrc} alt="Profile picture" />
              <AvatarFallback>MJ</AvatarFallback>
            </Avatar>

            <div
              onClick={triggerFileInput}
              className="absolute border flex cursor-pointer justify-center items-center border-gray-400 bg-white top-20 z-30 left-[107px] rounded-full w-[30.575px] h-[30.575px]"
            >
              <Image src={logo} alt="" />
            </div>
          </div>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            className="hidden"
            accept="image/*"
          />

          <div className="text-center md:text-left">
            <h1 className="text-xl md:text-2xl lg:text-[32px] text-[#263238] font-sans font-bold">
              Marry Tale Juliana
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <div className="text-sm text-muted-foreground">
                <p className="block text-lg md:text-[18px] font-semibold font-sans">
                  Country:{" "}
                  <span className="text-base md:text-[16px] font-medium">
                    USA
                  </span>
                </p>
                <div className="flex justify-center gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <Image src={age} alt="" />
                    <p className="text-[#1D2939] text-sm md:text-base font-semibold">
                      22 y
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src={zodiac} alt="" />
                    <p className="text-[#1D2939] text-sm md:text-base font-semibold">
                      Aries
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-sm flex flex-col justify-between text-muted-foreground">
                <p className="text-lg md:text-[18px] font-semibold font-sans">
                  State:{" "}
                  <span className="text-base md:text-[16px] font-medium">
                    California
                  </span>
                </p>
                <p className="text-lg md:text-[18px] font-semibold font-sans">
                  Accommodation:{" "}
                  <span className="text-base md:text-[16px] font-medium">
                    Yes
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 md:gap-[84px] w-full md:w-auto">
          <button className="flex items-center gap-2 px-4 py-2 md:px-3 md:py-1 bg-[#CECECE] rounded-xl text-[#000] text-sm md:text-base font-normal font-sans">
            <Heart className="w-4 h-4 stroke-none fill-red-500" />
            Save profile
          </button>
          <p className="text-primary underline text-lg md:text-xl font-semibold">
            Send message
          </p>
        </div>
      </div>

      {/* Request References */}
      <div className="">
        <h2 className="text-lg md:text-xl font-sans font-bold mt-10 md:mt-[65px]">
          Request References
        </h2>
        <p className="text-base md:text-[18px] font-normal font-sans mt-5 text-[#475467]">
          Add another dimension of trust to your profile. You can request
          references from your personal network, and the references will appear
          publicly on your{" "}
          <span className="text-base md:text-[18px] font-medium font-sans text-[#1D2939]">
            Expat global girls
          </span>{" "}
          profile to help other members get to know you. You should only request
          references from people who know you well.
        </p>
        <button className="mt-7 bg-primary flex items-center justify-center md:justify-start px-4 md:px-6 py-2 md:py-3 gap-2 md:gap-3 rounded-xl text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 28 28"
            fill="none"
          >
            <g clipPath="url(#clip0_543_4997)">
              <path
                d="M28 14C28 20.988 22.8802 26.7799 16.1875 27.8299V18.0469H19.4496L20.0703 14H16.1875V11.3739C16.1875 10.2665 16.73 9.1875 18.4691 9.1875H20.2344V5.74219C20.2344 5.74219 18.632 5.46875 17.1002 5.46875C13.9027 5.46875 11.8125 7.40687 11.8125 10.9156V14H8.25781V18.0469H11.8125V27.8299C5.11984 26.7799 0 20.988 0 14C0 6.26828 6.26828 0 14 0C21.7317 0 28 6.26828 28 14Z"
                fill="#1877F2"
              />
              <path
                d="M19.4496 18.0469L20.0703 14H16.1875V11.3739C16.1875 10.2667 16.7299 9.1875 18.469 9.1875H20.2344V5.74219C20.2344 5.74219 18.6323 5.46875 17.1005 5.46875C13.9026 5.46875 11.8125 7.40688 11.8125 10.9156V14H8.25781V18.0469H11.8125V27.8299C12.5253 27.9417 13.2558 28 14 28C14.7442 28 15.4747 27.9417 16.1875 27.8299V18.0469H19.4496Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_543_4997">
                <rect width="28" height="28" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Request a Reference
        </button>
      </div>
    </div>
  )
}
