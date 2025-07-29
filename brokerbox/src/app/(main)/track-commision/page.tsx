"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  format,
  subDays,
  startOfMonth,
  endOfMonth,
  isWithinInterval,
} from "date-fns";
import { CalendarIcon, Download, Percent } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Recharts imports
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
  ComposedChart,
} from "recharts";

// Mock data for commissions
const commissionData = [
  {
    id: 1,
    client: "ABC Ltd",
    lender: "HSBC",
    product: "Business Loan",
    date: "2023-09-05",
    amount: 3250,
    feePercent: 3.2,
    status: "Paid",
  },
  {
    id: 2,
    client: "Tech Solutions",
    lender: "Barclays",
    product: "Asset Finance",
    date: "2023-09-10",
    amount: 2100,
    feePercent: 2.8,
    status: "Paid",
  },
  {
    id: 3,
    client: "Global Traders",
    lender: "Lloyds",
    product: "Invoice Finance",
    date: "2023-09-18",
    amount: 1800,
    feePercent: 3.5,
    status: "Pending",
  },
  {
    id: 4,
    client: "Smith & Co",
    lender: "Santander",
    product: "Commercial Mortgage",
    date: "2023-09-22",
    amount: 5400,
    feePercent: 1.8,
    status: "Paid",
  },
  {
    id: 5,
    client: "Rapid Growth Ltd",
    lender: "NatWest",
    product: "Business Expansion",
    date: "2023-09-27",
    amount: 2800,
    feePercent: 2.5,
    status: "Pending",
  },
  {
    id: 6,
    client: "Johnson Property",
    lender: "HSBC",
    product: "Property Finance",
    date: "2023-08-15",
    amount: 4200,
    feePercent: 2.0,
    status: "Paid",
  },
  {
    id: 7,
    client: "TechStart Inc",
    lender: "Barclays",
    product: "Startup Loan",
    date: "2023-08-22",
    amount: 1500,
    feePercent: 4.0,
    status: "Paid",
  },
  {
    id: 8,
    client: "Retail Giants",
    lender: "NatWest",
    product: "Inventory Finance",
    date: "2023-08-30",
    amount: 3600,
    feePercent: 2.2,
    status: "Paid",
  },
];

// Performance metrics data for Recharts
const monthlyPerformanceData = [
  { name: "Jan", amount: 12500 },
  { name: "Feb", amount: 19200 },
  { name: "Mar", amount: 15800 },
  { name: "Apr", amount: 18300 },
  { name: "May", amount: 21500 },
  { name: "Jun", amount: 19700 },
  { name: "Jul", amount: 22800 },
  { name: "Aug", amount: 24100 },
  { name: "Sep", amount: 26300 },
  { name: "Oct", amount: 0 },
  { name: "Nov", amount: 0 },
  { name: "Dec", amount: 0 },
];

const conversionRateData = [
  { name: "Quote", value: 100 },
  { name: "Application", value: 78 },
  { name: "Approved", value: 54 },
  { name: "Drawdown", value: 42 },
];

const topLendersData = [
  { name: "HSBC", value: 12400 },
  { name: "Barclays", value: 10300 },
  { name: "NatWest", value: 8600 },
  { name: "Lloyds", value: 7200 },
  { name: "Santander", value: 6800 },
];

// Colors for charts
const CHART_COLORS = [
  "#4f46e5", // indigo-600
  "#3b82f6", // blue-500
  "#0ea5e9", // sky-500
  "#06b6d4", // cyan-500
  "#14b8a6", // teal-500
];

