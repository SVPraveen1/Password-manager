import { AddCard } from "@/components/AddCard";
import { AddPassword } from "@/components/AddPassword";
import { YourCards } from "@/components/YourCards";
import { YourPasswords } from "@/components/YourPasswords";
import type { Metadata } from "next";
import { currentUser } from "@clerk/nextjs/server";

export const metadata: Metadata = {
  title: "Password Manager",
  description: "This is the home page of the Password Manager app.",
};

export default async function Home() {
  const user = await currentUser();
  // console.log(user?.privateMetadata.cards)

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
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Your Cards</h2>
          <YourCards cards={Array.isArray(user?.privateMetadata.cards)?user?.privateMetadata.cards:[]} />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Your Passwords</h2>
          <YourPasswords passwords={Array.isArray(user?.privateMetadata.passwords)?user?.privateMetadata.passwords:[]} />
        </div>
      </div>
    </div>
  );
}
