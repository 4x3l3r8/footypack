import React from "react";
import TurfHeader from "./TurfHeader";
import TurfCard from "./TurfCard";
import Link from "next/link";

const TurfSect = () => {
  return (
    <>
      <section className="p-4 md:px-24 bg-white">
        <TurfHeader href={"/turfs"} title="turfs near you" linkTo="See all" />

        <div className="my-4 flex flex-wrap">
          <Link href={"/turfs/1"} className="contents">
            <TurfCard
              turfName="Maktown Stadium"
              rating={5.0}
              address="Adekunle 101245, Lagos"
              noOfPitch={5}
            />
          </Link>
          <Link href={"/turfs/1"} className="contents">
            <TurfCard
              turfName="Maktown Stadium"
              rating={5.0}
              address="Adekunle 101245, Lagos"
              noOfPitch={5}
            />
          </Link>
          <Link href={"/turfs/1"} className="contents">
            <TurfCard
              turfName="Maktown Stadium"
              rating={5.0}
              address="Adekunle 101245, Lagos"
              noOfPitch={5}
            />
          </Link>
          <Link href={"/turfs/1"} className="contents">
            <TurfCard
              turfName="Maktown Stadium"
              rating={5.0}
              address="Adekunle 101245, Lagos"
              noOfPitch={5}
            />
          </Link>
        </div>
      </section>
    </>
  );
};

export default TurfSect;
