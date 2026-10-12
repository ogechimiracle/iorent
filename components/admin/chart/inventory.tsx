"use client";

import { Pie, PieChart } from "recharts";

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

const inventoryData = [
  { status: "available", count: 42, fill: "var(--color-available)" },
  { status: "rented", count: 28, fill: "var(--color-rented)" },
  { status: "sold", count: 18, fill: "var(--color-sold)" },
  { status: "maintenance", count: 7, fill: "var(--color-maintenance)" },
];

const chartConfig = {
  count: {
    label: "Vehicles",
  },
  available: {
    label: "Available",
    color: "var(--chart-1)",
  },
  rented: {
    label: "Rented",
    color: "var(--chart-2)",
  },
  sold: {
    label: "Sold",
    color: "var(--chart-3)",
  },
  maintenance: {
    label: "Maintenance",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

const totalVehicles = inventoryData.reduce(
  (total, item) => total + item.count,
  0,
);

export function InventoryChart() {
  return (
    <Card className="min-w-0">
      <CardHeader>
        <CardTitle>Vehicle Inventory</CardTitle>
        <CardDescription>
          Current distribution of vehicles by status
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="relative">
          <ChartContainer
            config={chartConfig}
            className="mx-auto h-[260px] w-full max-w-[320px]"
          >
            <PieChart accessibilityLayer>
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    hideLabel
                    formatter={(value, name) => (
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-muted-foreground">{name}</span>
                        <span className="font-mono font-medium">
                          {value} vehicles
                        </span>
                      </div>
                    )}
                  />
                }
              />

              <Pie
                data={inventoryData}
                dataKey="count"
                nameKey="status"
                innerRadius={72}
                outerRadius={100}
                paddingAngle={3}
                strokeWidth={4}
                stroke="var(--card)"
                cornerRadius={4}
              />
            </PieChart>
          </ChartContainer>

          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold tracking-tight">
              {totalVehicles}
            </span>
            <span className="text-sm text-muted-foreground">
              Total vehicles
            </span>
          </div>
        </div>

        <div className="mt-2 grid grid-cols-2 gap-4">
          {inventoryData.map((item) => (
            <div key={item.status} className="flex min-w-0 items-start gap-2">
              <span
                className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: `var(--color-${item.status})` }}
              />

              <div className="min-w-0">
                <p className="truncate text-sm text-muted-foreground capitalize">
                  {item.status}
                </p>
                <p className="text-lg font-semibold tabular-nums">
                  {item.count}
                  <span className="ml-1 text-xs font-normal text-muted-foreground">
                    ({((item.count / totalVehicles) * 100).toFixed(1)}%)
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
