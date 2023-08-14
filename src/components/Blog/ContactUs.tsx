import React from 'react'
import { Button } from '../ui/button'

const ContactUs = () => {
  return (
    <>
      <section className="px-4 md:px-24">
        <div className="border p-4 text-center my-8 rounded-sm shadow-sm">
          <h1 className="my-4 text-4xl font-bold uppercase leading-[55px]">
            stay updated with the latest news
          </h1>

          <p className="text-gray-500">
            Subscribe to the Footypack News Letter
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center md:items-end my-8">
            <div className="flex flex-col text-start gap-2 mb-4 md:mb-0">
              <label htmlFor="subEmail">Email address</label>
              <input type="email" placeholder="e.g. name@domain.com" className="border border-primary -skew-x-12 p-4 w-full md:w-[600px] outline-primary md:mr-4" />
            </div>

            <Button className="-skew-x-12 p-4 h-full">Contact Us</Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUs