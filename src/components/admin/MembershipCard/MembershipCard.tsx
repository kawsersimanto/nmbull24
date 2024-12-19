"use client";

import { Button } from "@/components/ui/button";
import { MembershipPlanType } from "@/types/MembershipPlanType";
import React, { useState } from "react";
import { LiaEdit } from "react-icons/lia";
import { MdOutlineDone } from "react-icons/md";
import UpdateDataDialog from "../Dialogs/UpdateDataDialogs/UpdateDataDialog";

interface Props {
  membership: MembershipPlanType;
}

const MembershipCard = ({ membership }: Props) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  // Handle dialog visibility
  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const handleUpdateSubmit = (updatedData: MembershipPlanType) => {
    console.log("Updated Data:", updatedData);
    closeDialog();
  };

  return (
    <div className="card border rounded-lg mt-4 p-3">
      {/* Title and Update Button */}
      <div className="flex justify-between items-center">
        <p className="md:text-[20px] text-lg font-semibold">
          {membership.name}
        </p>
        <Button
          variant="outline"
          className="flex items-center gap-2"
          onClick={openDialog}
        >
          <LiaEdit className="text-lg" />
          Update
        </Button>
      </div>

      {/* Features List */}
      <div className="flex flex-col gap-2 mt-4">
        {membership.list.map((feature, idx) => (
          <div className="flex items-center gap-2" key={idx}>
            <div className="flex items-center justify-center bg-[#D9D9D9] rounded-full p-[2px]">
              <MdOutlineDone className="text-sm" />
            </div>
            <p className="text-sm">{feature.title}</p>
          </div>
        ))}
      </div>

      {/* Price Section */}
      <p className="pt-5 text-[24px] font-medium flex items-center gap-1">
        #{membership.amount}
        <span className="text-[16px] font-normal"> /month</span>
      </p>

      {/* Update Membership Plan Dialog */}
      <UpdateDataDialog
        isOpen={isDialogOpen}
        onClose={closeDialog}
        onSubmit={handleUpdateSubmit}
        initialData={{
          id: membership.id,
          name: membership.name,
          list: membership.list,
          amount: membership.amount,
        }}
      />
    </div>
  );
};

export default MembershipCard;
