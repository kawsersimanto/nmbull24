"use client";
import Loader from "@/components/Loader";
import MembershipCard from "@/components/membership/MembershipCard";
import { useMembershipQuery } from "@/redux/Api/membershipApi";
import { membershipPlan } from "@/types/membershipPlan";

export default function Membership() {
  const { data, isLoading, error } = useMembershipQuery(null);



  return (
    <>
       <Loader isOpen={isLoading} message="Saving destinations..." />
  
    <div className="relative mx-auto mt-[164px] p-6">
      <div className="container">
        <div className="bg-[#fff] p-4 rounded-lg">
          <h1 className="lg:text-[48px] font-semibold text-[#1a1a1a] leading-[60px] mb-4">
            Membership Plans & Pricing
          </h1>

          <p className="text-[#000] text-[18px] mb-10">
            We want to make sure that our platform is accessible for women at every stage of their journey. That&#39;s why we offer two flexible membership plans:
          </p>

          <div className="space-y-6">
            {data?.data?.map((plan: membershipPlan) => (
              <MembershipCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
