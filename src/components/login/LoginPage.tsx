"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import LoginSchema, { LoginFormData } from "@/schema/LoginSchema";
import loginimg from '@/assets/login/Rectangle 10333.png';
import logo from "@/assets/expat-logo.png";

export default function LoginPage() {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<any>({
  //   resolver: zodResolver(LoginSchema), // Use the imported schema
  // })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema), // Use the imported schema
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("Form Data: ", data)
  }

  return (
    <div className="flex flex-col lg:flex-row bg-white min-h-screen">
      {/* Left side - Image */}
      <div className="relative hidden lg:block w-1/2">
        <Image
          src={loginimg}
          alt="People looking at map"
          className="object-cover"
          fill
          priority
        />
      </div>

      {/* Right side - Login Form */}
      <div className="flex w-full items-center justify-center lg:w-1/2 p-6">
        <div className="w-full max-w-[524px] space-y-8">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src={logo}
              alt="Expat Logo"
              className="w-24 h-auto object-contain lg:w-28"
            />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
              <Label className="text-[18px] font-semibold" htmlFor="email">Email address</Label>
              <Input
                id="email"
                placeholder="Enter your email"
                type="email"
                className="w-full"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message as string}
                </p>
              )}
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <Label className="text-[18px] font-semibold" htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="Enter your password"
                type="password"
                className="w-full"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message as string}
                </p>
              )}
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" {...register("rememberMe")} />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember Me
                </label>
              </div>

              <Link
                href="/forgot-password"
                className="text-sm text-blue-600 hover:text-blue-500"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-blue-500"
            >
              Log in
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
