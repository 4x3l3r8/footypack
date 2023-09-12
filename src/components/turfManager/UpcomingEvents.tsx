import React from 'react'
import TurfEventCard from './TurfEventCard'
import Link from 'next/link'

const UpcomingEvents = () => {
  return (
    <>
    <section>
      <div className="my-8 flex justify-between bg-white p-4 font-bold">
        <h1 className="uppercase">upcoming events</h1>

        <Link href="" className="text-primary underline">
          View All
        </Link>
      </div>

      <div className="flex">
      <TurfEventCard />
      <TurfEventCard />
      <TurfEventCard />
      <TurfEventCard />

      </div>
      </section>

    </>
  )
}

export default UpcomingEvents