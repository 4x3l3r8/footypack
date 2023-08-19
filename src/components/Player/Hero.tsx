import { PlusCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const Hero = () => {
  return (
    <>
    <section className='p-4 md:px-24 md:py-8'>
        <div className='md:flex justify-between'>
          <div className='my-4 md:my-0'>
            <h1 className='text-xl font-bold uppercase'>welcome Queennette,</h1>
            <p className='text-gray-500'>Ready to book your next game?</p>
          </div>
          <div>
            <Button
              className='mr-4 rounded-sm border-[#F24822] text-[#F24822] hover:bg-[#F24822]'
              variant={'outline'}
            >
              create new game
            </Button>
            <Button className='rounded-sm'>join game</Button>
          </div>
        </div>

        <div className="mt-4 md:flex gap-3">
            <div className="basis-3/4 relative h-36 my-4 md:my-0">
                <Image src={'/images/playerComp.png'} fill alt=''/>
            </div>

            <div className="basis-1/4 flex p-4 flex-col justify-between rounded bg-white border-gray-200 border shadow-sm">
                <div className='mb-8'>
                    <p className="text-gray-500 uppercase text-sm">
                    Wallet Balance
                    </p>

                    <h1 className="uppercase font-bold text-3xl">
                    N5,000.00
                    </h1>
                </div>

                <Link href='#' className='text-blue-500 flex underline items-center'>
                    <PlusCircle size={15} className='mr-1' /> <span className='text-xs font-bold'>Add money</span>
                </Link>
            </div>
        </div>
      </section>
    </>
  )
}

export default Hero