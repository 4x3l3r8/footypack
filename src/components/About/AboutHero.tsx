import React from "react";

const AboutHero = () => {
  return (
    <>
      <section className="flex h-[500px] flex-col items-center justify-center p-4 text-center md:px-24">
        <h2 className="inline-block rounded-full bg-secondary p-4 text-center font-bold uppercase">
          About FootyPack
        </h2>

        <h1 className="my-6 text-6xl font-extrabold uppercase">
          making your time <br />{" "}
          <span className="text-primary">worth the experience</span>
        </h1>

        <p className="text-3xl tracking-wide text-gray-500">
          We ease off the stress of finding football turfs located near you.
        </p>
      </section>
    </>
  );
};

export default AboutHero;
