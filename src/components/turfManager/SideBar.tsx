import React, { useState } from "react";
import { cn } from "~/lib/utils";
import {
  LayoutDashboardIcon,
  FileText,
  Gamepad2,
  ShoppingCart,
  PieChart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SideBar = ({
  setIndex,
  index,
}: {
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  index: number;
}) => {
  const [inventoryOpen, setInventoryOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  const toggleInventory = () => {
    setInventoryOpen(!inventoryOpen);
    setIndex(2)
    setShopOpen(false);
  };

  const toggleShop = () => {
    setShopOpen(!shopOpen);
    setIndex(5)
    setInventoryOpen(false);
  };
  return (
    <>
      <div className="sticky top-0 max-h-screen basis-1/5 border-e bg-white ps-4">
        <Link className="sticky top-0 block w-full bg-white py-4" href={"/"}>
          <Image
            src={"/images/NavLogo.svg"}
            alt="FootyPack"
            height={70}
            width={70}
            className={cn("cursor-pointer")}
          />
        </Link>

        <div className="py-12">
          <h1 className="py-4 text-sm font-bold uppercase text-gray-600">
            menu
          </h1>

          <Link
            href={"#"}
            onClick={() => setIndex(1)}
            className={`my-2 flex w-full items-center p-4 text-sm font-bold uppercase text-gray-500 ${index == 1 ? 'border-e-4 border-red-400 bg-primary text-white' : ''} `}
          >
            <LayoutDashboardIcon size={16} className="mr-4" />
            <span>dashboard</span>
          </Link>

          <Link
            href={"#"}
            onClick={toggleInventory}
            className={`my-2 flex w-full items-center p-4 text-sm font-bold uppercase text-gray-500 ${index ===2 || index===3 ? 'border-e-4 border-red-400 bg-primary text-white' : ''} `}
          >
            <FileText size={16} className="mr-4" />
            <span>inventory</span>
          </Link>

          {inventoryOpen ? (
            <div className="ml-8 border-l">
              <Link
                href={"#"}
                onClick={() => setIndex(2)}
                className={`my-2 flex w-full items-center p-4 text-sm font-bold uppercase text-gray-500 ${index === 2 ? 'border-e-4 border-primary text-primary' : ''}`}
              >
                <FileText size={16} className="mr-4" />
                <span>items</span>
              </Link>

              <Link
                href={"#"}
                onClick={() => setIndex(3)}
                className={`my-2 flex w-full items-center p-4 text-sm font-bold uppercase text-gray-500 ${index === 3 ? 'border-e-4 border-primary text-primary' : ''}`}
              >
                <FileText size={16} className="mr-4" />
                <span>assigned items</span>
              </Link>
            </div>
          ) : null}

          <Link
            href={"#"}
            onClick={() => setIndex(4)}
            className={`my-2 flex w-full items-center p-4 text-sm font-bold uppercase text-gray-500 ${index == 4 ? 'border-e-4 border-red-400 bg-primary text-white' : ''} `}
          >
            <Gamepad2 size={16} className="mr-4" />
            <span>my games</span>
          </Link>

          <Link
            href={"#"}
            onClick={toggleShop}
            className={`my-2 flex w-full items-center p-4 text-sm font-bold uppercase text-gray-500 ${index == 5 || index == 6 ? 'border-e-4 border-red-400 bg-primary text-white' : ''} `}
          >
            <ShoppingCart size={16} className="mr-4" />
            <span>shop</span>
          </Link>

          {shopOpen ? (
            <div className="ml-8 border-l">
              <Link
                href={"#"}
                onClick={() => setIndex(5)}
                className={`my-2 flex w-full items-center p-4 text-sm font-bold uppercase text-gray-500 ${index === 5 ? 'border-e-4 border-primary text-primary' : ''}`}
              >
                <ShoppingCart size={16} className="mr-4" />
                <span>Products</span>
              </Link>

              <Link
                href={"#"}
                onClick={() => setIndex(6)}
                className={`my-2 flex w-full items-center p-4 text-sm font-bold uppercase text-gray-500 ${index === 6 ? 'border-e-4 border-primary text-primary' : ''}`}
              >
                <FileText size={16} className="mr-4" />
                <span>orders</span>
              </Link>
            </div>
          ) : null}

          <Link
            href={"#"}
            className={`my-2 flex w-full items-center p-4 text-sm font-bold uppercase text-gray-500 ${index == 7 ? 'border-e-4 border-red-400 bg-primary text-white' : ''} `}
          >
            <PieChart size={16} className="mr-4" />
            <span>transactions</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideBar;
