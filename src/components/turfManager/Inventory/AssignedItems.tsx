import { PlusSquare } from "lucide-react";
import React from "react";
import { Button } from "~/components/ui/button";
import AssignedHead from "./AssignedHead";
import { AssignedTable } from "./AssignedTable";
import Pagination from "~/components/common/Pagination";
import { Separator } from "~/components/ui/separator";


const AssignedItems = () => {
  return (
    <>
      <div className="items-end justify-between md:flex">
        <div className="my-4 md:my-0">
          <h1 className="text-xl font-bold uppercase">assigned items</h1>
          <p className="text-gray-500">Assigned and track items in your inventory</p>
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
        <AssignedHead />

        <section className="my-2">
         <AssignedTable />
        </section>

        <Separator className="mt-8" />
        <Pagination />
      </section>
    </>
  );
};

export default AssignedItems;
