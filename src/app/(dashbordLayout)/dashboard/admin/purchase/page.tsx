"use client";

import MembershipChart from "@/components/admin/purchase-history/MembershipChart ";
import MetricCard from "@/components/admin/purchase-history/MetricCard";
import PaymentTable from "@/components/admin/purchase-history/PaymentTable";
import StatisticsChart from "@/components/admin/purchase-history/StatisticsChart";
import {
  useAllTransactionQuery,
  useThisDayTransactionQuery,
  useTotalMemberQuery,
  useTotalRevinueQuery,
} from "@/redux/Api/transactionApi";
import React from "react";

const Purchase = () => {
  const {
    data: thisDayTransaction,
    isLoading: thisDayTransactionLoading,
    error: thisDayTransactionError,
  } = useThisDayTransactionQuery(undefined);
  const {
    data: totalRevinue,
    isLoading: totalRevinueLoading,
    error: totalRevinueError,
  } = useTotalRevinueQuery(undefined);
  const {
    data: totalMember,
    isLoading: totalMemberLoading,
    error: totalMemberError,
  } = useTotalMemberQuery(undefined);

  if (thisDayTransactionLoading || totalRevinueLoading || totalMemberLoading) {
    return <div>Loading...</div>;
  }

  console.log(thisDayTransaction);

  return (
    <div className="p-6 space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <MetricCard
          title="Last transaction"
          value={`$${thisDayTransaction?.data._sum.amount}`}
          subtitle="Last 24 hour transaction"
        />
        <MetricCard
          title="Total revenue"
          value={`$${totalRevinue?.data.totalRevenue}`}
          change={{ value: 8.3, timeframe: "more then last month" }}
        />
        <MetricCard
          title="Total Memberships"
          value={`${totalMember?.data.thisMonthMemberships}`}
          change={{ value: -8.3, timeframe: "less then last month" }}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <StatisticsChart />
        <MembershipChart />
      </div>

      <div className="space-y-4">
        <PaymentTable />
      </div>
    </div>
  );
};

export default Purchase;
