"use client"

import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

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
  }

  return (
    <div className="flex min-h-screen items-center font-sans justify-center bg-white p-4">
      <div className="w-full border border-primary max-w-[454px] space-y-8 rounded">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-primary"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span className="text-xl font-sans font-bold text-blue-600">EXPAT</span>
            <span className="text-xl font-sans font-light">Global System</span>
          </div>
        </div>

        {/* Success Icon */}
        <div className="flex flex-col items-center space-y-4">
          <div className="rounded-full bg-primary p-3">
            <Check className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-2xl font-semibold">Success</h1>
          <p className="text-center text-sm text-gray-500">
            Please Check Your Email For Create A New Password
          </p>
        </div>

        {/* OTP Input Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex justify-center">
            <Controller
              name="otp"
              control={control}
              render={({ field }) => (
                <InputOTP {...field} maxLength={6} className="w-full">
                  <InputOTPGroup className="w-full">
                    {[...Array(6)].map((_, index) => (
                      <InputOTPSlot
                        key={index}
                        index={index}
                        className="h-[56px] w-[55.67px] rounded-[8px] border border-[#98A2B3] mx-2"
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
          <Button type="submit" className="w-full bg-primary hover:bg-blue-700">
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
          </Button>
        </form>
      </div>
    </div>
  );
}
