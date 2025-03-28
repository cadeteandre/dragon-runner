import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { TabsContent } from "@/components/ui/tabs";
import { Calendar, Flame, Clock, Table } from "lucide-react";
import { Badge } from "@/components/ui/badge"

const DashboardTable = () => {

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
        <>
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
        </>
    );
}
 
export default DashboardTable;