import { PlusCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
// import Countdown from 'react-countdown'
import renderer from './RendererCount'
import Countdown from '../common/Countdown'

const Hero = () => {
 const targetDate = new Date('2023-10-21 04:31:59').getTime();
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
                <div className="w-full h-full">
                  <Image src={'/images/playerComp2.png'} fill alt='' />
                </div>

                <div className="absolute w-full h-full left-0 top-0 flex justify-between py-4">
                  <div className='text-white uppercase font-bold px-4 self-end'>
                  <h1 className="bg-primary p-2 px-4 inline-block mb-1">
                    Lagos
                  </h1>
                  <br />
                  <h1 className="bg-primary p-2 px-4 inline-block ">
                    players comp
                  </h1>
                  </div>

                  <div className="flex flex-col justify-between">
                  <h1 className="bg-white text-primary uppercase font-bold p-2 inline-block ">
                    next game at ikeja
                  </h1>

                  {/* <Countdown date={targetDate} renderer={renderer} /> */}
                  <Countdown targetDate={targetDate} />

                  </div>
                </div>
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