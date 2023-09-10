import { ArrowRight } from 'lucide-react';
import Link from 'next/link'
import React from 'react'

interface turfHeaderProps {
  title: string;
  linkTo: string;
  href: string
}

const TurfHeader = ({ title, linkTo }: turfHeaderProps) => {
  return (
    <>
      <div className="flex items-center font-semibold justify-between p-4 border border-gray-300 bg-white">
        <h1 className="font-bold uppercase">{title}</h1>

        <Link href={"/turfs"} className="uppercase text-blue-700 underline flex">
          {linkTo} <ArrowRight />
        </Link>
      </div>
    </>
  )
}

export default TurfHeader