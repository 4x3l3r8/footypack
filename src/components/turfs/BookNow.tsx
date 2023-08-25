"use client";
import * as React from "react"
import { useState } from "react";
import { Info } from 'lucide-react';
import { Card,  CardContent, CardDescription, CardHeader, CardTitle, } from "~/components/ui/card";
import { cn } from "~/lib/utils";
import { format } from "date-fns"
import { Calendar } from "~/components/ui/calendar"
import { Button } from "~/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip"

import {
  Command,
  CommandGroup,
  CommandItem,
} from "~/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { CheckIcon, ChevronsUpDown } from "lucide-react";

const Duration = [
  {
    value: "1 session (1 hrs)",
    label: "1 session (1 hrs)",
  },
  {
    value: "2 sessions (2 hrs)",
    label: "2 sessions (2 hrs)",
  },
];

const TimeSlot = [
  {
    value: "09:30AM",
    label: "09:30AM",
  },
  {
    value: "10:30AM",
    label: "10:30AM",
  },
  {
    value: "11:30AM",
    label: "11:30AM",
  },
  {
    value: "12:30PM",
    label: "12:30PM",
  },
  {
    value: "02:30PM",
    label: "02:30PM",
  },

];

const Teamsize = [
  {
    value: "team5",
    label: "5-a-side",
  },
  {
    value: "team6",
    label: "6-a-side",
  },
  {
    value: "team7",
    label: "7-a-side",
  },
  {
    value: "team8",
    label: "8-a-side",
  },
  {
    value: "team9",
    label: "9-a-side",
  },
  {
    value: "team10",
    label: "10-a-side",
  },
  {
    value: "team11",
    label: "11-a-side",
  },
];

const BookNow = () => {
  const [date, setDate] = React.useState<Date>()
  const [numberOfSets, setNumberOfSets] = useState<number>(1);
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const [openTeamSize, setOpenTeamSize] = React.useState(false)
  const [valueTeamSize, setValueTeamSize] = React.useState("")
  const [openRank, setOpenRank] = React.useState(false)
  const [valueRank, setValueRank] = React.useState("")
  const [openTime, setOpenTime] = React.useState(false)
  const [valueTime, setValueTime] = React.useState("")


  const handleNumberOfSets = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfSets(Number(e.target.value));
  };

    const handleSubmit = () => {
    // Handle the booking logic here, e.g., send the selected options to the server
    console.log("Booking a game...", {
      date,
      valueTime,
      valueTeamSize,
      valueRank,
      value,
    });
  };

  return (
    <Card className='mx-auto flex h-full w-4/5 flex-col '>
           <CardHeader className="font-barlow mx-4">
         <CardDescription>Turf fee</CardDescription>
         <CardTitle className="font-bold text-2xl">
           N2,500/<span className="text-md font-normal">Session</span>
         </CardTitle>
       </CardHeader>

       <CardContent>
       <div className="flex flex-wrap ">
           <div className='w-ful md:w-1/2 px-4'>
       <div className="w-full p-2 mt-1 border-2 border-gray-300 rounded focus:ring focus:ring-blue-200 bg-white text-gray-700 placeholder-gray-400">
           <span>Date <b className='text-red-400'>*</b></span>

           <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start border-none p-0 hover:bg-transparent text-black  text-left font-normal",
            !date && "text-black hover:text-black capitalize"
          )}
        >
          {/* <CalendarIcon className="mr-2 h-4 w-4" /> */}
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
            </div>
          </div>
{/* TIME */}

