"use client";

import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Image from "next/image";
import logo from "@/assets/expat-logo.png";
import success from "@/assets/login/Vector.png";

// Define the validation schema for the OTP field using zod
const otpSchema = z.object({
  otp: z
    .string()
    .length(6, "OTP must be exactly 6 digits")
    .regex(/^[0-9]+$/, "OTP must contain only numbers"),
});

// Infer the type of the form data from the OTP schema
type OTPFormData = z.infer<typeof otpSchema>;

export default function OTPVerification() {
  // Use react-hook-form with the zodResolver
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<OTPFormData>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "", // Initialize the otp value as an empty string
    },
    mode: "onSubmit", // Validate only on submit
  });

  const onSubmit = (data: OTPFormData) => {
    console.log("OTP Submitted:", data); // Handle the OTP submission
  };

  return (
    <div className="flex min-h-screen items-center font-sans justify-center bg-white p-4">
      <div className="w-full max-w-[454px] space-y-8 rounded">
        {/* Logo */}
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center">
            <Image
              src={logo}
              alt="Expat Logo"
              className="w-24 h-auto object-contain lg:w-28"
            />
          </div>
        </div>

        {/* Success Icon */}
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-primary md:w-[82.9px] md:h-[82.9px] w-[72.9px] h-[72.9px] items-center justify-center flex rounded-full">
            <Image src={success} alt="success" className="" />
          </div>
          <h1 className="font-semibold font-outfit text-4xl text-[#1D2939]">
            Success
          </h1>
          <p className="text-center font-inter text-sm text-gray-500">
            Please Check Your Email For Creating A New Password
          </p>
        </div>

        {/* OTP Input Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex justify-center">
            <Controller
              name="otp"
              control={control}
              render={({ field }) => (
                <InputOTP {...field} maxLength={6}>
                  <InputOTPGroup className="flex gap-6">
                    {[...Array(6)].map((_, index) => (
                      <InputOTPSlot
                        key={index}
                        index={index}
                        className="md:h-[56px] md:w-[55.67px] h-[36px] w-[35.67px] rounded-[8px] border border-[#98A2B3]"
                      />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
              )}
            />
          </div>

          {/* OTP Error Message */}
          {errors.otp && (
            <p className="text-center text-sm text-red-500">
              {errors.otp.message}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex justify-center rounded-lg items-center font-outfit text-white text-[18px] font-medium py-[10px] bg-primary hover:bg-blue-700"
          >
            Submit
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 h-4 w-4"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
