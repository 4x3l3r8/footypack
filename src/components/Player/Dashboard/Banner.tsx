import Image from 'next/image'
import React from 'react'
import Countdown from '../../common/Countdown'

const Banner = () => {
    const targetDate = new Date("2023-10-21 04:31:59").getTime();

  return (
    <>
    <div className="relative my-4 h-36 basis-3/4 md:my-0">
            <div className="h-full w-full">
              <Image src={"/images/playerComp2.png"} fill alt="" />
            </div>

            <div className="absolute left-0 top-0 flex h-full w-full justify-between py-4">
              <div className="self-end px-4 font-bold uppercase text-white">
                <h1 className="mb-1 inline-block bg-primary p-2 px-4">Lagos</h1>
                <br />
                <h1 className="inline-block bg-primary p-2 px-4 ">
                  players comp
                </h1>
              </div>

              <div className="flex flex-col justify-between">
                <h1 className="inline-block bg-white p-2 font-bold uppercase text-primary ">
                  next game at ikeja
                </h1>

                {/* <Countdown date={targetDate} renderer={renderer} /> */}
                <Countdown targetDate={targetDate} />
              </div>
            </div>
          </div>
    </>
  )
}

export default Banner