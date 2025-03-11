"use client"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendItem,
  ChartGrid,
  ChartXAxis,
  ChartYAxis,
  ChartLine,
  ChartBar,
} from "@/components/ui/chart"

export function SalesChart() {
  const data = [
    { month: "Jan", revenue: 1200, orders: 12 },
    { month: "Feb", revenue: 1900, orders: 18 },
    { month: "Mar", revenue: 1500, orders: 14 },
    { month: "Apr", revenue: 2200, orders: 22 },
    { month: "May", revenue: 2800, orders: 28 },
    { month: "Jun", revenue: 2600, orders: 25 },
    { month: "Jul", revenue: 3100, orders: 30 },
  ]

  return (
    <ChartContainer
      className="h-[300px]"
      data={data}
      xAxisKey="month"
      yAxisWidth={65}
      series={[
        {
          key: "revenue",
          type: "line",
          name: "Revenue",
          color: "hsl(var(--primary))",
          valueFormatter: (value) => `$${value.toFixed(2)}`,
        },
        {
          key: "orders",
          type: "bar",
          name: "Orders",
          color: "hsl(var(--muted-foreground) / 0.3)",
          valueFormatter: (value) => `${value} orders`,
        },
      ]}
    >
      <ChartLegend>
        <ChartLegendItem name="Revenue" color="hsl(var(--primary))" />
        <ChartLegendItem name="Orders" color="hsl(var(--muted-foreground) / 0.3)" />
      </ChartLegend>
      <ChartGrid />
      <ChartXAxis />
      <ChartYAxis />
      <ChartTooltip>
        <ChartTooltipContent />
      </ChartTooltip>
      <ChartBar key="orders" />
      <ChartLine key="revenue" />
    </ChartContainer>
  )
}

