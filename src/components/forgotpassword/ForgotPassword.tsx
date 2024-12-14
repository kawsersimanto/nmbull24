"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ForgotPasswordSchema, { ForgotPasswordData } from "@/schema/ForgotPasswordSchema";
import Image from "next/image";
import logo from "@/assets/expat-logo.png";

export default function ForgotPassword() {
  // Use the correct type for the form data
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordData>({
    resolver: zodResolver(ForgotPasswordSchema),
  });

  const onSubmit = (data: ForgotPasswordData) => {
    console.log(data);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-[454px] space-y-6">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="flex items-center gap-2">
            <Image
              src={logo}
              alt="Expat Girls logo"
              className="w-[142.045px] h-[100px] object-contain"
            />
          </div>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <div className="space-y-1 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-sans font-semibold">Forget Password!</h1>
            <p className="text-xs sm:text-sm md:text-base text-gray-500">
              Enter Your Registered Email Below.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-base sm:text-lg md:text-[18px] font-normal text-[#475467]"
              >
                Email address
              </Label>
              <Input
                id="email"
                placeholder="georgia.young@example.com"
                type="email"
                className="w-full text-[18px] text-[#475467] border-[#98A2B3] pr-10 placeholder:text-[#98A2B3] placeholder:text-sm placeholder:font-normal"
                {...register("email")} // Register the input with validation
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
              )}
            </div>

            <div className="flex items-center justify-start text-xs sm:text-sm">
              <span className="text-gray-600">Remember the password?</span>
              <Link href="/login" className="ml-1 text-blue-600 hover:underline">
                Sign in
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-blue-700"
            >
              Send Code
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
    </div>
  );
}

