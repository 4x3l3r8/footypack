import { PlusSquare } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "~/components/ui/button";


const Order = () => {
  return (
    <>
      <div className="items-end justify-between md:flex">
        <div className="my-4 md:my-0">
          <h1 className="text-xl font-bold uppercase">shop</h1>
          <p className="text-gray-500">You can sell products to player and guests</p>
        </div>
        <div>
          
          <Button className="rounded-sm">
            add new product <PlusSquare size={14} className="ml-2" />
          </Button>
        </div>
      </div>

      <section className="my-4 rounded bg-white p-4 mb-12">
        <div className="flex justify-center items-center flex-col">
            
        </div>
      </section>
    </>
  );
};

export default Order;
