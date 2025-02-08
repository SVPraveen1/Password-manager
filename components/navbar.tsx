"use client";

import * as React from "react";
import { Moon, MoonIcon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

const navbar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="flex justify-between items-center h-16 bg-chart-2 px-4 text-background">
      <span className="font-bold text-xl">Password-manager</span>
      <ul className="flex justify-start items-center gap-5">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
      </ul>
      <div className="flex gap-2 justify-center items-center">
        <button
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
          className="relative border rounded-md w-9 h-9 flex items-center justify-center"
        >
          <Sun className="h-5 w-5 transition-all dark:hidden" />
          <Moon className="absolute h-5 w-5 transition-all hidden dark:block" />
        </button>

        <SignedOut>
          <SignInButton />
          {/* <SignUpButton /> */}
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default navbar;
