"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BarChart, Calendar, Clock, Flame, Home, LogOut, Plus, User } from "lucide-react"
import RunHistoryTable from "@/components/run-history-table"
import RunChart from "@/components/run-chart"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex min-h-screen bg-muted">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col bg-card border-r p-4">
        <div className="flex items-center gap-2 font-bold text-xl mb-8">
          <span className="text-primary">Dragon</span>Runner
        </div>
        <nav className="space-y-2 flex-1">
          <Link href="/dashboard">
            <Button variant="ghost" className="w-full justify-start">
              <Home className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
          </Link>
          <Link href="/dashboard/profile">
            <Button variant="ghost" className="w-full justify-start">
              <User className="mr-2 h-4 w-4" />
              Profile
            </Button>
          </Link>
          <Link href="/dashboard/history">
            <Button variant="ghost" className="w-full justify-start">
              <Calendar className="mr-2 h-4 w-4" />
              History
            </Button>
          </Link>
          <Link href="/dashboard/stats">
            <Button variant="ghost" className="w-full justify-start">
              <BarChart className="mr-2 h-4 w-4" />
              Statistics
            </Button>
          </Link>
        </nav>
        <Button variant="outline" className="mt-auto">
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-background border-b h-14 flex items-center px-4">
          <div className="md:hidden font-bold">
            <span className="text-primary">Dragon</span>Runner
          </div>
          <div className="ml-auto flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              <Plus className="mr-2 h-4 w-4" />
              New Run
            </Button>
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
              JD
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">Track and manage your running progress</p>
            </div>
            <Button className="mt-4 md:mt-0 md:hidden">
              <Plus className="mr-2 h-4 w-4" />
              New Run
            </Button>
          </div>

          <Tabs defaultValue="overview" className="space-y-4" onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="add-run">Add Run</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
              <TabsTrigger value="stats">Statistics</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Distance</CardTitle>
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">142.5 km</div>
                    <p className="text-xs text-muted-foreground">+2.5% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Average Pace</CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">5:24 min/km</div>
                    <p className="text-xs text-muted-foreground">-0:12 from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Calories</CardTitle>
                    <Flame className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12,450 kcal</div>
                    <p className="text-xs text-muted-foreground">+8.1% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Runs</CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">24</div>
                    <p className="text-xs text-muted-foreground">+2 from last month</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Distance Over Time</CardTitle>
                  <CardDescription>Your running distance progress over the last 30 days</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <RunChart />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Runs</CardTitle>
                  <CardDescription>Your latest running activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <RunHistoryTable limit={5} />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="add-run" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Add New Run</CardTitle>
                  <CardDescription>Record your latest running activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date">Date</Label>
                        <Input id="date" type="date" defaultValue={new Date().toISOString().split("T")[0]} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time">Time</Label>
                        <Input id="time" type="time" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="distance">Distance (km)</Label>
                        <Input id="distance" type="number" step="0.01" placeholder="5.0" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="duration">Duration (minutes)</Label>
                        <Input id="duration" type="number" placeholder="30" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="calories">Calories (kcal)</Label>
                        <Input id="calories" type="number" placeholder="350" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pace">Average Pace (min/km)</Label>
                        <Input id="pace" placeholder="5:30" />
                      </div>
                    </div>
                    <Button type="submit" className="w-full">
                      Save Run
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="history" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Run History</CardTitle>
                  <CardDescription>View all your recorded runs</CardDescription>
                </CardHeader>
                <CardContent>
                  <RunHistoryTable />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="stats" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Running Statistics</CardTitle>
                  <CardDescription>Detailed analysis of your running performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <RunChart />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

function MapPin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

