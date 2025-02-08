"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import Link from "next/link";

interface Password {
  website: string;
  username: string;
  password: string;
}

export function YourPasswords({ passwords }: { passwords?: Password[] }) {
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Passwords</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 h-48 overflow-y-auto">
        {(passwords.length === 0) && <span className="text-muted-foreground">No passwords added</span>}
          {passwords?.map((pw,index) => (
            <li key={index} className="flex justify-between items-center ">
              <div>
                <Link href={pw.website}>
                  <div className="font-semibold cursor-pointer text-blue-600 underline">
                    {pw.website}
                  </div>
                </Link>
                <div className="text-white mt-1">{pw.username}</div>
                <div className="text-white mt-1">{pw.password}</div>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}