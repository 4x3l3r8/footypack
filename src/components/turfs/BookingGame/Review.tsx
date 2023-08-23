import Image from 'next/image'
import React from 'react';
import { MoreHorizontal } from 'lucide-react';

export const Review = () => {

  return (
        <div className='w-3/4 mb-4 '>
    <div className='flex items-center space-x-4'>
    <Image src='../images/profile.svg' width={50} height={50} alt='profile pic' />
    <div className='flex justify-between gap-4'>
    <div>
    <h1 className='italics font-semibold text-xl'>Williams Chubby</h1>
    <span className='text-[#777]'>22 Feb, 2021</span>
    </div>

    <div className='self-start flex space-x-2'>
    <Image src='../images/Star.svg' width={20} height={20} alt='star' />
    <h1 className='font-bold'>5.0</h1>
    </div>
<span className='ml-[120px]'>
<MoreHorizontal />

</span>

    </div>


    </div>

    <h1 className='leading-[160%] mt-4'>Nice football pitch with a comfortable seats to sit while watching football.
         I’m watching a football  Mini- match right now and the atmosphere is really pleasant
         </h1>
         <hr className='mt-2 border-1 ' />
        </div>


  )
}
