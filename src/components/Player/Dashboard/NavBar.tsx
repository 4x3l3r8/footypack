import { Avatar } from "@radix-ui/react-avatar";
import { Bell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Separator } from "~/components/ui/separator";

const NavBar = () => {
  const pathname = usePathname();
  const navLinks = [
    {
      name: "Dashboard",
      href: "/",
    },
    {
      name: "Turfs",
      href: "/turf",
    },
    {
      name: "Games",
      href: "/games",
    },
    {
      name: "wallet",
      href: "/wallet",
    },
    {
      name: "shop",
      href: "/shop",
    },
    {
      name: "teams",
      href: "/teams",
    },
  ]
  return (
    <>
      <div className="sticky top-0 z-50 flex items-center bg-slate-50 p-4 md:px-24">
        <Link className="my-auto mr-24" href={"/"}>
          <Image
            src={"/images/NavLogo.svg"}
            alt="FootyPack"
            height={70}
            width={70}
            className="cursor-pointer"
          />
        </Link>
        <nav className="flex flex-1 items-center justify-between">
          <div className="flex gap-4">
            {navLinks.map((link, index) => {
              const isActive = pathname?.startsWith(link.href);
              return (
                <Link
                  href={link.href}
                  key={index}
                  className={`text-left self-end uppercase text-sm font-medium transition-colors hover:text-primary
                    ${
                      isActive
                        ? "border-t-4 border-primary"
                        : "text-muted-foreground"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <Separator className="md:hidden" />

          <div className="flex">
            <div className="mr-2 rounded-full bg-slate-200 p-2">
              <Bell size={12} />
            </div>
            <div className="flex items-center">
              <Avatar className="mr-2 h-6 w-6">
                <AvatarImage src="/images/maleAvatar.png" />
                <AvatarFallback>IM</AvatarFallback>
              </Avatar>

              <h1 className="text-xs font-bold uppercase">
                WELCOME QUEENNETTE
              </h1>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
