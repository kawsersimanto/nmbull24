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

const UpdateDataDialog = ({
  isOpen,
  onClose,
}: UpdateDataDialogProps) => {
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
    console.log(data)
    onClose();
  };

  return (
    <Dialog open={isOpen}>
      <DialogTrigger>Update</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Membership Plan Creation</DialogTitle>
          <DialogDescription>
            <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-5">
              {/* Title Field */}
              <div className="flex flex-col gap-1">
                <h2>Title</h2>
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
                  <p className="text-red-500 text-sm">{errors.title.message}</p>
                )}
              </div>

              {/* Plane Touch Point Section */}
              <div className="flex flex-col gap-1 pt-5">
                <p>Plane touch point</p>
                <div className="border p-3">
                  <div className="flex items-center gap-1">
                    <div className="flex items-center justify-center bg-[#D9D9D9] rounded-full p-[2px]">
                      <MdOutlineDone className="text-sm" />
                    </div>
                    <p>Access to our searchable directory</p>
                  </div>

                  {/* Add New Membership Plan Link */}
                  <Link
                    href=""
                    className="flex items-center gap-2 mt-5 text-[#0872BA]"
                  >
                    <LiaPlusSolid /> Add new membership plan
                  </Link>
                </div>
              </div>

              {/* Price Field */}
              <div className="flex flex-col gap-1 mt-3">
                <h2>Price</h2>
                <Controller
                  name="price"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      value={''}
                      placeholder="Enter price"
                      className="border p-2 rounded"
                    />
                  )}
                />
                {errors.price && (
                  <p className="text-red-500 text-sm">{errors.price.message}</p>
                )}
              </div>

              {/* Submit and Cancel Buttons */}
              <div className="flex justify-center items-center gap-4 mt-5">
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
              </div>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateDataDialog;
