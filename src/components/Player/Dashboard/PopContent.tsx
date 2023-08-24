import { LogIn, Phone, Settings, UserCircle } from "lucide-react";
import { Mail } from "lucide-react";
import { X } from "lucide-react";
import { Dribbble, Search } from "lucide-react";
import Link from "next/link";
import React from "react";
import { PopoverContent } from "~/components/ui/popover";
import { Separator } from "~/components/ui/separator";

const PopContent = () => {
  return (
    <>
      <PopoverContent className="my-2 md:me-24">
        <div className="w-full bg-white text-xs text-gray-500">
          <div className="flex items-center justify-between">
            <h1 className="font-bold uppercase">options</h1>
            <X size={18} />
          </div>

          <Separator className="mt-4" />

          <Link href="#" className="flex items-center p-2">
            <Search size={18} className="mr-2" />
            <h1 className="capitalize">find turfs</h1>
          </Link>
          <Link href="#" className="flex items-center p-2">
            <Dribbble size={18} className="mr-2" />
            <h1 className="capitalize">my games</h1>
          </Link>

          <Separator className="my-2" />

          <Link href="#" className="flex items-center p-2">
            <UserCircle size={18} className="mr-2" />
            <h1 className="capitalize">profile</h1>
          </Link>
          <Link href="#" className="flex items-center p-2">
            <Settings size={18} className="mr-2" />
            <h1 className="capitalize">settings</h1>
          </Link>

          <Separator className="my-2" />

          <Link href="#" className="flex items-center p-2">
            <Phone size={18} className="mr-2" />
            <h1 className="capitalize">help</h1>
          </Link>
          <Link href="#" className="flex items-center p-2">
            <Mail size={18} className="mr-2" />
            <h1 className="capitalize">support</h1>
          </Link>

          <Separator className="my-2" />

          <Link href="#" className="flex items-center p-2 text-red-700">
            <LogIn size={18} className="mr-2" />
            <h1 className="capitalize">signout</h1>
          </Link>
        </div>
      </PopoverContent>
    </>
  );
};

export default PopContent;
