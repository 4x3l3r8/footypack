import * as React from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TurfCard } from "../common";
import { Card } from "../ui/card";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/router";

export interface ITurfsNearbyProps {}

export default function TurfsNearby(props: ITurfsNearbyProps) {
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

  const router = useRouter();

  return (
    <section className="my-32">
      <div className="flex h-auto w-full justify-between  px-10">
        <span className="font-barlow text-4xl font-extrabold uppercase italic text-black">
          Turfs Nearby
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
        <TurfCard />
        <TurfCard />
        <TurfCard />
        <TurfCard />
        <TurfCard />
        <TurfCard />
        <TurfCard />
        <Card
          onClick={() => router.push("/turfs")}
          className="flex h-[300px] w-[300px] shrink-0 cursor-pointer flex-col items-center justify-center space-y-6 font-barlow shadow-lg transition-all hover:scale-105"
        >
          <p className="text-center text-2xl font-black uppercase italic text-black">
            See more <br /> turfs
          </p>
          <Button
            variant={"outline"}
            className="rounded-full border-black px-2 text-black hover:bg-transparent"
            type="button"
          >
            <ArrowRight />
          </Button>
        </Card>
      </div>
    </section>
  );
}
