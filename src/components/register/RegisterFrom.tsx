import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const RegisterForm = () => {
  return (
    <div className="pt-5 pb-6 px-6 bg-[rgba(56,56,56,0.20)] backdrop-blur-[12px] rounded-xl">
      <Card className="w-full bg-transparent border-none p-0">
        <CardHeader className="p-0">
          <CardTitle className="text-2xl text-white mb-[26px]">
            Sign up with email
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 p-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-white">
                First name
              </Label>
              <Input
                id="firstName"
                placeholder="Enter your first name"
                className="bg-transparent border-white text-white placeholder:text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-white">
                Last name
              </Label>
              <Input
                id="lastName"
                placeholder="Enter your last name"
                className="bg-transparent border-white text-white placeholder:text-white"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">
              Email address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              className="bg-transparent border-white text-white placeholder:text-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-white">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="bg-transparent border-white text-white placeholder:text-white"
            />
          </div>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Sign up
          </Button>
          <div className="text-center text-sm text-zinc-400">
            You are already member{" "}
            <Link href="/login" className="text-blue-500 hover:text-blue-400">
              log in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterForm;
