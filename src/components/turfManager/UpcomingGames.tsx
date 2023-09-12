import Link from 'next/link';
import React from 'react'
import TurfDashCard from "~/components/turfManager/TurfDashCard";

const UpcomingGames = () => {
  return (
    <>
<div className="flex">
        <div className="mr-4 basis-3/4">
          <div className="mb-4 flex justify-between bg-white p-4 font-bold">
            <h1 className="uppercase">upcoming games</h1>

            <Link href="" className="text-primary underline">
              View All
            </Link>
          </div>

          <div className="flex">
            <TurfDashCard
              stadiumImage="/images/playerScheduleImage.png"
              avatarImage="https://github.com/shadcn.png"
              organizerName="Adeniyi Daniel"
              stadiumName="teslim balogun sTADIUM"
              eventTime="2:30PM"
              eventDate="12 May, 2022"
            />

            <TurfDashCard
              stadiumImage="/images/playerScheduleImage.png"
              avatarImage="https://github.com/shadcn.png"
              organizerName="Adeniyi Daniel"
              stadiumName="teslim balogun sTADIUM"
              eventTime="2:30PM"
              eventDate="12 May, 2022"
            />

            <TurfDashCard
              stadiumImage="/images/playerScheduleImage.png"
              avatarImage="https://github.com/shadcn.png"
              organizerName="Adeniyi Daniel"
              stadiumName="teslim balogun sTADIUM"
              eventTime="2:30PM"
              eventDate="12 May, 2022"
            />
          </div>
        </div>

        <div className="basis-1/4 bg-white">
       
        </div>
      </div>
    </>
  )
}

export default UpcomingGames