"use client"

import { useEffect, useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RunChart() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-full h-[300px] flex items-center justify-center bg-muted/20 rounded-lg">
        <p className="text-muted-foreground">Loading chart...</p>
      </div>
    )
  }

  // Mock data - in a real app, this would come from your database
  const chartData = {
    weekly: [
      { date: "Mon", distance: 5.2 },
      { date: "Tue", distance: 0 },
      { date: "Wed", distance: 3.8 },
      { date: "Thu", distance: 0 },
      { date: "Fri", distance: 4.5 },
      { date: "Sat", distance: 10.0 },
      { date: "Sun", distance: 6.2 },
    ],
    monthly: [
      { date: "Week 1", distance: 22.5 },
      { date: "Week 2", distance: 28.7 },
      { date: "Week 3", distance: 31.2 },
      { date: "Week 4", distance: 35.8 },
    ],
    yearly: [
      { date: "Jan", distance: 85.3 },
      { date: "Feb", distance: 92.1 },
      { date: "Mar", distance: 105.7 },
      { date: "Apr", distance: 110.2 },
      { date: "May", distance: 118.5 },
      { date: "Jun", distance: 125.3 },
      { date: "Jul", distance: 132.8 },
      { date: "Aug", distance: 140.5 },
      { date: "Sep", distance: 142.5 },
      { date: "Oct", distance: 0 },
      { date: "Nov", distance: 0 },
      { date: "Dec", distance: 0 },
    ],
  }

  return (
    <Tabs defaultValue="weekly" className="w-full">
      <TabsList className="mb-4">
        <TabsTrigger value="weekly">Weekly</TabsTrigger>
        <TabsTrigger value="monthly">Monthly</TabsTrigger>
        <TabsTrigger value="yearly">Yearly</TabsTrigger>
      </TabsList>
      <TabsContent value="weekly" className="w-full">
        <div className="h-[300px] w-full">
          <ChartDisplay data={chartData.weekly} />
        </div>
      </TabsContent>
      <TabsContent value="monthly" className="w-full">
        <div className="h-[300px] w-full">
          <ChartDisplay data={chartData.monthly} />
        </div>
      </TabsContent>
      <TabsContent value="yearly" className="w-full">
        <div className="h-[300px] w-full">
          <ChartDisplay data={chartData.yearly} />
        </div>
      </TabsContent>
    </Tabs>
  )
}

function ChartDisplay({ data }: { data: { date: string; distance: number }[] }) {
  // Find the maximum value to scale the chart
  const maxDistance = Math.max(...data.map((item) => item.distance)) || 10

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 flex items-end">
        {data.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center justify-end h-full">
            <div
              className="w-4/5 bg-primary rounded-t-sm"
              style={{
                height: `${(item.distance / maxDistance) * 100}%`,
                minHeight: item.distance > 0 ? "4px" : "0",
              }}
            />
          </div>
        ))}
      </div>
      <div className="h-8 flex items-center">
        {data.map((item, index) => (
          <div key={index} className="flex-1 text-center text-xs text-muted-foreground">
            {item.date}
          </div>
        ))}
      </div>
    </div>
  )
}

