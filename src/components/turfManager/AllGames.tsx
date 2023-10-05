import React from "react";
import { Button } from "~/components/ui/button";
import AllGamesHead from "./AllGamesHead";
import { Separator } from "../ui/separator";
import TurfDashCard from "./TurfDashCard";
import Pagination from "../common/Pagination";

const AllGames = () => {
  return (
    <>
      <div className="items-end justify-between md:flex">
        <div className="my-4 md:my-0">
          <h1 className="text-xl font-bold uppercase">turf games</h1>
          <p className="text-gray-500">See games booked at your turf</p>
        </div>
        <div>
          <Button
            variant={"outline"}
            className="mr-4 rounded-sm border-blue-900 text-blue-900 hover:bg-blue-900"
          >
            create event
          </Button>
          <Button className="rounded-sm">create new game</Button>
        </div>
      </div>

      <Separator className="my-4" />
      <AllGamesHead />
      <Separator className="my-4" />

      <section className="my-4 mb-12 rounded py-4">
        <div className="flex flex-wrap">
          <TurfDashCard
            stadiumImage="/images/playerScheduleImage.png"
            avatarImage="https://github.com/shadcn.png"
            organizerName="Adeniyi Daniel"
            stadiumName="teslim balogun sTADIUM"
            eventTime="2:30PM"
            eventDate="12 May, 2022"
            extraBasis="md:basis-1/4 pb-4"
          />
          <TurfDashCard
            stadiumImage="/images/playerScheduleImage.png"
            avatarImage="https://github.com/shadcn.png"
            organizerName="Adeniyi Daniel"
            stadiumName="teslim balogun sTADIUM"
            eventTime="2:30PM"
            eventDate="12 May, 2022"
            extraBasis="md:basis-1/4 pb-4"
          />
          <TurfDashCard
            stadiumImage="/images/playerScheduleImage.png"
            avatarImage="https://github.com/shadcn.png"
            organizerName="Adeniyi Daniel"
            stadiumName="teslim balogun sTADIUM"
            eventTime="2:30PM"
            eventDate="12 May, 2022"
            extraBasis="md:basis-1/4 pb-4"
          />
          <TurfDashCard
            stadiumImage="/images/playerScheduleImage.png"
            avatarImage="https://github.com/shadcn.png"
            organizerName="Adeniyi Daniel"
            stadiumName="teslim balogun sTADIUM"
            eventTime="2:30PM"
            eventDate="12 May, 2022"
            extraBasis="md:basis-1/4 pb-4"
          />
          <TurfDashCard
            stadiumImage="/images/playerScheduleImage.png"
            avatarImage="https://github.com/shadcn.png"
            organizerName="Adeniyi Daniel"
            stadiumName="teslim balogun sTADIUM"
            eventTime="2:30PM"
            eventDate="12 May, 2022"
            extraBasis="md:basis-1/4 pb-4"
          />
          <TurfDashCard
            stadiumImage="/images/playerScheduleImage.png"
            avatarImage="https://github.com/shadcn.png"
            organizerName="Adeniyi Daniel"
            stadiumName="teslim balogun sTADIUM"
            eventTime="2:30PM"
            eventDate="12 May, 2022"
            extraBasis="md:basis-1/4 pb-4"
          />
          <TurfDashCard
            stadiumImage="/images/playerScheduleImage.png"
            avatarImage="https://github.com/shadcn.png"
            organizerName="Adeniyi Daniel"
            stadiumName="teslim balogun sTADIUM"
            eventTime="2:30PM"
            eventDate="12 May, 2022"
            extraBasis="md:basis-1/4 pb-4"
          />
          <TurfDashCard
            stadiumImage="/images/playerScheduleImage.png"
            avatarImage="https://github.com/shadcn.png"
            organizerName="Adeniyi Daniel"
            stadiumName="teslim balogun sTADIUM"
            eventTime="2:30PM"
            eventDate="12 May, 2022"
            extraBasis="md:basis-1/4 pb-4"
          />
          <TurfDashCard
            stadiumImage="/images/playerScheduleImage.png"
            avatarImage="https://github.com/shadcn.png"
            organizerName="Adeniyi Daniel"
            stadiumName="teslim balogun sTADIUM"
            eventTime="2:30PM"
            eventDate="12 May, 2022"
            extraBasis="md:basis-1/4 pb-4"
          />
          <TurfDashCard
            stadiumImage="/images/playerScheduleImage.png"
            avatarImage="https://github.com/shadcn.png"
            organizerName="Adeniyi Daniel"
            stadiumName="teslim balogun sTADIUM"
            eventTime="2:30PM"
            eventDate="12 May, 2022"
            extraBasis="md:basis-1/4 pb-4"
          />
        </div>

        <Separator className="mt-8" />
        <Pagination />
      </section>
    </>
  );
};

export default AllGames;
