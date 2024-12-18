import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { homeComunityItem } from "@/constants/homeComunityItem";
import Link from 'next/link'


export const HomeComuntiy = () => {

  return (
    <div className="mx-auto  lg:mt-[310px] mt-[100px]">
      <div className="container ">
      <div className="  p-6">
        {homeComunityItem.map((data, index) => (
          <div key={index} className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center justify-center">
            <div className="flex justify-center items-center bg-[#fff] rounded-[24px] p-4">
              <div className="">
              <Image
                                  src={data.img}
                                  alt={data.title}
                                  className="h-[317px] md:w-[431px] w-full "
                                />
              </div>
            </div>

            <div className="flex flex-col gap-4 text-center lg:text-left">
              <div className="space-y-2">
                <div className="w-12 h-2 bg-[#0872BA] mx-auto lg:mx-0" ></div>
                <h1 className="text-xl font-[600] tracking-tighter sm:text-2xl lg:text-4xl text-[#1a2b49] font-sans">
                  {data.title}
                </h1>
              </div>
              <p className="text-gray-600 md:text-lg text-[16px] font-sans">
                {data.description}
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start font-sans">
               <Link href="/membership">
               <Button className="bg-[#0872BA]  text-white"
                                 
                                 >
                                                   Become a Member
                                                   <ArrowRight className="ml-2 h-4 w-4" />
                                                 </Button>
               </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      
    </div>
  );
};
