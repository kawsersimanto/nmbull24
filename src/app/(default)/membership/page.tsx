"use client"
import MembershipCard from "@/components/membership/MembershipCard";
import { membershipPlans } from "@/constants/membershipData";


export default function Membership() {
  return (
    <div className="rleative   mx-auto mt-[164px] p-6">
     <div className="container">
      <div className="bg-[#fff] p-4 routnded-lg">
      <h1 className="lg:text-[48px] lg:2xl font-semibold text-[#1a1a1a] leading-[60px] mb-4">
        Membership Plans & Pricing
      </h1>
      
      <p className="text-[#000] text-[18px]  mb-10">
        We want to make sure that our platform is accessible for women at every stage of their journey. That&#39;s why we offer two flexible membership plans:
      </p>

      <div className="space-y-6 ">
        {membershipPlans.map((plan) => (
          <MembershipCard key={plan.name} plan={plan} />
        ))}
      </div>
      </div>
     
     </div>
    </div>
  );
}
