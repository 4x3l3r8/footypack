import React, { useState } from "react";
import DashboardLayout from "~/components/layouts/DashboardLayout";
import Dashboard from "~/components/turfManager/Dashboard";


const DashboardSec = () => {
  const [index, setIndex] = useState(1);

  const dashboard = {
      1: <Dashboard />,
  }
  return (
    <DashboardLayout>
     {dashboard[index as keyof typeof dashboard]}
    </DashboardLayout>
  );
};

export default DashboardSec;
