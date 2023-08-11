// Import necessary dependencies and components
import Image from "next/image";
import React from "react";
import { Footer, NavBar } from "~/components/common";
import BlogCard from "~/components/Blog/BlogCard";
import { Button } from "~/components/ui/button";
import ContactUs from "~/components/Blog/ContactUs";

// Define the main component named 'index'
const index = () => {
  return (
    <>
      {/* Render the navigation bar */}
      <NavBar />

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

      {/* Blog Cards section */}
      <div className="my-8 flex flex-col md:flex-row w-screen gap-5 px-4 md:px-24 py-4">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>

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

      {/* Additional Blog Cards section */}
      <div className="my-8 flex flex-col md:flex-row w-screen gap-5 px-4 md:px-24 py-4">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>

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

      {/* ContactUs component */}
      <ContactUs />

      {/* Footer component */}
      <Footer />
    </>
  );
};

// Export the component
export default index;
