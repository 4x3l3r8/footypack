import Image from 'next/image'
import React from 'react'
import { MoreHorizontal } from 'lucide-react';
import { Card } from '../ui/card';
import Gamedetails from './TurfDetails/Gamedetails';
import Link from 'next/link';


export const TurfGames = () => {
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
                        <div className="h-full w-full">
                            <div className="relative w-full">
                            <Link href='/turfs/1/turfDetails' className=' cursor-pointer'>
                                <Image src="/images/fieldball.jpg" width={438} height={107} className="mb-3  rounded-xl 3xl:h-full 3xl:w-full" alt="" />
                           </Link>
                            </div>
                            <div className="mb-1 flex items-center justify-between px-1 md:items-start">
                                <div className="mb-2">
                                    <p className="text-2xl font-bold text-navy-700"> 2:30PM </p>
                                </div>
                            </div>

                            <div className=" flex items-center justify-between px-1 md:items-start">
                                <div className="">
                                    <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">12 May, 2023</p>
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

                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}
