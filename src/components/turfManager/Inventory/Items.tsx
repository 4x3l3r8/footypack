import { PlusSquare } from "lucide-react";
import React from "react";
import { Button } from "~/components/ui/button";
import ItemsHead from "./ItemsHead";
import Image from "next/image";
import ItemsCard from "./ItemsCard";


const Items = () => {
  return (
    <>
      <div className="items-end justify-between md:flex">
        <div className="my-4 md:my-0">
          <h1 className="text-xl font-bold uppercase">inventory</h1>
          <p className="text-gray-500">List and track your inventory</p>
        </div>
        <div>
          <Button
            variant={"outline"}
            className="mr-4 rounded-sm border-blue-900 text-blue-900 hover:bg-blue-900"
          >
            assign item
          </Button>
          <Button className="rounded-sm">
            add new item <PlusSquare size={14} className="ml-2" />
          </Button>
        </div>
      </div>

      <section className="my-4 rounded bg-white p-4 mb-12">
        <ItemsHead />

        <section className="flex flex-wrap my-4">
          <ItemsCard image="/images/turf Manager/image 3.png" title="Men’s Soccer Boot (Blue & Yellow)" date='09-May-2023' id='#6364472' />
          <ItemsCard image="/images/turf Manager/image 3 (2).png" title="Men’s Soccer Boot (Blue & Yellow)" date='09-May-2023' id='#6364472' />
          <ItemsCard image="/images/turf Manager/image 3 (1).png" title="Men’s Soccer Boot (Blue & Yellow)" date='09-May-2023' id='#6364472' />
          <ItemsCard image="/images/turf Manager/image 3 (3).png" title="Men’s Soccer Boot (Blue & Yellow)" date='09-May-2023' id='#6364472' />
          <ItemsCard image="/images/turf Manager/image 3 (2).png" title="Men’s Soccer Boot (Blue & Yellow)" date='09-May-2023' id='#6364472' />
          <ItemsCard image="/images/turf Manager/image 3 (3).png" title="Men’s Soccer Boot (Blue & Yellow)" date='09-May-2023' id='#6364472' />
          <ItemsCard image="/images/turf Manager/image 3.png" title="Men’s Soccer Boot (Blue & Yellow)" date='09-May-2023' id='#6364472' />
          <ItemsCard image="/images/turf Manager/image 3 (2).png" title="Men’s Soccer Boot (Blue & Yellow)" date='09-May-2023' id='#6364472' />
          <ItemsCard image="/images/turf Manager/image 3.png" title="Men’s Soccer Boot (Blue & Yellow)" date='09-May-2023' id='#6364472' />
          <ItemsCard image="/images/turf Manager/image 3 (3).png" title="Men’s Soccer Boot (Blue & Yellow)" date='09-May-2023' id='#6364472' />
          <ItemsCard image="/images/turf Manager/image 3.png" title="Men’s Soccer Boot (Blue & Yellow)" date='09-May-2023' id='#6364472' />

          

        </section>
      </section>
    </>
  );
};

export default Items;
