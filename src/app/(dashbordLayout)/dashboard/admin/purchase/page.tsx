import MembershipChart from "@/components/admin/purchase-history/MembershipChart ";
import MetricCard from "@/components/admin/purchase-history/MetricCard";
import PaymentTable from "@/components/admin/purchase-history/PaymentTable";
import StatisticsChart from "@/components/admin/purchase-history/StatisticsChart";
import React from "react";

const Purchase = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <MetricCard
          title="Last transaction"
          value="$128.00"
          subtitle="Last 24 hour transaction"
        />
        <MetricCard
          title="Total revenue"
          value="$228.00"
          change={{ value: 8.3, timeframe: "more then last month" }}
        />
        <MetricCard
          title="Total Memberships"
          value="228.00"
          change={{ value: -8.3, timeframe: "less then last month" }}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <StatisticsChart />
        <MembershipChart />
      </div>

      <div className="space-y-4">
        <h2 className="text-ts font-semibold">Payment History</h2>
        <PaymentTable />
      </div>
    </div>
  );
};

export default Purchase;
