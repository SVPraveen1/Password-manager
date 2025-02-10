import { AddCard } from "@/components/AddCard";
import { AddPassword } from "@/components/AddPassword";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Password Manager",
  description: "This is the home page of the Password Manager app.",
};

export default function Home() {
  return (
    <div className="container mx-auto p-4 space-y-8">
      <h1 className="text-4xl font-bold text-center mb-8">Password Manager</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Add a credit card</h2>
          <AddCard />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Add a Password</h2>
          <AddPassword />
        </div>
      </div>
    </div>
  );
}