<div className='w-ful md:w-1/2 px-4'>
       <div className="w-full p-2 mt-1 border-2 border-gray-300 rounded focus:ring focus:ring-blue-200 bg-white text-gray-700 placeholder-gray-400">
           <span className='block'>Time <b className='text-red-400'>*</b></span>
           <Popover open={openTime} onOpenChange={setOpenTime}>
      <PopoverTrigger asChild>
        <Button
          variant="link"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between border-none  p-0 capitalize text-black"
        >
          {valueTime
            ? TimeSlot.find((framework) => framework.value === valueTime)?.label
            : "Select time"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 ">
        <Command>
          <CommandGroup>
            {TimeSlot.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValueTime(currentValue === valueTime ? "" : currentValue);
                  setOpenTime(false);
                }}
              >
                {framework.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    valueTime === framework.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>

          </div>
          </div>

</div>

<div className='w-full mt-4 px-4'>
<div className="w-full p-2 mt-1 border-2 border-gray-300 rounded focus:ring focus:ring-blue-200 bg-white text-gray-700 placeholder-gray-400">
<div className='flex items-center'>
               <span className=''>Section <b className='text-red-400'>*</b> </span>
               <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                      <Info className='w-4 h-4 ml-3' />
              </TooltipTrigger>
                  <TooltipContent>
                    <p>sections are the number of hours you would be playing for. <br/>
                    A section is 1hr for every turf. You can have sets in a section</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

               </div>
               <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="link"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between border-none p-0 capitalize text-black"
        >
          {value
            ? Duration.find((framework) => framework.value === value)?.label
            : "Select number of hours..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 ">
        <Command>
          <CommandGroup>
            {Duration.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                {framework.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === framework.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
    </div>
    </div>

<div className="w-full  px-4 mt-4">
  <div className="w-full p-2 border-2 border-gray-300 rounded focus:ring focus:ring-blue-200">
<div className='flex items-center'>
               <span className=''>Enter Number of Sets <b className='text-red-400'>*</b> </span>
               <Info className='w-4 h-4 ml-3' />

               </div>
            <input
              type="number"
              id="numberOfSets"
              value={numberOfSets}
              onChange={handleNumberOfSets}
              className="appearance-none outline-none"
            />
          </div>
          </div>


            <div className="flex flex-wrap ">
           <div className="w-full md:w-1/2 px-4 mt-4">
           <div className="w-full p-2 mt-1 border-2 border-gray-300 rounded focus:ring focus:ring-blue-200 bg-white text-gray-700 placeholder-gray-400">
       <div className='flex items-center'>
               <span className=''>Team Size <b className='text-red-400'>*</b> </span>
               <Info className='w-4 h-4 ml-3' />

               </div>
               <Popover open={openTeamSize} onOpenChange={setOpenTeamSize}>
      <PopoverTrigger asChild>
        <Button
          variant="link"
          role="combobox"
          aria-expanded={openTeamSize}
          className="w-full justify-between border-none p-0 capitalize text-black"
        >
          {valueTeamSize
            ? Teamsize.find((size) => size.value === valueTeamSize)?.label
            : "Select team size"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 ">
        <Command>
          <CommandGroup>
            {Teamsize.map((size) => (
              <CommandItem
                key={size.value}
                value={size.value}
                onSelect={(currentValues) => {
                  setValueTeamSize(currentValues === valueTeamSize ? "" : currentValues);
                  setOpenTeamSize(false);
                }}
              >
                {size.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    valueTeamSize === size.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
</div>
          </div>


          <div className="w-full md:w-1/2 px-4 mt-4">
          <div className="w-full p-2 mt-1 border-2 border-gray-300 rounded focus:ring focus:ring-blue-200 bg-white text-gray-700 placeholder-gray-400">
       <div className='flex items-center'>
               <span className=''>Player Rank <b className='text-red-400'>*</b> </span>
               <Info className='w-4 h-4 ml-3' />

               </div>
               <Popover open={openRank} onOpenChange={setOpenRank}>
      <PopoverTrigger asChild>
        <Button
          variant="link"
          role="combobox"
          aria-expanded={openRank}
          className="w-full justify-between border-none p-0 capitalize text-black"
        >
          {valueRank
            ? Teamsize.find((size) => size.value === valueRank)?.label
            : "All ranks"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 ">
        <Command>
          <CommandGroup>
            {Teamsize.map((size) => (
              <CommandItem
                key={size.value}
                value={size.value}
                onSelect={(currentValue) => {
                  setValueRank(currentValue === valueRank ? "" : currentValue);
                  setOpenRank(false);
                }}
              >
                {size.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    valueRank === size.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
          </div>
          </div>
</div>
             <div className="bg-[#fff9f0] mx-4 flex items-center border-2 border-[#fff9f0] rounded px-4 mt-4">
             <Info className="text-[#F18322] w-8 h-8" />
             <h2 className="ml-4">You wont be charged yet, you would have the chance to select to pay for all or 1 (one) ticket.</h2>
             </div>

 {/* Submit Button */}
             <div className="w-full px-4 mt-4">
            <button
              className="bg-[#006716] uppercase w-full hover:bg-[#006716]  text-white font-semibold
              py-4 px-4 rounded focus:outline-none focus:ring focus:ring-blue-200"
              onClick={handleSubmit}
            >
              Book a Game
            </button>
            </div>
        </CardContent>

        </Card>


  )
}

export default BookNow

