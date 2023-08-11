import React from 'react'
import { Button } from '../ui/button'

const BlogHero = () => {
  return (
    <>
    {/* Hero section */}
    <div className="blog_hero flex h-[500px] flex-col md:flex-row md:items-end justify-between px-4 md:px-24 py-6">
        <div className="w-1/2">
          <h1 className="inline-block rounded-full bg-gray-300 p-2 text-sm font-bold">
            Blog Posts
          </h1>
          <p className="my-4 text-4xl font-bold uppercase leading-[55px] text-gray-200">
            news and latest <br /> footpack information <br /> for you.
          </p>
        </div>
        <Button className="mb-4">Subscribe to newsletter</Button>
      </div>
    </>
  )
}

export default BlogHero