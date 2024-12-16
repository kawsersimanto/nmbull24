"use client";

import { Bar } from "react-chartjs-2";
import "./chartStyle.css"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMediaQuery } from "react-responsive";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const data = {
  labels,
  datasets: [
    {
      label: "Business",
      data: [65, 75, 70, 80, 60, 75, 90, 70, 80, 75, 70, 80],
      backgroundColor: "#2563eb",
    },
    {
      label: "Standard",
      data: [35, 45, 35, 45, 35, 45, 35, 45, 35, 45, 35, 45],
      backgroundColor: "#f97316",
    },
  ],
};

const StatisticsChart = () => {


    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })
  
  const responsiveOptions = {
    ...options,
    maintainAspectRatio: false,
    aspectRatio: isTabletOrMobile ? 1 : 2,
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between w-full">
        <CardTitle className="md:text-2xl text-sm">Statistics</CardTitle>
        <Select  defaultValue="this-year" >
          <SelectTrigger className="md:w-[80px] w-[70px] !py-0">
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="this-year">This Year</SelectItem>
            <SelectItem value="last-year">Last Year</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="flex items-center justify-center w-full">
        <div className="w-full md:px-4 px-1">
          <Bar
            className="!w-full"
            options={responsiveOptions}
            data={data}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default StatisticsChart;
