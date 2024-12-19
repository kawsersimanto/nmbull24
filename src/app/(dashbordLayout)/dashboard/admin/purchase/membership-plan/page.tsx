"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { membershipData } from "@/constants/membershipPlanData";
import MembershipCard from "@/components/admin/MembershipCard/MembershipCard";
import MemberShipPlan from "@/components/admin/MembershipCard/MemberShipPlan";
import { useAllMembershipPlanQuery } from "@/redux/Api/membershipPlansApi";
import { MembershipPlanType } from "@/types/MembershipPlanType";

const MemberShipPlanPage = () => {
  // Fetching data from API
  const { data, isLoading, error } = useAllMembershipPlanQuery(undefined);
 

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error("Error fetching membership plans:", error);
    return <div>Failed to load membership plans. Please try again later.</div>;
  }

  if (!data || data.length === 0) {
    return <div>No membership plans available.</div>;
  }

  console.log(data?.data);

  return (
    <div className="bg-white rounded-lg p-3">
      <p className="md:text-[24px] text-lg pb-5">
        All Membership Plans & Pricing
      </p>
      <div className="border border-b-[1px] mb-5"></div>
      
      {/* Rendering Membership Cards */}
      {data?.data.map((membership: MembershipPlanType, idx: number) => (
        <MembershipCard membership={membership} key={membership.id || idx} />
      ))}
      {/* Additional Membership Plan Section */}
      <MemberShipPlan />
    </div>
  );
};

export default MemberShipPlanPage;
