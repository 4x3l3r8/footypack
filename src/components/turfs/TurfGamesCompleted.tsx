import Image from 'next/image'
import React from 'react'
import { MoreHorizontal } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from "../ui/button";
import Link from 'next/link';
import { TurfGames } from './TurfGames';

const TurfGamesCompleted = () => {
    const numberofTurfGames = 8; // Number of times to repeat the Review component
  return (
    <div>
    <div>
        <div className="flex flex-col mt-8">
            <Card className="!z-5 relative  rounded-[4px] max-w-[300px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] undefined">
                <div className='flex justify-between mb-4'>
                    <div className='flex items-center space-x-3'>
                        <Image src='/images/profile1.svg' width={28} height={28} alt='profile picture' />
                        <h1 className=''>Peter Ademola</h1>
                    </div>
                    <MoreHorizontal />

                </div>
                <div className="h-full w-full bg-[#FAFAFA] px-2 py-4">
                    <div>
                    <div className=" flex items-center justify-between px-1 md:items-start">
                        <div className="">
                            <p className="mt-1 text-sm font-medium uppercase md:mt-2">Set 1</p>
                        </div>
                        <div className="flex flex-row-reverse md:mt-2 lg:mt-0">
                            <span className="z-0 ml-px inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-[#006716] bg-[#D3FDDC] text-xs text-navy-700 ">+4</span><span className="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
                                <Image width={20} height={20} className="h-full w-full rounded-full object-cover" src="/images/profile1.svg" alt="sometext" />
                            </span>
                            <span className="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
                                <Image width={20} height={20} className="h-full w-full rounded-full object-cover" src="/images/profile2.svg" alt="sometext" />
                            </span>
                            <span className="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
                                <Image width={20} height={20} className="h-full w-full rounded-full object-cover" src="/images/profile1.svg" alt="sometext" />
                            </span>
                        </div>
                        </div>

                        <div className='flex items-center justify-between mt-2 mx-4'>
                    <div className='mb-0 w-20 flex justify-center rotate-[12.5deg] bg-[#1974EE] rounded-none  -skew-y-12 px-4 py-2 h-12'>
                    <p className='text-white font-bold text-xl'>4</p>
                    </div>

                    <h2>VS</h2>

                    <div className='mb-0 w-20 flex justify-center items-center rotate-[12.5deg] bg-[#FFD91F] rounded-none  -skew-y-12 px-4 py-2 h-12'>
                    <p className='text-white font-bold text-xl'>3</p>
                    </div>
                        </div>
                        <div className='mt-2 flex justify-center'>
                        <Button
        size={"sm"}
        variant={"outline"}
        className="mb-0 w-fit flex underline border-none text-[#1974EE]"
      >
        <span className="rotate-0 skew-y-0 text-sm">GET DIRECTION</span>
      </Button>
      </div>
                    </div>


                </div>
            </Card>
        </div>
    </div>
    <div className="border-2 rounded border-[#E0E0E0] p-4 mt-6">
    <div className="flex justify-between items-center">
    <h1 className="font-bold italic text-2xl uppercase">OTHER UPCOMING GAMES ON THIS TURF</h1>
    <Link href='#' className="underline uppercase text-[#1974EE] font-semibold flex items-center gap-2 ">
    View all
    <Image src='../images/arrow.svg' width={20} height={20} alt="arrow right" />
    </Link>
 </div>
 </div>

 <div className='mx-10 grid lg:grid-cols-4 md:grid-cols-4 gap-4 mt-8'>
                {Array.from({ length: numberofTurfGames }).map((_, index) => (
                  <TurfGames key={index} />
                ))}
              </div>
</div>
  )
}

export default TurfGamesCompleted