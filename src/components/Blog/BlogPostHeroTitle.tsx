import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const BlogPostHeroTitle = () => {
  return (
    <>
        <div className="absolute top-3/4 md:w-1/2 w-11/12 py-8">
          <div className="my-6 bg-white px-8 py-4">
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>AV</AvatarFallback>
                </Avatar>
                <p className="ml-2 text-sm text-gray-500">Damilola Ibrahim</p>
              </div>

              <p className="text-sm text-gray-500">22/02/2022 04:23 PM</p>
            </div>

            <h1 className="text-2xl font-bold uppercase">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,
              ipsa.
            </h1>
          </div>
        </div>
    </>
  )
}

export default BlogPostHeroTitle