"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import Image from "next/image"
import logo from "@/assets/expat-logo.png";

export default function ChangePassword() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4">
      <div className="w-full max-w-[454px] space-y-6 rounded">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="flex items-center gap-2">
            <Image
              src={logo}
              alt="Expat Girls logo"
              className="lg:w-[108px] w-[142.045px] h-[100px] object-contain"
            />
          </div>
        </div>

        {/* Form */}
        <div className="">
          <div className="space-y-1 mt-6 mb-8 text-center">
            <h1 className="text-2xl font-outfit font-semibold">
              Change New Password!
            </h1>
            <p className="text-[16px] font-normal font-inter text-gray-500">
              Enter A Different Password With The Previous
            </p>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="new-password"
                className="text-[18px] font-outfit text-gray-600"
              >
                New Password
              </Label>
              <div className="relative">
                <Input
                  id="new-password"
                  placeholder="BFiofgvsb***JJ"
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full border-gray-200 pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-4 w-4 text-gray-400" />
                  ) : (
                    <EyeIcon className="h-4 w-4 text-gray-400" />
                  )}
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="confirm-password"
                className="text-[18px] font-outfit text-[#475467]"
              >
                Confirm Password
              </Label>
              <div className="relative">
                <Input
                  id="confirm-password"
                  placeholder="BFiofgvsb***JJ"
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  className="w-full text-[18px] text-[#475467] border-[#98A2B3] pr-10 placeholder:text-[#98A2B3] placeholder:text-sm placeholder:font-normal"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOffIcon className="h-4 w-4 text-gray-400" />
                  ) : (
                    <EyeIcon className="h-4 w-4 text-gray-400" />
                  )}
                </Button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center rounded-lg items-center font-outfit text-white text-[18px] font-medium py-[10px] bg-primary hover:bg-blue-700"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
