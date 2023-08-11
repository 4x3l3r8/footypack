import React from 'react'
import BlogCard from './BlogCard'

const BlogCardContainer = () => {
  return (
    <>
    {/* Blog Cards section */}
    <div className="my-8 flex flex-col md:flex-row w-screen gap-5 px-4 md:px-24 py-4">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </>
  )
}

export default BlogCardContainer