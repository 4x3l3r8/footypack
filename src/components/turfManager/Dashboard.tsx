import React from 'react'
import TurfStat from "~/components/turfManager/TurfStat";
import UpcomingEvents from "~/components/turfManager/UpcomingEvents";
import UpcomingGames from "~/components/turfManager/UpcomingGames";
import { Button } from "~/components/ui/button";

const Dashboard = () => {
  return (
    <>
    <div className="items-end justify-between md:flex">
        <div className="my-4 md:my-0">
          <h1 className="text-xl font-bold uppercase">hi Damilola,</h1>
          <p className="text-gray-500">
            You can track games and checkin players using this system
          </p>
        </div>
        <div>
          <Button className="rounded-sm">start checkin</Button>
        </div>
      </div>

      <TurfStat />

      <UpcomingGames />

      <UpcomingEvents />
    </>
  )
}

export default Dashboard