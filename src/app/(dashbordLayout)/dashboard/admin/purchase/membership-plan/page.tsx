"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import React from "react";
import { LiaEdit, LiaPlusSolid } from "react-icons/lia";
import { MdOutlineDone } from "react-icons/md";
import { membershipData } from "@/constants/membershipPlanData";
import MembershipCard from "@/components/admin/MembershipCard/MembershipCard";

const MemberShipPlan = () => {
  return (
    <div className="bg-white rounded-lg p-3">
      <p className="md:text-[24px] text-lg pb-5">
        All Membership Plans & Pricing
      </p>
      <div className="borer border-b-[1px]"></div>

      {membershipData.map((membership, idx) => (
        <MembershipCard membership={membership} key={idx} />
      ))}

      {/*  */}


      {/*  */}
      <Link href={""} className="flex items-center gap-2 mt-5 text-[#0872BA] ">
        <LiaPlusSolid /> Add new membership plane
      </Link>
    </div>
  );
};

export default MemberShipPlan;
