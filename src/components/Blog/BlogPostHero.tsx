import React from "react";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import BlogPostHeroTitle from "./BlogPostHeroTitle";

const BlogPostHero = () => {
  return (
    <>
      <section className="blog_post_hero relative flex h-[500px] flex-col justify-between px-4 py-6 md:flex-row md:items-end md:px-24">
        <Button
          variant={"secondary"}
          size={"sm"}
          className="absolute top-3/4 rounded-none font-semibold"
        >
          <ArrowLeft />
          Go Back
        </Button>
        
        <BlogPostHeroTitle />
      </section>
    </>
  );
};

export default BlogPostHero;
