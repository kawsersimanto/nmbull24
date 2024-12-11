import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ForgotPassword() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4">
      <div className="w-full max-w-[400px] space-y-6">
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

        {/* Form */}
        <div className="space-y-4">
          <div className="space-y-1 text-center">
            <h1 className="text-2xl font-semibold">Forget Password!</h1>
            <p className="text-sm text-gray-500">
              Enter Your Registered Email Below.
            </p>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm text-gray-600">
                Email address
              </Label>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                required
                className="w-full border-gray-200"
              />
            </div>

            <div className="flex items-center justify-end text-sm">
              <span className="text-gray-600">Remember the password?</span>
              <Link href="/login" className="ml-1 text-blue-600 hover:underline">
                Sign in
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700"
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
  )
}

