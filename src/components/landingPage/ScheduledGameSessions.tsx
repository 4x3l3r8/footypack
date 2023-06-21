import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import GameSessionCard from "./GameSessionCard";

export interface IScheduledGameSessionsProps {}

export function ScheduledGameSessions(props: IScheduledGameSessionsProps) {
  const sessionsBarRef = React.useRef<HTMLDivElement>(null);

  const sideScroll = (
    element: HTMLDivElement,
    speed: number,
    distance: number,
    step: number
  ) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, speed);
  };

  return (
    <section className="mt-24 w-full items-center">
      <div className="flex h-auto w-full justify-between  px-10">
        <span className="font-barlow text-4xl font-extrabold uppercase italic text-black">
          Join scheduled game <br /> sessions.
        </span>

        <div className="flex items-center space-x-6">
          <Button
            variant={"outline"}
            className="rounded-full border-black px-2 text-black"
            type="button"
            onClick={() => {
              if (sessionsBarRef.current)
                sideScroll(sessionsBarRef.current, 25, 100, -380);
            }}
          >
            <ChevronLeft />
          </Button>
          <Button
            variant={"outline"}
            className="rounded-full border-black px-2 text-black"
            type="button"
            onClick={() => {
              if (sessionsBarRef.current)
                sideScroll(sessionsBarRef.current, 25, 100, 380);
            }}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>

      <div
        className="no-scrollbar mt-5 flex space-x-5 overflow-x-auto px-10 py-8 transition"
        ref={sessionsBarRef}
      >
        <GameSessionCard className="shrink-0 shadow-lg" />
        <GameSessionCard className="shrink-0 shadow-lg" />
        <GameSessionCard className="shrink-0 shadow-lg" />
        <GameSessionCard className="shrink-0 shadow-lg" />
        <GameSessionCard className="shrink-0 shadow-lg" />
        <GameSessionCard className="shrink-0 shadow-lg" />
        <GameSessionCard className="shrink-0 shadow-lg" />
        <GameSessionCard className="shrink-0 shadow-lg" />
        <GameSessionCard className="shrink-0 shadow-lg" />
        <Card className="flex w-[380px] shrink-0 cursor-pointer flex-col items-center justify-center space-y-6 font-barlow shadow-lg transition-all hover:scale-105">
          <p className="text-center text-2xl font-black uppercase italic text-black">
            See more <br /> games
          </p>
          <Button
            variant={"outline"}
            className="rounded-full border-black px-2 text-black hover:bg-gray-200"
            type="button"
          >
            <ArrowRight />
          </Button>
        </Card>
      </div>
    </section>
  );
}
