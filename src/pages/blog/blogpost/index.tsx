import React from 'react'
import BlogCardContainer from '~/components/Blog/BlogCardContainer'
import BlogPostContent from '~/components/Blog/BlogPostContent'
import BlogPostHero from '~/components/Blog/BlogPostHero'
import ContactUs from '~/components/Blog/ContactUs'
import { Footer, NavBar } from '~/components/common'

const index = () => {
  return (
    <>
      <NavBar />
      <BlogPostHero />
      <BlogPostContent />

      <div className='px-4 md:px-24'>
        <h1 className='text-4xl font-bold uppercase leading-[45px]'>Up Next</h1>
      </div>
      <BlogCardContainer />

      <ContactUs />
      <Footer />
    </>
  )
}

export default index
