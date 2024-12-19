"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { membershipSchema } from "@/schema/MembershipPlanSchema";
import { MembershipPlanType } from "@/types/MembershipPlanType";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { LiaPlusSolid } from "react-icons/lia";
import { MdOutlineDone } from "react-icons/md";
import { toast } from "sonner";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const NewMembershipPlanDialog = ({ isOpen, onClose }: Props) => {
  const [featuresList, setFeaturesList] = useState<string[]>([]);

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm<MembershipPlanType>({
    resolver: zodResolver(membershipSchema),
    defaultValues: {
      name: "",
      amount: "",
      list: [],
    },
  });

  const handleAddFeatures = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const inputElement = document.getElementById(
      "newFeatureInput"
    ) as HTMLInputElement | null;



    if (inputElement) {
      const newFeature = inputElement.value.trim();
      if (newFeature.length < 5) {
        return toast.error("Feature must have at least 5 characters");
      }

      // Get current features from form state
      const currentFeatures = getValues("list");

      // Update both form state and local state
      const updatedFeatures = [
        ...currentFeatures,
        { title: newFeature }, // Align with MembershipPlanType's `list` field
      ];
      setValue("list", updatedFeatures); // Update react-hook-form state
      setFeaturesList(updatedFeatures.map((f) => f.title)); // Update local state for re-render

      inputElement.value = ""; 
      
    }
  };

  const onsubmit: SubmitHandler<MembershipPlanType> = (data) => {
    const membershipPlanData = {
      name: data.name,
      amount: data.amount,
      features: featuresList,
    };

    console.log("Submitted Data:", membershipPlanData);

    reset();
    setFeaturesList([]);
    onClose();
  };

  return (
    <Dialog open={isOpen}>
      <DialogContent>
        <div className="absolute top-3 right-3" onClick={onClose}>
          <X className="h-4 w-4 cursor-pointer" />
        </div>
        <DialogHeader>
          <DialogTitle className="text-[30px] font-semibold mb-[18.5px]">
            Create new Membership Plan
          </DialogTitle>
          <form onSubmit={handleSubmit(onsubmit)} className="space-y-5">
            {/* Title Field */}
            <div className="flex flex-col gap-1">
              <label>Name</label>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Enter name"
                    className="border p-2 rounded"
                  />
                )}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Features Section */}
            <div className="flex flex-col gap-2 md:mt-0 mt-5">
              {featuresList.map((feature, idx) => (
                <div className="flex items-center gap-1" key={idx}>
                  <div className="flex items-center justify-center bg-[#D9D9D9] rounded-full p-[2px]">
                    <MdOutlineDone className="text-sm" />
                  </div>
                  <p className="md:text-sm text-xs">{feature}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-2 items-center">
              <Input placeholder="Add new feature" id="newFeatureInput" />
              <Button onClick={handleAddFeatures}>
                <LiaPlusSolid />
              </Button>
            </div>

            {/* Price Field */}
            <div className="flex flex-col gap-1 mt-3">
              <label>Amount</label>
              <Controller
                name="amount"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="number"
                    placeholder="Enter amount"
                    className="border p-2 rounded"
                  />
                )}
              />
              {errors.amount && (
                <span className="text-red-500 text-sm">
                  {errors.amount.message}
                </span>
              )}
            </div>

            {/* Submit and Cancel Buttons */}
            <div className="flex justify-center items-center gap-4 mt-5">
              <Button
                type="button"
                onClick={onClose}
                className="bg-gray-500 text-white px-6 py-2 rounded-full"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-full"
              >
                Submit
              </Button>
            </div>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default NewMembershipPlanDialog;