const CommissionTrackingPage = () => {
  const [dateRange, setDateRange] = useState({
    from: subDays(new Date(), 30),
    to: new Date(),
  });
  const [filterPeriod, setFilterPeriod] = useState("30days");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  // Filter commissions based on date range
  const filteredCommissions = commissionData.filter((commission) => {
    const commissionDate = new Date(commission.date);
    return isWithinInterval(commissionDate, {
      start: dateRange.from,
      end: dateRange.to,
    });
  });

  // Since we've removed searchTerm, we don't need to further filter
  const searchFilteredCommissions = filteredCommissions;

  // Calculate totals for the filtered data
  const totalCommission = searchFilteredCommissions.reduce(
    (sum, commission) => sum + commission.amount,
    0
  );
  const averageFeePercent = searchFilteredCommissions.length
    ? searchFilteredCommissions.reduce(
        (sum, commission) => sum + commission.feePercent,
        0
      ) / searchFilteredCommissions.length
    : 0;
  const paidCommission = searchFilteredCommissions
    .filter((commission) => commission.status === "Paid")
    .reduce((sum, commission) => sum + commission.amount, 0);
  const pendingCommission = searchFilteredCommissions
    .filter((commission) => commission.status === "Pending")
    .reduce((sum, commission) => sum + commission.amount, 0);

  // Define a type for the filter period values
  type FilterPeriod = "7days" | "30days" | "90days" | "thisMonth" | "lastMonth" | "custom";

  // Handle date filter changes with proper typing
  const handleFilterChange = (value: FilterPeriod) => {
    setFilterPeriod(value);

    const today = new Date();
    let fromDate;

    switch (value) {
      case "7days":
        fromDate = subDays(today, 7);
        break;
      case "30days":
        fromDate = subDays(today, 30);
        break;
      case "90days":
        fromDate = subDays(today, 90);
        break;
      case "thisMonth":
        fromDate = startOfMonth(today);
        break;
      case "lastMonth":
        const lastMonth = new Date(
          today.getFullYear(),
          today.getMonth() - 1,
          1
        );
        fromDate = startOfMonth(lastMonth);
        setDateRange({
          from: fromDate,
          to: endOfMonth(lastMonth),
        });
        return;
      default:
        fromDate = subDays(today, 30);
    }

    setDateRange({
      from: fromDate,
      to: today,
    });
  };

  // Custom tooltip formatter for charts with proper typing
  const formatCurrency = (value: number): string => {
    return `£${value.toLocaleString()}`;
  };

  // Animation variants
  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.07,
  //       when: "beforeChildren",
  //       duration: 0.4,
  //       ease: "easeInOut", // Using a named easing function
  //     },
  //   },
  // };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 25,
      },
    },
  };

  return (
    <motion.div
      className="p-6 md:p-8 max-w-[1600px] mx-auto"
      initial="hidden"
      animate="visible"
    >
      {/* Header with Title and Filter Controls */}
      <motion.div variants={itemVariants} className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Commission Tracking
            </h1>
            <p className="text-gray-500 mt-1">
              Monitor your earnings and commission performance
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            {/* Date Range Picker */}
            <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="justify-start text-left font-normal w-full sm:w-[240px] border-gray-200 text-gray-700"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateRange.from ? (
                    dateRange.to ? (
                      <>
                        {format(dateRange.from, "LLL dd, y")} -{" "}
                        {format(dateRange.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(dateRange.from, "LLL dd, y")
                    )
                  ) : (
                    <span>Pick a date range</span>
                  )}
                </Button>
              </PopoverTrigger>
              {/* <PopoverContent className="w-auto p-0" align="end">
                <Calendar
                  initialFocus
                  mode="range"
                  selected={dateRange}
                  onSelect={(range) => {
                    setDateRange(range);
                    setFilterPeriod("custom");
                    if (range.to) setIsCalendarOpen(false);
                  }}
                  numberOfMonths={2}
                />
              </PopoverContent> */}
            </Popover>

            {/* Quick Date Filters */}
            <Select value={filterPeriod} onValueChange={handleFilterChange}>
              <SelectTrigger className="w-full sm:w-[180px] border-gray-200 text-gray-700">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 days</SelectItem>
                <SelectItem value="30days">Last 30 days</SelectItem>
                <SelectItem value="90days">Last 90 days</SelectItem>
                <SelectItem value="thisMonth">This month</SelectItem>
                <SelectItem value="lastMonth">Last month</SelectItem>
              </SelectContent>
            </Select>

            {/* Export Button */}
            <Button
              variant="outline"
              className="flex items-center gap-2 border-gray-200 text-gray-700 hover:bg-gray-50"
            >
              <Download className="h-4 w-4" /> Export
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8"
      >
        {/* Total Commission Card */}
        <Card className="bg-white border border-gray-100 shadow-sm overflow-hidden">
          <CardHeader className="pb-2">
            <CardDescription className="text-gray-600 font-medium">
              Total Commission
            </CardDescription>
            <CardTitle className="text-3xl font-bold text-gray-900">
              £{totalCommission.toLocaleString()}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">
                {searchFilteredCommissions.length} transactions
              </p>
              <div className="p-2 bg-gray-100 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-700"
                >
                  <path d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"></path>
                  <path d="M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
                  <path d="M6 20h12"></path>
                  <path d="M8 10v10"></path>
                  <path d="M16 10v10"></path>
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Paid Commission */}
        <Card className="bg-white border border-gray-100 shadow-sm overflow-hidden">
          <CardHeader className="pb-2">
            <CardDescription className="text-gray-600 font-medium">
              Paid Commission
            </CardDescription>
            <CardTitle className="text-3xl font-bold text-gray-900">
              £{paidCommission.toLocaleString()}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">
                {
                  searchFilteredCommissions.filter((c) => c.status === "Paid")
                    .length
                }{" "}
                transactions
              </p>
              <Badge className="bg-gray-100 text-gray-900 hover:bg-gray-200">
                Paid
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Pending Commission */}
        <Card className="bg-white border border-gray-100 shadow-sm overflow-hidden">
          <CardHeader className="pb-2">
            <CardDescription className="text-gray-600 font-medium">
              Pending Commission
            </CardDescription>
            <CardTitle className="text-3xl font-bold text-gray-900">
              £{pendingCommission.toLocaleString()}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">
                {
                  searchFilteredCommissions.filter(
                    (c) => c.status === "Pending"
                  ).length
                }{" "}
                transactions
              </p>
              <Badge className="bg-gray-50 text-gray-600 hover:bg-gray-100">
                Pending
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Average Fee */}
        <Card className="bg-white border border-gray-100 shadow-sm overflow-hidden">
          <CardHeader className="pb-2">
            <CardDescription className="text-gray-600 font-medium">
              Average Fee Percentage
            </CardDescription>
            <CardTitle className="text-3xl font-bold text-gray-900">
              {averageFeePercent.toFixed(2)}%
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">Across all transactions</p>
              <div className="p-2 bg-gray-100 rounded-full">
                <Percent className="h-5 w-5 text-gray-700" />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Performance Charts */}
      <motion.div variants={itemVariants} className="mb-8">
        <Tabs defaultValue="monthly" className="w-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              Performance Metrics
            </h2>
            <TabsList className="bg-gray-100 text-gray-600">
              <TabsTrigger
                value="monthly"
                className="data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm"
              >
                Monthly
              </TabsTrigger>
              <TabsTrigger
                value="lenders"
                className="data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm"
              >
                Top Lenders
              </TabsTrigger>
              <TabsTrigger
                value="conversion"
                className="data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm"
              >
                Conversion
              </TabsTrigger>
            </TabsList>
          </div>

          <Card className="border border-gray-100 shadow-sm bg-white">
            <CardContent className="p-6">
              <TabsContent value="monthly" className="mt-0">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={monthlyPerformanceData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="name" stroke="#6b7280" />
                      <YAxis
                        tickFormatter={formatCurrency}
                        width={80}
                        stroke="#6b7280"
                      />
                      <Tooltip
                        formatter={(value) => [
                          `${formatCurrency(Number(value))}`,
                          "Commission",
                        ]}
                        contentStyle={{
                          backgroundColor: "white",
                          borderRadius: "6px",
                          border: "1px solid #e5e7eb",
                        }}
                        labelStyle={{
                          fontWeight: "bold",
                          marginBottom: "5px",
                          color: "#111827",
                        }}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="amount"
                        stroke="#4f46e5"
                        strokeWidth={3}
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>

              <TabsContent value="lenders" className="mt-0">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={topLendersData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="name" stroke="#6b7280" />
                      <YAxis
                        tickFormatter={formatCurrency}
                        width={80}
                        stroke="#6b7280"
                      />
                      <Tooltip
                        formatter={(value) => [
                          `${formatCurrency(Number(value))}`,
                          "Commission",
                        ]}
                        contentStyle={{
                          backgroundColor: "white",
                          borderRadius: "6px",
                          border: "1px solid #e5e7eb",
                        }}
                        labelStyle={{
                          fontWeight: "bold",
                          marginBottom: "5px",
                          color: "#111827",
                        }}
                      />
                      <Bar dataKey="value" fill="#4f46e5" radius={[4, 4, 0, 0]}>
                        {topLendersData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={CHART_COLORS[index % CHART_COLORS.length]}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>

              <TabsContent value="conversion" className="mt-0">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                      data={conversionRateData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="name" stroke="#6b7280" />
                      <YAxis stroke="#6b7280" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "white",
                          borderRadius: "6px",
                          border: "1px solid #e5e7eb",
                        }}
                        labelStyle={{
                          fontWeight: "bold",
                          marginBottom: "5px",
                          color: "#111827",
                        }}
                      />
                      <Bar
                        dataKey="value"
                        fill="#3b82f6"
                        radius={[4, 4, 0, 0]}
                      />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#4f46e5"
                        strokeWidth={3}
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
            </CardContent>
          </Card>
        </Tabs>
      </motion.div>

      {/* Transactions Table - You can add this section if needed */}
      <motion.div variants={itemVariants} className="mb-8">
        {/* Your transactions table content would go here */}
      </motion.div>
    </motion.div>
  );
};

export default CommissionTrackingPage;

