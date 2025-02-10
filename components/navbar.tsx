"use client";

import * as React from "react";
import {  Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
// import About from "../app/about/about";
import Link from "next/link";

const Navbar = () => {
  
  const { theme, setTheme } = useTheme();
  return (
    <nav className="flex justify-between items-center h-16 bg-chart-2 px-4 text-background">
      <span className="font-bold text-xl"><Link href= '/'>Password-manager</Link></span>
      <ul className="flex justify-start items-center gap-5">
        <li><Link href='home'>Home</Link></li>
        <li><Link href='about'>About</Link></li>
        <li><Link href='services'>Services</Link></li>
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

export default Navbar;
