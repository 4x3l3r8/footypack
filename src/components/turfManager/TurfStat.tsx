import React from 'react'
import { FileText, Gamepad2, PieChart } from "lucide-react";


const TurfStat = () => {
  return (
    <>
    <div className="bg-white py-8  flex my-8 rounded">
          <div className="basis-1/3 px-8 border-r">
            <div className="flex items-center">
              <div className="rounded-full p-2 mr-4 text-white bg-green-500">
                <FileText size={24} />
              </div>

              <div>
                <p className="capitalize text-gray-500">total inventory</p>
                <p className="font-bold text-xl">23</p>
              </div>
            </div>
          </div>

          <div className="basis-1/3 px-8 border-r">
            <div className="flex items-center">
              <div className="rounded-full p-2 mr-4 text-white bg-blue-500">
                <Gamepad2 size={24} />
              </div>

              <div>
                <p className="capitalize text-gray-500">upcoming games</p>
                <p className="font-bold text-xl">12</p>
              </div>
            </div>
          </div>

          <div className="basis-1/3 px-8">
            <div className="flex items-center">
              <div className="rounded-full p-2 mr-4 text-white bg-red-500">
                <PieChart size={24} />
              </div>

              <div>
                <p className="capitalize text-gray-500">total transactions</p>
                <p className="font-bold text-xl">N450,000.00</p>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default TurfStat