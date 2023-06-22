import { Check, MoreHorizontal } from "lucide-react";
import Image from "next/image";
import gameImg from "public/images/gameCard.png";
import { cn } from "~/lib/utils";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type CardProps = React.ComponentProps<typeof Card>;

export default function GameSessionCard({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px] font-barlow hover:scale-105 transition-all cursor-pointer", className)} {...props}>
      <CardHeader className="relative p-3">
        <Image
          src={gameImg}
          height={720}
          width={1080}
          alt="game mode"
          className="h-1/5 w-full rounded-t-md"
        />
        <Badge
          className="absolute right-6 rounded-sm p-3 font-barlow"
          variant={"secondary"}
        >
          N500/Hr
        </Badge>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex justify-between">
          <div className="flex flex-col space-y-2">
            <CardTitle className="uppercase">
              teslim balogun sTADIUM Adekunle 101245, Lagos
            </CardTitle>
            <CardDescription className="flex items-center space-x-1">
              <Avatar>
                <AvatarImage src="https://github.com/4x3l3r8.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span>Adesanya Daniel</span>
            </CardDescription>
          </div>
          <Button size={"sm"} className="px-2" variant={"ghost"}>
            <MoreHorizontal />
          </Button>
        </div>
        <Separator />
        <div className="inline">
          <p className="inline text-base text-muted-foreground">
            We are a group of 5 people, searching for an extra 5 to join us in
            our holiday fun games. You do not have to be a professional
            footballer to join us. We just want to make our ramadan...
            <Button variant={"link"} size={"sm"} className="inline p-0">
              Read more
            </Button>
          </p>
        </div>
        <Separator />
      </CardContent>
      <CardFooter className="flex flex-col space-y-0 text-start">
        {/* <p className="self-start text-sm text-muted-foreground">Game Time:</p> */}
        <div className="flex flex-col self-start">
          <span className="text-lg font-semibold">2:30pm</span>
          <span>12 May, 2023</span>
        </div>
      </CardFooter>
    </Card>
  );
}
