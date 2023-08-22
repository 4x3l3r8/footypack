import { Avatar } from "@radix-ui/react-avatar";
import { AlignJustify, Bell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
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
  ];

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <>
      <div className="sticky top-0 z-50 flex items-center justify-between bg-slate-50 p-4 md:justify-normal md:px-24">
        <Link className="my-auto mr-24" href={"/"}>
          <Image
            src={"/images/NavLogo.svg"}
            alt="FootyPack"
            height={70}
            width={70}
            className="cursor-pointer"
          />
        </Link>
        <nav
          className={`absolute left-0 top-[62px] flex w-full flex-1 flex-col justify-between bg-slate-50 transition-all delay-300 md:static md:h-auto ${
            isNavOpen ? "h-[300px] p-4" : "h-0"
          } overflow-hidden md:flex-row md:items-center`}
        >
          <div className="flex flex-col gap-4 md:flex-row">
            {navLinks.map((link, index) => {
              const isActive = pathname?.startsWith(link.href);
              return (
                <Link
                  href={link.href}
                  key={index}
                  className={`text-sm font-medium uppercase transition-colors hover:text-primary md:self-end md:text-left
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

          <Separator className="my-4 md:hidden" />

          <div className="flex flex-row-reverse justify-between md:flex-row">
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

        <AlignJustify
          className="cursor-pointer text-primary md:hidden"
          onClick={toggleNav}
        />
      </div>
    </>
  );
};

export default NavBar;
