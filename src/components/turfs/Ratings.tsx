import Image from 'next/image';
import React from 'react';


interface RatingProps {
  rating: number; // Current rating (1 to 5)
}

const Ratings: React.FC<RatingProps> = ({ rating }) => {
  return (
    <div>
    <div className="flex items-center gap-4 ">
        <div className='block space-y-4'>
      {[5,4,3,2,1].map((num) => (
        <div key={num} className="flex items-center space-x-3 text-[#545454] font-medium italic ">
          <span>{num}</span>
          <div className="md:w-[520px] w-[200px] h-3 bg-[#F2F2F2] rounded-lg ">
            <div
              className={`h-full space-y-6 ${
                num <= rating ? 'bg-[#F18322] rounded-lg' : ''
              } transition-all`}
              style={{ width: `${(rating / 5) * 100}%` }}
            ></div>
          </div>
        </div>
      ))}
      </div>
       <div>
    <div className='block'>
            <span className='flex items-center'>
                <h1 className='text-6xl font-bold mr-2'>4.2</h1>
            <Image src='../images/Star.svg' width={55} height={55} alt='star' />
            </span>
        </div>
        <p className='uppercase text-[#545454] text-xl font-medium italic'>93 Reviews</p>

    </div>
    </div>


    </div>
  );
};

export default Ratings;
