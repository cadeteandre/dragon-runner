"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar, Clock, Flame, Home, Plus, BarChart3, User, LogOut, ChevronDown, Search } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data for workouts
  const workouts = [
    {
      id: 1,
      workout_datetime: "2023-10-15T08:30:00Z",
      distance_km: 5.2,
      duration_minutes: 28,
      calories_burned_kcal: 320,
      average_pace_km_per_min: 5.38,
    },
    {
      id: 2,
      workout_datetime: "2023-10-12T17:15:00Z",
      distance_km: 3.8,
      duration_minutes: 22,
      calories_burned_kcal: 240,
      average_pace_km_per_min: 5.79,
    },
    {
      id: 3,
      workout_datetime: "2023-10-10T07:00:00Z",
      distance_km: 10.0,
      duration_minutes: 58,
      calories_burned_kcal: 620,
      average_pace_km_per_min: 5.8,
    },
    {
      id: 4,
      workout_datetime: "2023-10-07T16:30:00Z",
      distance_km: 4.5,
      duration_minutes: 25,
      calories_burned_kcal: 280,
      average_pace_km_per_min: 5.56,
    },
    {
      id: 5,
      workout_datetime: "2023-10-05T06:45:00Z",
      distance_km: 6.2,
      duration_minutes: 35,
      calories_burned_kcal: 380,
      average_pace_km_per_min: 5.65,
    },
    {
      id: 6,
      workout_datetime: "2023-10-02T18:00:00Z",
      distance_km: 8.4,
      duration_minutes: 48,
      calories_burned_kcal: 510,
      average_pace_km_per_min: 5.71,
    },
    {
      id: 7,
      workout_datetime: "2023-09-30T07:15:00Z",
      distance_km: 5.0,
      duration_minutes: 29,
      calories_burned_kcal: 310,
      average_pace_km_per_min: 5.8,
    },
  ]

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(date)
  }

  // Format time for display
  const formatTime = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  // Format pace for display (convert decimal to min:sec)
  const formatPace = (pace: number) => {
    const minutes = Math.floor(pace)
    const seconds = Math.round((pace - minutes) * 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-950">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col bg-white dark:bg-gray-900 border-r dark:border-gray-800 shadow-sm">
        <div className="p-4 border-b dark:border-gray-800">
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="text-red-500">Dragon</span>
            <span className="dark:text-white">Runner</span>
          </div>
        </div>
        <div className="flex-1 py-4 px-2 space-y-1">
          <Button variant="ghost" className="w-full justify-start" asChild>
            <a href="#" className="flex items-center">
              <Home className="mr-2 h-4 w-4" />
              Dashboard
            </a>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <a href="#" className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              Corridas
            </a>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <a href="#" className="flex items-center">
              <BarChart3 className="mr-2 h-4 w-4" />
              Estatísticas
            </a>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <a href="#" className="flex items-center">
              <User className="mr-2 h-4 w-4" />
              Perfil
            </a>
          </Button>
        </div>
        <div className="p-4 border-t dark:border-gray-800">
          <Button
            variant="ghost"
            className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/50"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sair
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b dark:border-gray-800 shadow-sm">
          <div className="flex h-16 items-center px-4 md:px-6">
            <div className="md:hidden font-bold text-xl mr-4">
              <span className="text-red-500">DR</span>
            </div>
            <div className="flex-1 flex items-center gap-4 md:gap-8">
              <form className="hidden md:flex items-center relative w-full max-w-md">
                <Search className="absolute left-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  type="search"
                  placeholder="Buscar corridas..."
                  className="pl-8 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 w-full"
                />
              </form>
              <div className="ml-auto flex items-center gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="hidden md:flex">
                      <Calendar className="mr-2 h-4 w-4" />
                      Outubro 2023
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filtrar por período</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Outubro 2023</DropdownMenuItem>
                    <DropdownMenuItem>Setembro 2023</DropdownMenuItem>
                    <DropdownMenuItem>Agosto 2023</DropdownMenuItem>
                    <DropdownMenuItem>Últimos 3 meses</DropdownMenuItem>
                    <DropdownMenuItem>Últimos 6 meses</DropdownMenuItem>
                    <DropdownMenuItem>Este ano</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Período personalizado</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-red-500 to-amber-500 flex items-center justify-center text-white font-medium">
                  JD
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-gray-500 dark:text-gray-400">Gerencie e acompanhe suas corridas</p>
            </div>
            <Button className="mt-4 md:mt-0 bg-gradient-to-r from-red-500 to-amber-500 hover:from-red-600 hover:to-amber-600 text-white border-0">
              <Plus className="mr-2 h-4 w-4" />
              Nova Corrida
            </Button>
          </div>

          <Tabs defaultValue="overview" className="space-y-4" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 md:w-[400px]">
              <TabsTrigger value="overview">Visão Geral</TabsTrigger>
              <TabsTrigger value="workouts">Corridas</TabsTrigger>
              <TabsTrigger value="add">Adicionar</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total de Corridas</CardTitle>
                    <Calendar className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{workouts.length}</div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">+2 desde a semana passada</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Distância Total</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-gray-500 dark:text-gray-400"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {workouts.reduce((sum, workout) => sum + workout.distance_km, 0).toFixed(1)} km
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">+5.2 km desde a semana passada</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Calorias Queimadas</CardTitle>
                    <Flame className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {workouts.reduce((sum, workout) => sum + workout.calories_burned_kcal, 0)} kcal
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">+320 kcal desde a semana passada</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Ritmo Médio</CardTitle>
                    <Clock className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {formatPace(
                        workouts.reduce((sum, workout) => sum + workout.average_pace_km_per_min, 0) / workouts.length,
                      )}{" "}
                      min/km
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">-0:05 desde a semana passada</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="lg:col-span-4">
                  <CardHeader>
                    <CardTitle>Últimas Corridas</CardTitle>
                    <CardDescription>Suas corridas mais recentes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Data</TableHead>
                          <TableHead>Distância</TableHead>
                          <TableHead>Duração</TableHead>
                          <TableHead>Ritmo</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {workouts.slice(0, 5).map((workout) => (
                          <TableRow key={workout.id}>
                            <TableCell>
                              <div className="font-medium">{formatDate(workout.workout_datetime)}</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                {formatTime(workout.workout_datetime)}
                              </div>
                            </TableCell>
                            <TableCell>{workout.distance_km} km</TableCell>
                            <TableCell>{workout.duration_minutes} min</TableCell>
                            <TableCell>{formatPace(workout.average_pace_km_per_min)} min/km</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
                <Card className="lg:col-span-3">
                  <CardHeader>
                    <CardTitle>Estatísticas Rápidas</CardTitle>
                    <CardDescription>Resumo do seu desempenho</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm font-medium">Distância Média</div>
                        <div className="text-sm font-medium">
                          {(workouts.reduce((sum, workout) => sum + workout.distance_km, 0) / workouts.length).toFixed(
                            1,
                          )}{" "}
                          km
                        </div>
                      </div>
                      <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-red-500 to-amber-500" style={{ width: "65%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm font-medium">Duração Média</div>
                        <div className="text-sm font-medium">
                          {Math.round(
                            workouts.reduce((sum, workout) => sum + workout.duration_minutes, 0) / workouts.length,
                          )}{" "}
                          min
                        </div>
                      </div>
                      <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-red-500 to-amber-500" style={{ width: "58%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm font-medium">Calorias Médias</div>
                        <div className="text-sm font-medium">
                          {Math.round(
                            workouts.reduce((sum, workout) => sum + workout.calories_burned_kcal, 0) / workouts.length,
                          )}{" "}
                          kcal
                        </div>
                      </div>
                      <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-red-500 to-amber-500" style={{ width: "72%" }} />
                      </div>
                    </div>
                    <div className="pt-4 grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg">
                        <div className="text-xs text-gray-500 dark:text-gray-400">Melhor Ritmo</div>
                        <div className="text-lg font-bold">5:23 min/km</div>
                        <div className="text-xs text-green-500">-0:12 do anterior</div>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg">
                        <div className="text-xs text-gray-500 dark:text-gray-400">Maior Distância</div>
                        <div className="text-lg font-bold">10.0 km</div>
                        <div className="text-xs text-green-500">+1.6 km do anterior</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="workouts" className="space-y-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Histórico de Corridas</CardTitle>
                    <CardDescription>Visualize todas as suas corridas registradas</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filtrar por" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todas as corridas</SelectItem>
                        <SelectItem value="last-week">Última semana</SelectItem>
                        <SelectItem value="last-month">Último mês</SelectItem>
                        <SelectItem value="last-3-months">Últimos 3 meses</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[180px]">Data e Hora</TableHead>
                          <TableHead>Distância (km)</TableHead>
                          <TableHead>Duração (min)</TableHead>
                          <TableHead>Calorias (kcal)</TableHead>
                          <TableHead>Ritmo (min/km)</TableHead>
                          <TableHead className="text-right">Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {workouts.map((workout) => (
                          <TableRow key={workout.id} className="group">
                            <TableCell>
                              <div className="font-medium">{formatDate(workout.workout_datetime)}</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                {formatTime(workout.workout_datetime)}
                              </div>
                            </TableCell>
                            <TableCell>{workout.distance_km.toFixed(1)}</TableCell>
                            <TableCell>{workout.duration_minutes}</TableCell>
                            <TableCell>{workout.calories_burned_kcal}</TableCell>
                            <TableCell>{formatPace(workout.average_pace_km_per_min)}</TableCell>
                            <TableCell className="text-right">
                              <Badge
                                variant="outline"
                                className={`
                                  ${
                                    workout.distance_km > 8
                                      ? "border-green-500 text-green-500 bg-green-50 dark:bg-green-950/20"
                                      : workout.distance_km > 5
                                        ? "border-blue-500 text-blue-500 bg-blue-50 dark:bg-blue-950/20"
                                        : "border-amber-500 text-amber-500 bg-amber-50 dark:bg-amber-950/20"
                                  }
                                `}
                              >
                                {workout.distance_km > 8 ? "Longa" : workout.distance_km > 5 ? "Média" : "Curta"}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="add" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Adicionar Nova Corrida</CardTitle>
                  <CardDescription>Registre os detalhes da sua corrida</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="workout-date">Data</Label>
                        <Input
                          id="workout-date"
                          type="date"
                          defaultValue={new Date().toISOString().split("T")[0]}
                          className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="workout-time">Hora</Label>
                        <Input
                          id="workout-time"
                          type="time"
                          defaultValue="07:30"
                          className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="distance">Distância (km)</Label>
                        <div className="relative">
                          <Input
                            id="distance"
                            type="number"
                            step="0.01"
                            placeholder="5.0"
                            className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500 dark:text-gray-400">
                            km
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="duration">Duração (minutos)</Label>
                        <div className="relative">
                          <Input
                            id="duration"
                            type="number"
                            placeholder="30"
                            className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500 dark:text-gray-400">
                            min
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="calories">Calorias Queimadas (kcal)</Label>
                        <div className="relative">
                          <Input
                            id="calories"
                            type="number"
                            placeholder="350"
                            className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500 dark:text-gray-400">
                            kcal
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pace">Ritmo Médio (min/km)</Label>
                        <div className="relative">
                          <Input
                            id="pace"
                            placeholder="5:30"
                            className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500 dark:text-gray-400">
                            min/km
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes">Notas (opcional)</Label>
                      <textarea
                        id="notes"
                        rows={3}
                        placeholder="Adicione notas sobre sua corrida..."
                        className="w-full p-2 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
                      ></textarea>
                    </div>

                    <div className="space-y-2">
                      <Label>Tipo de Corrida</Label>
                      <div className="grid grid-cols-3 gap-2">
                        <Button
                          type="button"
                          variant="outline"
                          className="border-amber-500 text-amber-500 bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/20 dark:hover:bg-amber-950/40"
                        >
                          Curta
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          className="border-blue-500 text-blue-500 bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/20 dark:hover:bg-blue-950/40"
                        >
                          Média
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          className="border-green-500 text-green-500 bg-green-50 hover:bg-green-100 dark:bg-green-950/20 dark:hover:bg-green-950/40"
                        >
                          Longa
                        </Button>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-red-500 to-amber-500 hover:from-red-600 hover:to-amber-600 text-white border-0"
                    >
                      Salvar Corrida
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

