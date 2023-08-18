import React from "react";
import Hero from "~/components/Player/Hero";
import TurfSect from "~/components/Player/TurfSect";
import { Footer, NavBar } from "~/components/common";

const index = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <TurfSect />
      <Footer />
    </>
  );
};

export default index;
