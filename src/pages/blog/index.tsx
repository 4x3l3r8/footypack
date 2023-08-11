// Import necessary dependencies and components
import Image from "next/image";
import React from "react";
import { Footer, NavBar } from "~/components/common";
import BlogCard from "~/components/Blog/BlogCard";
import { Button } from "~/components/ui/button";
import ContactUs from "~/components/Blog/ContactUs";
import BlogFeature from "~/components/Blog/BlogFeature";
import BlogHero from "~/components/Blog/BlogHero";
import BlogCardContainer from "~/components/Blog/BlogCardContainer";
import BlogSpotlight from "~/components/Blog/BlogSpotlight";

// Define the main component named 'index'
const index = () => {
  return (
    <>
      <NavBar />
      <BlogHero />
      <BlogCardContainer />
      <BlogFeature />

      {/* Additional Blog Cards section */}
      <div className="my-8 flex flex-col md:flex-row w-screen gap-5 px-4 md:px-24 py-4">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>

      <BlogSpotlight />

      <ContactUs />

      <Footer />
    </>
  );
};

// Export the component
export default index;
