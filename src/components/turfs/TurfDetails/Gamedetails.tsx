import React from 'react'
import { ChevronLeft, MapPin } from "lucide-react";
import { type NextPage } from "next";
import Link from "next/link";
import { Carousel, Share } from "~/components/common";
import { Layout } from "~/components/layouts";
import { AboutTurfTab } from "~/components/turfs/AboutTab";
import { TurfGames } from "~/components/turfs/TurfGames";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import Image from 'next/image';
import ball2 from "public/images/ball2.svg";
import profile from "public/images/profile.svg";
import yellowCard from "public/images/yellowCard.svg";
import court from 'public/images/court.png'
import { Clock,User  } from 'lucide-react';

const Gamedetails = () => {
  return (
    <Layout rareOcassions>
        <div className='px-8'>
        <Card className="mb-4 rounded-t-none border-t-0">
        <CardContent className="py-3">
          <Button variant={"ghost"} asChild>
            <Link href={"/turfs"}>
              <ChevronLeft className="mr-2 h-5 w-5" />
              <h3 className="text-base font-semibold">Go back</h3>
            </Link>
          </Button>
        </CardContent>
      </Card>
{/* set */}
<div>
    <Card className='mb-4 rounded py-6 bg-black'>
        <CardContent className='italic'>
            <p className='text-white'>SET 1</p>
            <div className='flex justify-center'>
            <div className='flex justify-between gap-4'>
        <div className='flex items-center gap-4'>
            <h1 className='text-white font-medium text-2xl uppercase'>Team Blue</h1>
            <div className='bg-[#1974EE] text-white py-4 px-6 rotate-[12.5deg] -skew-y-12'>0</div>
        </div>
            </div>

            <h1 className='text-white text-xl flex items-center ml-4'>VS</h1>

            <div className='flex justify-between gap-4'>
        <div className='flex items-center gap-4'>
        <div className='bg-[#FFD91F] ml-4 py-4 px-6 rotate-[12.5deg] -skew-y-12'>0</div>
            <h1 className='text-white font-medium text-2xl uppercase'>Team Yellow</h1>
        </div>
            </div>
            </div>

        </CardContent>

    </Card>
</div>

<div className='bg-[#FAFAFA]'>
<div className=" py-2 flex flex-col justify-center sm:py-2">
  <div className="py-3 sm:max-w-2xl sm:mx-auto w-full px-2 sm:px-0">

    <div className="relative text-gray-700 antialiased text-sm font-semibold">

      {/* <!-- Vertical bar running through middle --> */}
      {/* <div className="hidden sm:block w-1 bg-blue-300 absolute h-full left-1/2 transform -translate-x-1/2"></div> */}

      {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}

      <div className="mt-6 sm:mt-0 sm:mb-12">
        <div className="flex flex-col ml-[150px] sm:flex-row items-center">
          <div className="flex justify-end ml-4 w-full mx-auto items-center">
            <div className="w-full sm:w-3/5 sm:pl-8">
              <div className="p-4 bg-white rounded shadow flex items-center gap-4">
                <Image src={ball2} height={20} width={20} alt='ball' />
                  <p className='uppercase text-xl font-bold'> Chibuzor collins</p>
              </div>
            </div>
          </div>
          <div className=" absolute text-xl font-bold uppercase left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
           4mins
          </div>
        </div>
              <div className="hidden sm:block w-[2px] bg-[#C3C3C3] absolute h-10 left-1/2 transform -translate-x-1/2"></div>

      </div>

      {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
      <div className="mt-6 sm:mt-0 sm:mb-12">
        <div className="flex flex-col mr-[150px] sm:flex-row items-center">
          <div className="flex justify-start w-full mx-auto items-center">
            <div className="w-full sm:w-3/5 sm:pr-8">
            <div className="p-4 bg-white rounded shadow flex items-center gap-4">
                <Image src={ball2} height={20} width={20} alt='ball' />
                  <p className='uppercase text-xl font-bold'> babatunde aliu </p>
              </div>
            </div>
          </div>
          <div className=" absolute text-xl font-bold uppercase left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
           20mins
          </div>
        </div>
        <div className="hidden sm:block w-[2px] bg-[#C3C3C3] absolute h-10 left-1/2 transform -translate-x-1/2"></div>
      </div>

      {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
      <div className="mt-6 sm:mt-0 sm:mb-12">
        <div className="flex flex-col mr-[150px] sm:flex-row items-center">
          <div className="flex justify-start w-full mx-auto items-center">
            <div className="w-full sm:w-3/5 sm:pr-8">
            <div className="p-4 bg-white rounded shadow flex items-center gap-4">
                <Image src={yellowCard} height={20} width={20} alt='ball' />
                  <p className='uppercase text-xl font-bold'> Kolawole adewale </p>
              </div>
            </div>
          </div>
          <div className=" absolute text-xl font-bold uppercase left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
           36mins
          </div>
        </div>
        <div className="hidden sm:block w-[2px] bg-[#C3C3C3] absolute h-10 left-1/2 transform -translate-x-1/2"></div>
      </div>

      {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
      <div className="mt-6 sm:mt-0 sm:mb-12">
        <div className="flex flex-col ml-[150px] sm:flex-row items-center">
          <div className="flex justify-end ml-4 w-full mx-auto items-center">
            <div className="w-full sm:w-3/5 sm:pl-8">
              <div className="p-4 bg-white rounded shadow flex items-center gap-4">
                <Image src={ball2} height={20} width={20} alt='ball' />
                  <p className='uppercase text-xl font-bold'> Chibuzor collins</p>
              </div>
            </div>
          </div>
          <div className=" absolute text-xl font-bold uppercase left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
           48mins
          </div>
        </div>
              {/* <div className="hidden sm:block w-[1px] bg-[#C3C3C3] absolute h-10 left-1/2 transform -translate-x-1/2"></div> */}

      </div>


    </div>

  </div>
  <div className='flex justify-center '>
<button className='py-2 px-6 bg-[#C3C3C3] uppercase font-medium'>Show All Events </button>
</div>
</div>
</div>

{/* Field and match details */}
    <Card className='flex mt-6 '>
      <div className='flex-1 w-64'>
    <Image src={court} height={500} width={600} alt='court'/>
      </div>
    <div className='flex-1 w-32 mt-8'>
    <div className='border-[#F2F2F2] rounded px-4 bg-[#FAFAFA] py-4'>
      <div>
      <h1 className='font-bold'>MATCH INFORMATION</h1>
      <div className='w-36'>
      <div className='grid grid-cols-2 gap-[4rem] w-[400px] mt-6'>
          <div className='flex items-center justify-start gap-4'>
          <Image src={ball2} height={20} width={20} alt='valll' />
          <div className=''>
          <h2 className='font-bold'>FRIENDLY GAME</h2>
          5-a-Side
          </div>
          </div>

        <div className='flex items-center justify-start gap-4'>
         <User  />
          <div className=''>
          <h2 className='font-bold'>ABDUL KAREEM</h2>
          Host
          </div>
          </div>

          <div className='flex items-center justify-start gap-4'>
          <Clock className='h-8 w-8'/>
          <div className=''>
          <h2 className='font-bold'>KICK-OFF</h2>
          <p>Yesterday , Sat 28 Sept, 2022</p>
          </div>
          </div>

      </div>
      </div>
      </div>
    </div>
    <div className='mt-8'>
    <div className='border-[#F2F2F2] border-1  rounded px-4 bg-[#FAFAFA] py-4'>
      <div className='flex w-32 gap-24'>
      <div className=' flex-1  '>
    <div className='bg-[#1974EE] text-white  items-center py-4 px-6 rotate-[12.5deg] -skew-y-12'>
      <p className='flex items-center justify-center uppercase font-medium'>      TEAM blue
</p>
       </div>
    <div className='grid grid-rows-1'>
    <div className='flex items-center w-[250px] py-4 justify-start gap-4'>
    <Image src={profile} width={50} height={50} alt='profile pic' />

          <div className='w-[200px]'>
          <h2 className='font-bold uppercase'>empty sPot</h2>
          <p className='text-[#757575]'>Goal Keeper</p>
          </div>
    </div>

    <div className='flex items-center py-4 justify-start gap-4'>
    <Image src={profile} width={50} height={50} alt='profile pic' />

          <div className='w-[200px]'>
          <h2 className='font-bold uppercase'>Patrick. B</h2>
          <p className='text-[#757575]'>F.Attacking Midfielder</p>
          </div>
    </div>

    <div className='flex items-center py-4 justify-start gap-4'>
    <Image src={profile} width={50} height={50} alt='profile pic' />

          <div className='w-[200px]'>
          <h2 className='font-bold uppercase'>Queennette o.</h2>
          <p className='text-[#757575]'>C.Attacking Midfielder</p>
          </div>
    </div>
    </div>

    </div>
    {/* end of team blue */}

    <div className=' flex-1  '>
    <div className='bg-[#FFD91F] text-black  items-center py-4 px-6 rotate-[12.5deg] -skew-y-12'>
      <p className='flex items-center justify-center uppercase font-medium'>      TEAM blue
</p>
       </div>
    <div className='grid grid-rows-1'>
    <div className='flex items-center w-[250px] py-4 justify-start gap-4'>
    <Image src={profile} width={50} height={50} alt='profile pic' />

          <div className='w-[200px]'>
          <h2 className='font-bold uppercase'>empty sPot</h2>
          <p className='text-[#757575]'>Goal Keeper</p>
          </div>
    </div>

    <div className='flex items-center py-4 justify-start gap-4'>
    <Image src={profile} width={50} height={50} alt='profile pic' />

          <div className='w-[200px]'>
          <h2 className='font-bold uppercase'>Patrick. B</h2>
          <p className='text-[#757575]'>F.Attacking Midfielder</p>
          </div>
    </div>

    <div className='flex items-center py-4 justify-start gap-4'>
    <Image src={profile} width={50} height={50} alt='profile pic' />

          <div className='w-[200px]'>
          <h2 className='font-bold uppercase'>Queennette o.</h2>
          <p className='text-[#757575]'>C.Attacking Midfielder</p>
          </div>
    </div>
    </div>

    </div>
      </div>

    </div>

    </div>
    </div>
    </Card>
        </div>
    </Layout>
  )
}

export default Gamedetails