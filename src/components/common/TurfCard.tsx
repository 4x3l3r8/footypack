import { MapPin, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import turfImg from "public/images/turfCard.png";
import { cn } from "~/lib/utils";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

type CardProps = React.ComponentProps<typeof Card>;

export function TurfCard({ className, ...props }: CardProps) {
  return (
    <Link className="contents" href={`/turfs/${"1"}`}>
      <Card
        className={cn(
          "max-w-[300px] shrink-0 mx-2 cursor-pointer border-none font-barlow shadow-none",
          className
        )}
        {...props}
        // onClick={() => router.push()}
      >
        <CardHeader className="relative p-0 transition-all hover:scale-105">
          <Image
            src={turfImg}
            height={720}
            width={1080}
            alt="game mode"
            className="h-auto flex-1 rounded-xl object-contain shadow"
          />
          <div className="absolute left-8 top-2/4 flex rotate-[12.5deg] -skew-y-12  bg-black bg-opacity-50 p-1 text-lg font-medium text-white">
            <MapPin className="h-6 w-6" />
            <span className="uppercase">Adekunle 101245, Lagos</span>
          </div>
        </CardHeader>
        <CardContent className="p-0 pt-4">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <CardTitle className="uppercase">Maktown stadium</CardTitle>
              <CardDescription className="flex items-center space-x-1 text-lg">
                5 Pitches
              </CardDescription>
            </div>
            <Button
              size={"sm"}
              className="px-2 text-lg font-semibold"
              variant={"ghost"}
            >
              <Star className="mr-2 text-amber-500" fill="yellow" /> 5.0
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
