import { Target } from "lucide-react";
import Link from "next/link";
import * as React from "react";

export interface IUpcomingGamesProps {}

export function UpcomingGames(props: IUpcomingGamesProps) {
  return (
    <div className="relative flex overflow-x-hidden overflow-y-hidden bg-primary text-primary-foreground">
      <div className="flex py-3 italic h-fit animate-marquee whitespace-nowrap">
        <Link href={"/"} className="flex items-center mx-4 space-x-2 text-xl">
          <Target className="mr-3 text-xl text-yellow-400" />
          next game in surulere 23 may 2022 : 03:30PM
        </Link>
        <Link href={"/"} className="flex items-center mx-4 space-x-2 text-xl">
          <Target className="mr-3 text-xl text-yellow-400" />
          next game in surulere 23 may 2022 : 03:30PM
        </Link>
        <Link href={"/"} className="flex items-center mx-4 space-x-2 text-xl">
          <Target className="mr-3 text-xl text-yellow-400" />
          next game in surulere 23 may 2022 : 03:30PM
        </Link>
        <Link href={"/"} className="flex items-center mx-4 space-x-2 text-xl">
          <Target className="mr-3 text-xl text-yellow-400" />
          next game in surulere 23 may 2022 : 03:30PM
        </Link>
        <Link href={"/"} className="flex items-center mx-4 space-x-2 text-xl">
          <Target className="mr-3 text-xl text-yellow-400" />
          next game in surulere 23 may 2022 : 03:30PM
        </Link>
      </div>

      <div className="absolute top-0 py-3 left-32 animate-marquee2 whitespace-nowrap">
        <span className="mx-4 text-xl">
          <Target className="inline mr-3 text-xl text-yellow-400" />
          next game in surulere 23 may 2022 : 03:30PM
        </span>
        <span className="mx-4 text-xl">
          <Target className="inline mr-3 text-xl text-yellow-400" />
          next game in surulere 23 may 2022 : 03:30PM
        </span>
        <span className="mx-4 text-xl">
          <Target className="inline mr-3 text-xl text-yellow-400" />
          next game in surulere 23 may 2022 : 03:30PM
        </span>
        <span className="mx-4 text-xl">
          <Target className="inline mr-3 text-xl text-yellow-400" />
          next game in surulere 23 may 2022 : 03:30PM
        </span>
        <span className="mx-4 text-xl">
          <Target className="inline mr-3 text-xl text-yellow-400" />
          next game in surulere 23 may 2022 : 03:30PM
        </span>
      </div>
    </div>
  );
}
