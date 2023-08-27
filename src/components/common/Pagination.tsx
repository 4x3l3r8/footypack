import React from "react";

const Pagination = () => {
  return (
    <>
      <div className="flex items-center justify-between p-2 text-xs font-bold uppercase mt-2">
        <h1 className="">showing 1 of 3</h1>

        <div className="flex items-center gap-4">
          <button className="uppercase disabled:text-gray-500" disabled>
            Prev
          </button>
          <button className="uppercase disabled:text-gray-500" disabled>
            1
          </button>
          <button className="uppercase">2</button>
          <button className="uppercase">3</button>
          <button className="uppercase">next</button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
