'use client'

import Image from "next/image";
import Link from "next/link";
import { cn } from "~/lib/utils";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { api } from "~/utils/api";
import NavGetting from "./NavGetting";
import { AlignJustify } from "lucide-react";
import { useState } from "react";

const navLinks = [
  {
    name: "Turfs",
    href: "/turfs",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Support",
    href: "/support",
  },
];
export function NavBar({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  const { data: sessionData } = useSession();

  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );
  return (
    <div
      className={cn(
        `sticky top-0 justify-between items-center z-50 flex h-16 w-full ${pathname === "/" ? "bg-[#EEF5E5]" : "bg-white"
        } px-4 md:px-24`
      )}
      {...props}
    >
      <Link className="my-auto" href={"/"}>
        <Image
          src={"/images/NavLogo.svg"}
          alt="FootyPack"
          height={70}
          width={70}
          className={cn("cursor-pointer")}
        />
      </Link>
      <nav
        className={cn(
          `flex items-center ml-6 md:space-x-6 space-x-2 ${pathname === "/" ? "bg-[#EEF5E5]" : "bg-white"} lg:space-x-9 absolute md:static flex-col md:flex-row top-[65px] space-y-6 p-4 overflow-hidden md:space-y-0 w-screen md:w-auto left-0 md:h-auto transition-all  ${!isNavOpen ? 'h-0 p-0' : 'h-[400px]'}`,
          className
        )}
        {...props}
      >
        {navLinks.map((link, index) => {
          const isActive = pathname?.startsWith(link.href);
          return (
            <Link
              href={link.href}
              key={index}
              className={cn(
                "text-sm text-left font-medium transition-colors hover:text-primary",
                isActive ? "border-t-4 border-primary" : "text-muted-foreground"
              )}
            >
              {link.name}
            </Link>
          );
        })}

        <NavGetting extraStyle='md:hidden' />
      </nav>

      <NavGetting extraStyle='hidden md:block' />

      <AlignJustify className="md:hidden" size={24} onClick={toggleNav} />
    </div>
  );
}
