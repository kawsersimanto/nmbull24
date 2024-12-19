"use client";

import React, { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MdOutlineDone } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { LiaPlusSolid, LiaTimesSolid } from "react-icons/lia";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { MembershipPlanType } from "@/types/MembershipPlanType";
import { membershipSchema } from "@/schema/MembershipPlanSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

interface UpdateDataDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: MembershipPlanType) => void;
  initialData: MembershipPlanType;
}

const UpdateDataDialog = ({
  isOpen,
  onClose,
  initialData,
  onSubmit,
}: UpdateDataDialogProps) => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<MembershipPlanType>({
    defaultValues: initialData,
    resolver: zodResolver(membershipSchema),
  });

  // Use the list from initialData for features (list is an array of objects with a title)
  const [features, setFeatures] = useState<{ title: string }[]>(
    initialData.list || []
  );
  const [showFeatureInput, setShowFeatureInput] = useState<boolean>(false);

  const handleAddFeature = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const inputElement = document.getElementById(
      "featureInput"
    ) as HTMLInputElement | null;

    if (inputElement) {
      const featureValue = inputElement.value.trim();
      if (featureValue.length < 5) {
        toast.error("Feature must be at least 5 characters long.");
        return;
      }
      // Add the new feature as an object with the 'title' property
      setFeatures((prev) => [...prev, { title: featureValue }]);
      inputElement.value = "";
      toast.success("Feature added!");
    }
  };

  const handleRemoveFeature = (feature: { title: string }) => {
    setFeatures((prev) => prev.filter((f) => f.title !== feature.title));
    toast.success("Feature removed!");
  };

  const handleShowFeatureInput = () => {
    setShowFeatureInput(true);
  };

  const onSubmitHandler: SubmitHandler<MembershipPlanType> = (data) => {
    // Include the updated features in the data to be submitted
    const updatedData = {
      ...data,
      list: features,
    };

    console.log("Updated Data:", updatedData);
    onSubmit(updatedData); // Pass the updated data to onSubmit
    onClose();
  };

  return (
    <Dialog open={isOpen}>
      <DialogContent>
        <div
          onClick={onClose}
          className="absolute top-8 right-3 cursor-pointer text-[#0076ef] font-bold"
        >
          <X size={24} />
        </div>
        <DialogHeader>
          <DialogTitle className="text-[24px] font-semibold mb-[18.5px]">
            Update Membership Plan
          </DialogTitle>
          <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-5">
            {/* Title Field */}
            <div className="flex flex-col gap-1">
              <label>Title</label>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Enter title"
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
            <div className="flex flex-col gap-2">
              {features.map((feature, idx) => (
                <div className="flex items-center gap-2" key={idx}>
                  <div className="flex items-center justify-center bg-[#D9D9D9] rounded-full p-[2px]">
                    <MdOutlineDone className="text-sm" />
                  </div>
                  <p className="text-sm flex items-center gap-3">
                    {feature.title}{" "}
                    <LiaTimesSolid
                      className="text-red-500 cursor-pointer"
                      onClick={() => handleRemoveFeature(feature)}
                    />
                  </p>
                </div>
              ))}
            </div>

            {/* Add New Feature */}
            {showFeatureInput && (
              <div className="flex gap-2 items-center">
                <Input
                  placeholder="Add new feature"
                  id="featureInput"
                  className="flex-1"
                />
                <Button
                  onClick={handleAddFeature}
                  className="px-[12px] py-[6px]"
                  type="button"
                >
                  <LiaPlusSolid />
                </Button>
              </div>
            )}
            <Button
              variant="ghost"
              className="flex items-center gap-2 mt-5 text-[#0872BA]"
              onClick={handleShowFeatureInput}
            >
              <LiaPlusSolid /> Add new feature
            </Button>

            {/* Price Field */}
            <div className="flex flex-col gap-1 mt-3">
              <label>Price</label>
              <Controller
                name="amount"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="number"
                    placeholder="Enter price"
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

            {/* Submit Button */}
            <div className="flex justify-end gap-4 mt-5">
              <Button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-full"
              >
                Update
              </Button>
            </div>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateDataDialog;
