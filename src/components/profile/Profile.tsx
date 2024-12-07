"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronRight, LogOut } from "lucide-react";

export default function Profile() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="w-full">
          <div className="flex items-center gap-3 rounded-lg border p-3 hover:bg-accent">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder.svg" alt="Profile picture" />
              <AvatarFallback>SH</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start">
              <div className="text-sm font-medium">Hey Saifur Hadid</div>
              <div className="text-xs text-red-500">
                Your account not verified yet
              </div>
            </div>
            <ChevronRight className="ml-auto h-4 w-4 text-muted-foreground" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[280px]" align="start">
          <DropdownMenuItem className="flex items-center justify-between py-3">
            <span>My Profile</span>
            <ChevronRight className="h-4 w-4" />
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center justify-between py-3">
            <span>Get verified</span>
            <ChevronRight className="h-4 w-4" />
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center justify-between py-3">
            <span>Help & support</span>
            <ChevronRight className="h-4 w-4" />
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center justify-between py-3">
            <span>Privacy & terms</span>
            <ChevronRight className="h-4 w-4" />
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center justify-between py-3 text-red-500">
            <span>Logout</span>
            <LogOut className="h-4 w-4" />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
