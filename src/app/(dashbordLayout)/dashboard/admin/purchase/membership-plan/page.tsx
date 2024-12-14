"use client"
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
      <p className="md:text-[24px] text-lg pb-5">All Membership Plans & Pricing</p>
      <div className="borer border-b-[1px]"></div>


      {
        membershipData.map((membership,idx)=>(
        <MembershipCard membership={membership} key={idx}/>
        ))
      }

      {/*  */}
      <div className="card border rounded-lg mt-4 p-3">
        <div className="flex gap-2 justify-between flex-shrink-0">
          <p className="text-[20px]">Standard Membership</p>
          <Button variant={"outline"} className="flex items-center gap-2">
          
              <LiaEdit />
              <p>Update</p>
              {/* <UpdateDataDialog/> */}
              {/* Dialog */}
              {/* <Dialog>
                <DialogTrigger>Update</DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Membership plan creation</DialogTitle>
                    <DialogDescription>
                      <div className="flex flex-col gap-1">
                        <h2>Title</h2>
                        <Input />
                      </div>
                      <div className="flex flex-col gap-1 pt-5">
                        <p>Plane touch point</p>
                        <div className="border p-3">
                          <div className="flex items-center gap-1">
                            <div className="flex items-center justify-center bg-[#D9D9D9]  rounded-full p-[2px]">
                              <MdOutlineDone className="text-sm" />
                            </div>

                            <p>Access to our searchable directory</p>
                          </div>

                        
                          <Link
                            href={""}
                            className="flex items-center gap-2 mt-5 text-[#0872BA] "
                          >
                            <LiaPlusSolid /> Add new membership plane
                          </Link>


                        </div>
                      </div>

                      <div className="flex flex-col gap-1 mt-3">
                        <h2>Price</h2>
                        <Input placeholder="Enter price"/>
                      </div>

                      <div className="flex justify-center items-center gap-4 mt-5">
                        <Button className="bg-[#818181C7] px-[30px] rounded-full">Cancel</Button>
                        <Button className="bg-[#0872BA] px-[30px] rounded-full">Submit</Button>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog> */}
       
          </Button>
        </div>

        {/*  */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <div className="flex items-center justify-center bg-[#D9D9D9]  rounded-full p-[2px]">
              <MdOutlineDone className="text-sm" />
            </div>

            <p>Access to our searchable directory</p>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex items-center justify-center bg-[#D9D9D9]  rounded-full p-[2px]">
              <MdOutlineDone className="text-sm" />
            </div>

            <p>Access to our searchable directory</p>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex items-center justify-center bg-[#D9D9D9]  rounded-full p-[2px]">
              <MdOutlineDone className="text-sm" />
            </div>

            <p>Access to our searchable directory</p>
          </div>
        </div>

        {/*  */}
        <p className="pt-5 text-[24px] flex items-center gap-1">
          #12 <span className="text-[16px] content-center"> /month</span>
        </p>
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
              <MdOutlineDone className="text-sm" />
            </div>

            <p>Access to our searchable directory</p>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex items-center justify-center bg-[#D9D9D9]  rounded-full p-[2px]">
              <MdOutlineDone className="text-sm" />
            </div>

            <p>Access to our searchable directory</p>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex items-center justify-center bg-[#D9D9D9]  rounded-full p-[2px]">
              <MdOutlineDone className="text-sm" />
            </div>

            <p>Access to our searchable directory</p>
          </div>
        </div>

        {/*  */}
        <p className="pt-5 text-[24px] flex items-center gap-1">
          #12 <span className="text-[16px] content-center"> /month</span>
        </p>
      </div>

      {/*  */}
      <Link href={""} className="flex items-center gap-2 mt-5 text-[#0872BA] ">
        <LiaPlusSolid /> Add new membership plane
      </Link>
    </div>
  );
};

export default MemberShipPlan;
