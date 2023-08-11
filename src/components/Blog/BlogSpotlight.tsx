import Image from 'next/image'
import React from 'react'

const BlogSpotlight = () => {
  return (
    <>
    {/* Sport highlight section */}
    <section className="my-4">
        <div className="px-4 md:px-24">
          <h1 className="my-4 text-4xl font-bold uppercase leading-[55px]">
            sport highlight for <br /> the week
          </h1>
        </div>
        {/* Placeholder image */}
        <Image src='/images/blog_video_placeholder.png' width={1440} height={400} alt="" />
      </section>
    </>
  )
}

export default BlogSpotlight