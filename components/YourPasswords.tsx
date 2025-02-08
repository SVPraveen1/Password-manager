"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";

interface Password {
  website: string;
  username: string;
  password: string;
}

export function YourPasswords({ passwords }: { passwords?: Password[] }) {
  const formatUrl = (url: string) => {
    if (!url) return '#';
    if (!/^https?:\/\//i.test(url)) {
      return `https://${url}`;
    }
    return url;
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Passwords</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 h-48 overflow-y-auto">
          {(!passwords || passwords.length === 0) && 
            <span className="text-muted-foreground">No passwords added</span>
          }
          {passwords?.map((pw, index) => (
            <li key={index} className="flex justify-between items-center">
              <div>
                <Link href={formatUrl(pw.website)} target="_blank" >
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