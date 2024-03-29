import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Index = () => {
  const [countdown, setCountdown] = useState(30);
  const router = useRouter();

  useEffect(() => {
    if (countdown <= 0) {
      return router.push("/");
    }

    const timer = setInterval(() => {
      setCountdown((countdown) => countdown - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  return (
    <div className="relative flex h-screen flex-col items-center justify-center gap-4 overflow-hidden p-4 md:px-24 md:py-12">
      <Link href="/" className="basis-1/4 ">
        <Image src="/images/NavLogo.svg" width={100} height={100} alt="" />
      </Link>

      <div className="relative basis-1/2 text-center">
        <h1 className="text-9xl font-extrabold text-primary">Oops!</h1>
        <p className="mt-8 font-bold uppercase">404 - page not found</p>
        <p className="mx-auto font-semibold text-gray-500 md:w-2/3">
          The page you are looking for might have been removed, had its name
          changed or temporarily unavailable
        </p>
      </div>

      <div className="flex basis-1/4 flex-col items-center justify-center">
        <Image
          src="/images/footballLoading.gif"
          width={150}
          height={150}
          alt=""
        />

        <h1 className="font-bold">
          You will be redirected to homepage in{" "}
          <span className="text-xl text-primary">{countdown}</span> seconds
        </h1>
      </div>
    </div>
  );
};

export default Index;
