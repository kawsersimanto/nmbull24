"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useMediaQuery } from 'react-responsive'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Business membership", "Standard membership"],
  datasets: [
    {
      data: [2, 31],
      backgroundColor: ["#2563eb", "#f97316"],
    },
  ],
};


const options = {
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
  },
}



const MembershipChart = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })

const responsiveOptions = {
  ...options,
  maintainAspectRatio: false,
  aspectRatio: isTabletOrMobile ? 1 : 2,
}

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between flex-shrink-0 overflow-hidden">
        <CardTitle className="text-sm md:text-2xl">Order review status</CardTitle>
        <Select defaultValue="this-month">
          <SelectTrigger className="md:w-[130px] w-[70px]">
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="this-month">This month</SelectItem>
            <SelectItem value="last-month">Last month</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className='flex items-center justify-center'>
        <Doughnut className="md:min-h-[200px] h-[200px] sm:w-auto !w-full" data={data} options={responsiveOptions} />
      </CardContent>
    </Card>
  );
};

export default MembershipChart;
