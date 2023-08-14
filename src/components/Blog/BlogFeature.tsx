import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const BlogFeature = () => {
  return (
    <>
    {/* Featured news section */}
    <div className="px-4 md:px-24">
        <h1 className="my-4 text-4xl font-bold uppercase leading-[55px]">
          This week’s news <br /> feature
        </h1>
        <div className="relative flex flex-col md:flex-row items-center">
          <div className="relative basis-1/2">
            <Image
              className="object-cover"
              src="/images/Blog_Football_Three.png"
              width={780}
              height={500}
              alt=""
            />
          </div>
          <div className="basis-1/2 p-6">
            <h1 className="my-4 text-4xl font-bold uppercase leading-[45px]">
              news and latest <br /> footpack information <br /> for you.
            </h1>
            <p className="my-5">
              {/* Placeholder text */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate omnis ab temporibus, veritatis pariatur necessitatibus quaerat repellendus. Neque molestias, officia aliquam natus unde in laboriosam sit non fuga corrupti quibusdam!
            </p>
            <Button className="my-5">Read More</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogFeature