import React from "react";
import Banner from "~/components/Player/Dashboard/Banner";
import DashNavBar from "~/components/Player/Dashboard/DashNavBar";
import PlayerScheduleCard from "~/components/Player/PlayerScheduleCard";
import { Footer } from "~/components/common";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";

const index = () => {
  return (
    <>
      <DashNavBar />
      <section className="p-4 md:px-24 md:pt-12">
        <h1 className="py-4 text-xl font-bold uppercase">Your booked games</h1>
        <Banner />

        <div className="my-12 rounded bg-white px-4 py-8 shadow-lg">
          <div className="mb-6 px-2">
            <h1 className="text-xl font-bold uppercase">Your booked games</h1>
            <p className="text-gray-500">Ready to book your next game?</p>
          </div>

          <div className="my-4 flex w-full flex-wrap">
            <PlayerScheduleCard
              stadiumImage="/images/playerScheduleImage.png"
              avatarImage="https://github.com/shadcn.png"
              organizerName="Adeniyi Daniel"
              stadiumName="teslim balogun sTADIUM"
              address="Adekunle 101245, Lagos"
              eventTime="2:30PM"
              eventDate="12 May, 2022"
            />
            <PlayerScheduleCard
              stadiumImage="/images/playerScheduleImage.png"
              avatarImage="https://github.com/shadcn.png"
              organizerName="Adeniyi Daniel"
              stadiumName="teslim balogun sTADIUM"
              address="Adekunle 101245, Lagos"
              eventTime="2:30PM"
              eventDate="12 May, 2022"
            />
            <PlayerScheduleCard
              stadiumImage="/images/playerScheduleImage.png"
              avatarImage="https://github.com/shadcn.png"
              organizerName="Adeniyi Daniel"
              stadiumName="teslim balogun sTADIUM"
              address="Adekunle 101245, Lagos"
              eventTime="2:30PM"
              eventDate="12 May, 2022"
            />
            <PlayerScheduleCard
              stadiumImage="/images/playerScheduleImage.png"
              avatarImage="https://github.com/shadcn.png"
              organizerName="Adeniyi Daniel"
              stadiumName="teslim balogun sTADIUM"
              address="Adekunle 101245, Lagos"
              eventTime="2:30PM"
              eventDate="12 May, 2022"
            />
            <PlayerScheduleCard
              stadiumImage="/images/playerScheduleImage.png"
              avatarImage="https://github.com/shadcn.png"
              organizerName="Adeniyi Daniel"
              stadiumName="teslim balogun sTADIUM"
              address="Adekunle 101245, Lagos"
              eventTime="2:30PM"
              eventDate="12 May, 2022"
            />
            <PlayerScheduleCard
              stadiumImage="/images/playerScheduleImage.png"
              avatarImage="https://github.com/shadcn.png"
              organizerName="Adeniyi Daniel"
              stadiumName="teslim balogun sTADIUM"
              address="Adekunle 101245, Lagos"
              eventTime="2:30PM"
              eventDate="12 May, 2022"
            />
            <PlayerScheduleCard
              stadiumImage="/images/playerScheduleImage.png"
              avatarImage="https://github.com/shadcn.png"
              organizerName="Adeniyi Daniel"
              stadiumName="teslim balogun sTADIUM"
              address="Adekunle 101245, Lagos"
              eventTime="2:30PM"
              eventDate="12 May, 2022"
            />
            <PlayerScheduleCard
              stadiumImage="/images/playerScheduleImage.png"
              avatarImage="https://github.com/shadcn.png"
              organizerName="Adeniyi Daniel"
              stadiumName="teslim balogun sTADIUM"
              address="Adekunle 101245, Lagos"
              eventTime="2:30PM"
              eventDate="12 May, 2022"
            />
            <PlayerScheduleCard
              stadiumImage="/images/playerScheduleImage.png"
              avatarImage="https://github.com/shadcn.png"
              organizerName="Adeniyi Daniel"
              stadiumName="teslim balogun sTADIUM"
              address="Adekunle 101245, Lagos"
              eventTime="2:30PM"
              eventDate="12 May, 2022"
            />
            <PlayerScheduleCard
              stadiumImage="/images/playerScheduleImage.png"
              avatarImage="https://github.com/shadcn.png"
              organizerName="Adeniyi Daniel"
              stadiumName="teslim balogun sTADIUM"
              address="Adekunle 101245, Lagos"
              eventTime="2:30PM"
              eventDate="12 May, 2022"
            />
            <PlayerScheduleCard
              stadiumImage="/images/playerScheduleImage.png"
              avatarImage="https://github.com/shadcn.png"
              organizerName="Adeniyi Daniel"
              stadiumName="teslim balogun sTADIUM"
              address="Adekunle 101245, Lagos"
              eventTime="2:30PM"
              eventDate="12 May, 2022"
            />
            <PlayerScheduleCard
              stadiumImage="/images/playerScheduleImage.png"
              avatarImage="https://github.com/shadcn.png"
              organizerName="Adeniyi Daniel"
              stadiumName="teslim balogun sTADIUM"
              address="Adekunle 101245, Lagos"
              eventTime="2:30PM"
              eventDate="12 May, 2022"
            />
          </div>

          j

          <Separator />

          <div className="flex p-2 font-bold uppercase justify-between items-center text-xs">
            <h1 className="">showing 1 of 3</h1>

            <div className="flex gap-4 items-center">
              <button className="uppercase disabled:text-gray-500" disabled >Prev</button>
              <button className="uppercase disabled:text-gray-500" disabled >1</button>
              <button className="uppercase">2</button>
              <button className="uppercase">3</button>
              <button className="uppercase">next</button>

            </div>
          </div>

        </div>
      </section>
      <Footer />
    </>
  );
};

export default index;
