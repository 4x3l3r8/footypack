import React from 'react'

interface aboutProp {
    title: string;
    paragraph: string[];
}

const AboutDetails = ({title, paragraph}: aboutProp) => {
  return (
    <>
    <section className="px-4 md:px-48">
    <div className='py-12 about'>
        <h1 className='uppercase font-extrabold text-3xl py-5'>{title}</h1>

        {
            paragraph.map((para, index) =>(
                <p key={index}>
                    {para}
                 </p>
            ))
        }
        
    </div>
    </section>
    </>
  )
}

export default AboutDetails