import { Button } from "@/components/ui/button";
import Link from "next/link";

import React from "react";
import { LiaEdit, LiaPlusSolid } from "react-icons/lia";
import { MdOutlineDone } from "react-icons/md";

const MemberShipPlan = () => {
  return (
    <div className="bg-white rounded-lg p-3">
      <p className="text-[24px] pb-5">All Membership Plans & Pricing</p>
      <div className="borer border-b-[1px]"></div>

      {/*  */}
      <div className="card border rounded-lg mt-4 p-3">
        <div className="flex gap-2 justify-between flex-shrink-0">
          <p className="text-[20px]">Standard Membership</p>
          <Button variant={"outline"}>
            <Link href={""} className="flex items-center gap-2">
              <LiaEdit />
              <p>Update</p>
            </Link>
          </Button>
        </div>

        {/*  */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <div className="flex items-center justify-center bg-[#D9D9D9]  rounded-full p-[2px]">
              <MdOutlineDone className="text-sm"/>
            </div>

            <p>Access to our searchable directory</p>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex items-center justify-center bg-[#D9D9D9]  rounded-full p-[2px]">
              <MdOutlineDone className="text-sm"/>
            </div>

            <p>Access to our searchable directory</p>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex items-center justify-center bg-[#D9D9D9]  rounded-full p-[2px]">
              <MdOutlineDone className="text-sm"/>
            </div>

            <p>Access to our searchable directory</p>
          </div>
        </div>

        {/*  */}
        <p className="pt-5 text-[24px] flex items-center gap-1">#12 <span className="text-[16px] content-center"> /month</span></p>
      </div>
      <div className="card border rounded-lg mt-4 p-3">
        <div className="flex gap-2 justify-between flex-shrink-0">
          <p className="text-[20px]">Standard Membership</p>
          <Button variant={"outline"}>
            <Link href={""} className="flex items-center gap-2">
              <LiaEdit />
              <p>Update</p>
            </Link>
          </Button>
        </div>

        {/*  */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <div className="flex items-center justify-center bg-[#D9D9D9]  rounded-full p-[2px]">
              <MdOutlineDone className="text-sm"/>
            </div>

            <p>Access to our searchable directory</p>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex items-center justify-center bg-[#D9D9D9]  rounded-full p-[2px]">
              <MdOutlineDone className="text-sm"/>
            </div>

            <p>Access to our searchable directory</p>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex items-center justify-center bg-[#D9D9D9]  rounded-full p-[2px]">
              <MdOutlineDone className="text-sm"/>
            </div>

            <p>Access to our searchable directory</p>
          </div>
        </div>

        {/*  */}
        <p className="pt-5 text-[24px] flex items-center gap-1">#12 <span className="text-[16px] content-center"> /month</span></p>
      </div>

      {/*  */}
      <Link href={""} className="flex items-center gap-2 mt-5 text-[#0872BA] "><LiaPlusSolid/> Add new membership plane</Link>
    </div>
  );
};

export default MemberShipPlan;
