import React from "react";
import TurfHeader from "./TurfHeader";
import TurfCard from "./TurfCard";

const TurfSect = () => {
  return (
    <>
      <section className="p-4 md:px-24 bg-white">
        <TurfHeader title="turfs near you" linkTo="See all" />

        <div className="my-4 flex flex-wrap">
          <TurfCard
            turfName="Maktown Stadium"
            rating={5.0}
            address="Adekunle 101245, Lagos"
            noOfPitch={5}
          />
          <TurfCard
            turfName="Maktown Stadium"
            rating={5.0}
            address="Adekunle 101245, Lagos"
            noOfPitch={5}
          />
          <TurfCard
            turfName="Maktown Stadium"
            rating={5.0}
            address="Adekunle 101245, Lagos"
            noOfPitch={5}
          />
          <TurfCard
            turfName="Maktown Stadium"
            rating={5.0}
            address="Adekunle 101245, Lagos"
            noOfPitch={5}
          />
        </div>
      </section>
    </>
  );
};

export default TurfSect;
