"use client";
import { useState } from "react";
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { Info } from 'lucide-react';
import { Card,  CardContent, CardDescription, CardHeader, CardTitle, } from "~/components/ui/card";
import Image from 'next/image';

const BookNow = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedSessions, setSelectedSessions] = useState<number>(0);
  const [teamsize, setTeamsize] = useState<number>(1);
  const [allRanks, setAllRanks] = useState<number>(1);
  // const [selected, setSelected] = useState(options[0]);
  const [numberOfSets, setNumberOfSets] = useState<number>(1);

    const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTime(e.target.value);
  };

  const handleSessionsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSessions(Number(e.target.value));
  };

  const handleTeamSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTeamsize(Number(e.target.value));
  };

  const handleAllRanks = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAllRanks(Number(e.target.value));
  };

  const handleNumberOfSets = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfSets(Number(e.target.value));
  };

    const handleSubmit = () => {
    // Handle the booking logic here, e.g., send the selected options to the server
    console.log("Booking a game...", {
      selectedDate,
      selectedTime,
      selectedSessions,
      teamsize,
      allRanks,
    });
  };

    const renderTimeOptions = () => {
    const timeOptions: string[] = [];
    const startDate = new Date();
    startDate.setHours(9, 0, 0, 0);

    while (startDate.getHours() < 18) {
      timeOptions.push(startDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      startDate.setMinutes(startDate.getMinutes() + 90);
    }

    return timeOptions.map((time, index) => (
      <option key={index} value={time}>
        {time}
      </option>
    ));
  };

    const renderSessionOptions = () => {
    return (
      <>
        <option value={0}>Select numer of hours</option>
        <option value={1}>1 session (1 hr)</option>
        <option value={2}>2 sessions (2 hrs)</option>
      </>
    );
  };

    const renderTeamSize = () => {
    return (
      <>
        <option value={1}>5-a-side</option>
        <option value={2}>6-a-side</option>
        <option value={3}>7-a-side</option>
        <option value={4}>8-a-side</option>
        <option value={5}>9-a-side</option>
        <option value={6}>10-a-side</option>
        <option value={7}>11-a-side</option>
      </>
    );
  };

  const renderAllRanks = () => {
    return (
      <>
        <option value={1}>5</option>
        <option value={2}>6</option>
        <option value={3}>7</option>
        <option value={4}>8</option>
        <option value={5}>9</option>
      </>
    );
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

             <DatePicker
             id="datepicker"
             placeholderText="Select date"
             selected={selectedDate}
             onChange={handleDateChange}
             minDate={new Date()} // Disable past dates
             dateFormat="dd/MM/yyyy"
             popperPlacement="bottom-start" // Adjust the date picker placement
             popperModifiers={{
               offset: {
                 enabled: true,
                 offset: "0, 10",
               },
               preventOverflow: {
                 enabled: true,
                 escapeWithReference: false,
                 boundariesElement: "viewport",
               },
             }}
             calendarClassName="my-custom-calendar" // Apply custom class to the calendar
            />
            </div>
          </div>
{/* TIME */}

<div className='w-ful md:w-1/2 px-4'>
       <div className="w-full p-2 mt-1 border-2 border-gray-300 rounded focus:ring focus:ring-blue-200 bg-white text-gray-700 placeholder-gray-400">
           <span className='block'>Time <b className='text-red-400'>*</b></span>

            <select
              id="timepicker"
              value={selectedTime}
              onChange={handleTimeChange}
            >
              <option value="">Select a time</option>
              {renderTimeOptions()}
            </select>
          </div>
          </div>

</div>

<div className='w-full mt-4 px-4'>
       <div className="w-full p-2 mt-1 border-2 border-gray-300 rounded focus:ring focus:ring-blue-200 bg-white text-gray-700 placeholder-gray-400">
       <div className='flex items-center'>
               <span className=''>Section <b className='text-red-400'>*</b> </span>
               <Info className='w-4 h-4 ml-3' />

               </div>
               <span className="flex justify-between items-center">
             <select
              id="sessions"
              value={selectedSessions}
              onChange={handleSessionsChange}
              className="appearance-none outline-none"
            >

              {renderSessionOptions()}

            </select>
            <Image src='../images/chevron-up-down.svg' width={30} height={20} alt="up and down" />
            </span>
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
             <select
              id="teamsize"
              value={teamsize}
              onChange={handleTeamSize}
              className="appearance-none outline-none"
            >
              {renderTeamSize()}
            </select>
</div>
          </div>


          <div className="w-full md:w-1/2 px-4 mt-4">
          <div className="w-full p-2 mt-1 border-2 border-gray-300 rounded focus:ring focus:ring-blue-200 bg-white text-gray-700 placeholder-gray-400">
       <div className='flex items-center'>
               <span className=''>Player Rank <b className='text-red-400'>*</b> </span>
               <Info className='w-4 h-4 ml-3' />

               </div>
            <select
              id="allRanks"
              value={allRanks}
              onChange={handleAllRanks}
              className="appearance-none outline-none"
            >
              {renderAllRanks()}
            </select>
          </div>
          </div>
</div>
             <div className="bg-[#fff9f0] mx-4 flex items-center border-2 border-[#fff9f0] rounded px-4 mt-4">
             <Info className="text-[#F18322] w-8 h-8" />
             <h2 className="ml-4">You won't be charged yet, you would have the chance to select to pay for all or 1 (one) ticket.</h2>
             </div>

 {/* Submit Button */}
             <div className="w-full px-4 mt-4">
            <button
              className="bg-[#006716] uppercase w-full hover:bg-blue-700 text-white font-semibold
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

