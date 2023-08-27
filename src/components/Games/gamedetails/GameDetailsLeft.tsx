import React from 'react'
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Separator } from "~/components/ui/separator";
import { Calendar, User, Users, Clock } from "lucide-react";

const GameDetailsLeft = () => {
  return (
    <>
    <div className="basis-1/2">
          <Image
            src="/images/GameDetailsImage.png"
            width={550}
            height={400}
            alt=""
          />
          <div className="my-8">
            <h1 className="text-xl font-bold uppercase">
              fast and skilled with the boys
            </h1>
            <p className="text-gray-500">Game Host</p>
          </div>
          <div className="my-4 flex items-center gap-2">
            <div>
              <Avatar className="h-6 w-6">
                <AvatarImage src="/images/maleAvatar.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>

            <p className="capitalize text-black">Onyekachi Samuel (You)</p>
          </div>
          <Separator />

          <div className="my-8 text-gray-500 text-sm leading-[29px]">
            <p>
              Group of friends who want to play football competitions every
              month. Make new friends, get fit and have fun.
            </p>
            <p className='mb-6'>
              Goal of this group is to be a friendly league for everyone
              interested in playing football. No aggression or physical play
              accepted. Glasses and cleats recommended!
            </p>
            <p>
              Why join us?: - Play with a committed, mature and respectful
              community - We play in a safe environment, with good celebrations
              and no aggression or physical play allowed. Our main objective is
              enjoying the game at a high level but having fun at the same time.
            </p>
          </div>

          <Separator />

          <div className='flex gap-8 my-5'>
            <div>
            <div className='flex mb-6 gap-1 text-sm items-center'>
              <Clock size={14} className='text-[#F47920]' /> 2:30PM
            </div>
            <div className='flex gap-1 text-sm items-center'>
              <Calendar size={14} className='text-[#F47920]' /> 12 May, 2023
            </div>
            </div>
            
            
            <div>
            <div className='flex mb-6 gap-1 text-sm items-center'>
              <Users size={14} className='text-[#F47920]' /> All Gender
            </div>
            <div className='flex gap-1 text-sm items-center'>
              <User size={14} className='text-[#F47920]' /> Age 14-22
            </div>
            </div>

            <div>
            <div className='flex mb-4 gap-1 text-sm items-center'>
              <Users size={14} className='text-[#F47920]' /> 5-Aside
            </div>
            </div>
          </div>

          <Separator />

          <div className="my-4">
            <p className="text-gray-500 text-xl font-semibold">
              Ticket Fee
            </p>

            <div className="flex items-end font-semibold text-gray-600"><h1 className="font-bold text-black text-4xl">N500.00</h1> /player</div>
          </div>

        </div>
    </>
  )
}

export default GameDetailsLeft