"use client";

import * as React from "react";
import { Moon, MoonIcon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

const navbar = () => {
  const { setTheme } = useTheme();
  return (
    <nav className="flex justify-between items-center h-16 bg-chart-2 px-4 text-background">
      <span className="font-bold text-xl">Password-manager</span>
      <ul className="flex justify-start items-center gap-5">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
      </ul>
      <div className="flex gap-2 justify-center items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="relative border rounded-md w-9 h-9 flex items-center justify-center">
              <Sun className="h-5 w-5 transition-all dark:hidden" />
              <Moon className="absolute h-5 w-5 transition-all hidden dark:block" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default navbar;
