import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/profile/tabler_edit.png";
import age from "@/assets/profile/fi_5670747.png";
import zodiac from "@/assets/profile/fi_5796707.png";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function UserProfile() {
  return (
    <div className="container mx-auto mt-[180px]">
      {/* Profile Header */}
      <div className="flex items-start justify-between p-6 gap-4 bg-white">
        <div className="relative flex gap-8 items-center">
          <Avatar className="relative w-[133px] h-[133px]">
            <AvatarImage
              src="https://i.ibb.co.com/nskVT9Z/348s.jpg"
              alt="Profile picture"
            />
            <AvatarFallback>MJ</AvatarFallback>
          </Avatar>
          <div className="absolute border flex cursor-pointer justify-center items-center border-gray-400 bg-white top-20 z-30 left-[107px] rounded-full w-[30.575px] h-[30.575px]">
            <Image src={logo} alt="Edit Profile Icon" />
          </div>
          <div>
            <h1 className="text-[32px] text-[#263238] font-sans font-bold">
              Marry Tale Juliana
            </h1>
            <div className="flex items-center mt-5 justify-between">
              <div className="text-sm text-muted-foreground">
                <span className="block">Country: USA</span>
                <div className="flex gap-5">
                  <div className="flex items-center">
                    <Image src={age} alt="Age Icon" />
                    <p>22 y</p>
                  </div>
                  <div className="flex items-center">
                    <Image src={zodiac} alt="Zodiac Icon" />
                    <p>Aries</p>
                  </div>
                </div>
              </div>
              <div className="text-sm justify-between text-muted-foreground">
                <span className="block">State: Austin</span>
                <span className="block">Accommodation: Yes</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[84px] items-center">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            <Heart className="w-4 h-4 text-red-500" />
            Save profile
          </Button>
          <p>Send message</p>
        </div>
      </div>

      {/* Request References */}
      <div className="">
        <h2 className="text-xl font-sans font-bold mt-[65px]">
          Request References
        </h2>
        <p className="text-[18px] font-normal font-sans mt-5 text-[#475467]">
          Add another dimension of trust to your profile. You can request
          references from your personal network, and the references will appear
          publicly on your{" "}
          <span className="text-[18px] font-medium font-sans text-[#1D2939]">
            Expat Global Girls
          </span>{" "}
          profile to help other members get to know you. You should only request
          references from people who know you well.
        </p>
        <button className="mt-7 bg-primary flex items-center px-6 py-3 gap-3 rounded-xl text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
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

      {/* My Destinations */}
      <section>
        <h2 className="text-xl font-semibold mb-4 mt-[68px]">
          My Destinations
        </h2>
        <div className="grid grid-cols-3 gap-5">
          {[1, 2, 3].map((option) => (
            <div
              key={option}
              className="max-w-[383px] border border-solid border-gray-300 rounded-xl p-[14px]"
            >
              <div className="flex items-center justify-between">
                <div className="text-[#1D2939] font-semibold font-sans text-[18px]">
                  <h2># Option {option}</h2>
                </div>
                <div>
                  <button className="flex items-center justify-center gap-2 px-2 py-1 border border-solid border-gray-300 rounded-lg">
                    <Image src={logo} alt="Update Icon" />
                    Update
                  </button>
                </div>
              </div>
              <hr className="bg-gray-300 mt-3" />
              <div>
                <p className="text-[#344054] font-medium text-[18px] mt-4">
                  My travel type:{" "}
                  <span className="text-[#475467] font-normal">
                    Scouting Trip (1-8 wks)
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
