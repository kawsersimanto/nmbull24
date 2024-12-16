"use client"

import React from "react";
import { useForm, Controller } from "react-hook-form";

interface Data {
  title: string;
  features: string[];
  price: number | null;
}

interface UpdateDataDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Data) => void;
  initialData: Data;
}

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MdOutlineDone } from "react-icons/md";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { LiaPlusSolid } from "react-icons/lia";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const UpdateDataDialog = ({ isOpen, onClose }: UpdateDataDialogProps) => {

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Data>({
    defaultValues: {
      title: "",
      features: [""],
      price: null,
    },
  });

  const onFormSubmit = (data: Data) => {
    console.log(data);
    
  };

  return (
    <Dialog open={isOpen}>
      <DialogContent>
        <div className="absolute top-3 right-3" onClick={onClose}>
          <X className="h-4 w-4" />
        </div>
        <DialogHeader>
          <DialogTitle>Membership Plan Creation</DialogTitle>
          <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-5">
            <DialogDescription>
              {/* Title Field */}
              <span className="flex flex-col gap-1">
                <span>Title</span>
                <Controller
                  name="title"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder="Enter title"
                      className="border p-2 rounded"
                    />
                  )}
                />
                {errors.title && (
                  <span className="text-red-500 text-sm">
                    {errors.title.message}
                  </span>
                )}
              </span>

              {/* Plane Touch Point Section */}
              <span className="flex flex-col gap-1 pt-5">
                <span>Plane touch point</span>
                <span className="border p-3">
                  <span className="flex items-center gap-1">
                    <span className="flex items-center justify-center bg-[#D9D9D9] rounded-full p-[2px]">
                      <MdOutlineDone className="text-sm" />
                    </span>
                    <span>Access to our searchable directory</span>
                  </span>

                  {/* Add New Membership Plan Link */}
                  <Button
                    variant={"ghost"}
                    className="flex items-center gap-2 mt-5 text-[#0872BA]"
                  >
                    <LiaPlusSolid /> Add new membership plan
                  </Button>
                </span>
              </span>

              {/* Price Field */}
              <span className="flex flex-col gap-1 mt-3">
                <span>Price</span>
                <Controller
                  name="price"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      value={""}
                      placeholder="Enter price"
                      className="border p-2 rounded"
                    />
                  )}
                />
                {errors.price && (
                  <span className="text-red-500 text-sm">
                    {errors.price.message}
                  </span>
                )}
              </span>

              {/* Submit and Cancel Buttons */}
              <span className="flex justify-center items-center gap-4 mt-5">
                <Button
                  type="button"
                  onClick={onClose}
                  className="bg-[#818181C7] px-[30px] rounded-full"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-[#0872BA] px-[30px] rounded-full"
                >
                  Submit
                </Button>
              </span>
            </DialogDescription>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateDataDialog;
