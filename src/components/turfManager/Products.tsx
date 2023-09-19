import { PlusSquare } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "~/components/ui/button";


const Products = () => {
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
        <div className="h-screen flex justify-center items-center flex-col">
            <Image src={'/images/products 1.png'} width={80} height={80} alt="" />
            <p className="my-8 text-gray-500 text-center">
            Shop empty, you have no product yet. <br /> Add items players can purchase at the turfy
            </p>

            <Button className="rounded-sm">Add new product</Button>
        </div>
      </section>
    </>
  );
};

export default Products;
