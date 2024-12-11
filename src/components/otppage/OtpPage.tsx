
'use client'
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Check } from "lucide-react";
import { useForm, Controller } from "react-hook-form";

// Define validation function for OTP
const validateOtp = (otp: string[]) => {
  // Check if the OTP length is exactly 6 and contains only numbers
  if (otp.length !== 6 || otp.some((digit) => !/^[0-9]$/.test(digit))) {
    return "OTP must be 6 digits and contain only numbers";
  }
  return true;
};

export default function OtpPage() {
  // Initialize react-hook-form
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError, // Used to manually set errors if needed
  } = useForm({
    defaultValues: {
      otp: Array(6).fill(""), // Set default value for OTP
    },
  });

  // Handle OTP submission
  const onSubmit = (data: any) => {
    // Validate OTP array only when form is submitted
    const otpValidation = validateOtp(data.otp);
    if (otpValidation !== true) {
      setError("otp", { type: "manual", message: otpValidation });
      return;
    }

    console.log("OTP Submitted:", data);
    // Handle OTP submission logic here
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4">
      <div className="w-full max-w-[400px] space-y-8 rounded border border-primary p-6">
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
              className="h-6 w-6 text-blue-600"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span className="text-xl font-bold text-blue-600">EXPAT</span>
            <span className="text-xl font-light">Global System</span>
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

        {/* OTP Input */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex justify-center">
            <InputOTP maxLength={6} className="gap-2">
              <InputOTPGroup>
                {Array(6)
                  .fill(null)
                  .map((_, index) => (
                    <Controller
                      key={index}
                      name={`otp[${index}]`} // Correct name format for array indices
                      control={control}
                      render={({ field }) => (
                        <InputOTPSlot
                          index={index}
                          {...field}
                          className="h-10 w-10 rounded border-gray-200"
                        />
                      )}
                    />
                  ))}
              </InputOTPGroup>
            </InputOTP>
          </div>

          {/* OTP Error Message */}
          {errors.otp && (
            <p className="text-center text-sm text-red-500">
              {errors.otp?.message as string}
            </p>
          )}

          <Button type="submit" className="w-full bg-primary text-center hover:bg-blue-700">
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
