import { ChevronDown, Mail, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "~/lib/utils";
import { Separator } from "../ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Popover, PopoverTrigger } from "../ui/popover";
import PopContent from "../Player/Dashboard/PopContent";
import { Bell } from "lucide-react";

const TurfNavBar = () => {
  return (
    <>
      <nav className="flex items-center sticky top-0 border-b bg-white">
        
        <section className="flex flex-1 justify-between px-4 py-2">
          <div className="flex gap-2 border p-2">
            <Search /> <Separator orientation="vertical" />{" "}
            <input
              type="text"
              className="w-80 border-0 outline-0 focus:outline-0"
              placeholder="Search location, turf name"
            />
          </div>

          <div className="relative flex items-center">
            <div className="bg-gray-200 rounded-full p-2 mr-4">
                <Mail size={12} />
            </div>

            <div className="bg-gray-200 rounded-full p-2 mr-4">
                <Bell size={12} />
            </div>


            <Avatar className="mr-2 h-6 w-6">
              <AvatarImage src="/images/maleAvatar.png" />
              <AvatarFallback>VB</AvatarFallback>
            </Avatar>

            <h1 className="mr-2 text-xs font-bold uppercase">
              WELCOME Damilola
            </h1>
            <Popover>
              <PopoverTrigger>
                <ChevronDown size={18} className="cursor-pointer" />
              </PopoverTrigger>
              <PopContent />
            </Popover>
          </div>
        </section>
      </nav>
    </>
  );
};

export default TurfNavBar;
