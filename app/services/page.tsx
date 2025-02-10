import { YourCards } from "@/components/YourCards";
import { YourPasswords } from "@/components/YourPasswords";
import { currentUser } from "@clerk/nextjs/server";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Services - Password Manager",
  description: "View your saved cards and passwords",
};

export default async function ServicesPage() {
  const user = await currentUser();

  return (
    <div className="container mx-auto p-4 space-y-8">
      <h1 className="text-4xl font-bold text-center mb-8">Your Services</h1>
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
