// components/ui/chart.tsx
import type React from "react"

export const Chart = () => {
  return <div>Chart</div>
}

export const ChartContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="chart-container">{children}</div>
}

export const ChartTooltip = ({ children }: { children: React.ReactNode }) => {
  return <div className="chart-tooltip">{children}</div>
}

export const ChartTooltipContent = () => {
  return <div>Tooltip Content</div>
}

export const ChartLegend = ({ children }: { children: React.ReactNode }) => {
  return <div className="chart-legend">{children}</div>
}

export const ChartLegendItem = ({ name, color }: { name: string; color: string }) => {
  return <div className="chart-legend-item">{name}</div>
}

export const ChartGrid = () => {
  return <div className="chart-grid"></div>
}

export const ChartXAxis = () => {
  return <div className="chart-x-axis"></div>
}

export const ChartYAxis = () => {
  return <div className="chart-y-axis"></div>
}

export const ChartArea = () => {
  return <div className="chart-area"></div>
}

export const ChartLine = () => {
  return <div className="chart-line"></div>
}

export const ChartBar = () => {
  return <div className="chart-bar"></div>
}

