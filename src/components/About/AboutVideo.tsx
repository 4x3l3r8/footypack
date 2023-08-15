import Image from 'next/image'
import React from 'react'

const AboutVideo = () => {
  return (
    <>
    <section className="">
        <Image className='object-fit' src={'/images/about_video_placeholder.png'} width={1440} height={500} alt='' />
    </section>
    </>
  )
}

export default AboutVideo