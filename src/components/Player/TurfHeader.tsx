import Link from 'next/link'
import React from 'react'

const TurfHeader = () => {
  return (
    <>
    <div className="flex items-center font-bold justify-between p-4 border border-gray-300">
          <h1 className="font-bold uppercase">turfs near you</h1>

          <Link href={"#"} className="uppercase text-blue-700 underline">
            See all
          </Link>
        </div>
    </>
  )
}

export default TurfHeader