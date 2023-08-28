import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const index = () => {
  const [countdown, setCountdown] = useState(30);
  const router = useRouter()

  useEffect(() => {
    if (countdown <= 0) {
      return router.push('/')
    }

    const timer = setInterval(() => {
      setCountdown(countdown => countdown - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  return (
    <div className="flex h-screen flex-col items-center justify-between p-4 py-12 md:flex-row md:p-24">
      <Link href="/">
        <Image src="/images/NavLogo.svg" width={100} height={100} alt="" />
      </Link>
      <Image src="/images/404.svg" width={400} height={200} alt="404 Image" />

      <div className="flex flex-col justify-center items-center">
        <Image
          src="/images/footballLoading.gif"
          width={150}
          height={150}
          alt=""
        />

       <h1 className="font-bold">You will be redirected to homepage in <span className="text-primary text-xl">{countdown}</span></h1> 
      </div>
    </div>
  );
};

export default index;
