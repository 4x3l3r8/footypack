import Image from "next/image";
import Link from "next/link";
import { cn } from "~/lib/utils";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";

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

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );
  return (
    <div
      className={cn(
        "sticky top-0 z-50 flex h-16 w-full bg-[#EEF5E5] px-12 md:px-24"
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
          "flex items-center justify-center space-x-6 lg:space-x-9",
          className
        )}
        {...props}
      >
        {navLinks.map((link) => {
          const isActive = pathname.startsWith(link.href);
          return (
            <Link
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive ? "border-t-4 border-primary" : "text-muted-foreground"
              )}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
      <div className="ml-auto flex justify-center space-x-4 self-center align-middle">
        {!sessionData ? (
          <>
            <Button
              onClick={() => void signIn()}
              variant={"outline"}
              className="px-7"
            >
              Login
            </Button>
            <Button>Get Started</Button>
          </>
        ) : (
          <div className="self-center">
            Welcome {sessionData.user?.firstname} ,
            <Button variant={"link"} onClick={() => void signOut()}>
              Sign Out
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
