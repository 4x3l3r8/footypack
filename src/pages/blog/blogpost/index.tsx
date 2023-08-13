import React from 'react'
import BlogPostHero from '~/components/Blog/BlogPostHero'
import { Footer, NavBar } from '~/components/common'

const index = () => {
  return (
    <>
        <NavBar />
        <BlogPostHero />
        <Footer />
    </>
  )
}

export default index