import React, { useState } from "react";
import DashboardLayout from "~/components/layouts/DashboardLayout";
import Dashboard from "~/components/turfManager/Dashboard";
import AssignedItems from "~/components/turfManager/Inventory/AssignedItems";
import Items from "~/components/turfManager/Inventory/Items";


const DashboardSec = () => {
  const [index, setIndex] = useState(1);

  const dashboard = {
      1: <Dashboard />,
      2: <Items />,
      3: <AssignedItems />,
  }
  return (
    <DashboardLayout setIndex={setIndex} index={index}>
     {dashboard[index as keyof typeof dashboard]}
    </DashboardLayout>
  );
};

export default DashboardSec;
