"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const revenueData = [
  { month: "Jan", sales: 4200000, rentals: 1200000 },
  { month: "Feb", sales: 3500000, rentals: 1450000 },
  { month: "Mar", sales: 5100000, rentals: 1800000 },
  { month: "Apr", sales: 4600000, rentals: 1600000 },
  { month: "May", sales: 6200000, rentals: 2100000 },
  { month: "Jun", sales: 5800000, rentals: 2400000 },
  { month: "Jul", sales: 7400000, rentals: 2200000 },
  { month: "Aug", sales: 6800000, rentals: 2800000 },
  { month: "Sep", sales: 8200000, rentals: 3100000 },
  { month: "Oct", sales: 7600000, rentals: 2900000 },
  { month: "Nov", sales: 9100000, rentals: 3400000 },
  { month: "Dec", sales: 10500000, rentals: 3900000 },
];

const chartConfig = {
  sales: {
    label: "Car Sales",
    color: "var(--chart-1)",
  },
  rentals: {
    label: "Car Rentals",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

const formatNaira = (value: number) => {
  if (value >= 1_000_000) {
    return `₦${(value / 1_000_000).toFixed(1)}m`;
  }

  return `₦${(value / 1_000).toFixed(0)}k`;
};

export function RevenueChart() {
  return (
    <Card className="min-w-0">
      <CardHeader>
        <CardTitle>Revenue Overview</CardTitle>
        <CardDescription>
          Monthly revenue from vehicle sales and rentals
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig} className="h-[280px] w-full">
          <LineChart
            data={revenueData}
            accessibilityLayer
            margin={{
              left: 8,
              right: 12,
              top: 8,
              bottom: 0,
            }}
          >
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              stroke="var(--border)"
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              minTickGap={20}
              tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              width={58}
              tickMargin={8}
              tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
              tickFormatter={formatNaira}
            />

            <ChartTooltip
              cursor={{ stroke: "var(--border)", strokeDasharray: "4 4" }}
              content={
                <ChartTooltipContent
                  formatter={(value, name) => (
                    <div className="flex w-full items-center justify-between gap-6">
                      <span className="text-muted-foreground">{name}</span>
                      <span className="font-mono font-medium tabular-nums">
                        {new Intl.NumberFormat("en-NG", {
                          style: "currency",
                          currency: "NGN",
                          maximumFractionDigits: 0,
                        }).format(Number(value))}
                      </span>
                    </div>
                  )}
                />
              }
            />

            <Line
              dataKey="sales"
              type="monotone"
              stroke="var(--color-sales)"
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 5, strokeWidth: 0 }}
            />

            <Line
              dataKey="rentals"
              type="monotone"
              stroke="var(--color-rentals)"
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 5, strokeWidth: 0 }}
            />
          </LineChart>
        </ChartContainer>

        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--chart-1)]" />
            <span className="text-muted-foreground">Car Sales</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--chart-2)]" />
            <span className="text-muted-foreground">Car Rentals</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
