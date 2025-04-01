"use client"

import type React from "react"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Calendar,
  Clock,
  Flame,
  Home,
  User,
  LogOut,
  Settings,
  Bell,
  Edit,
  BarChart3,
  Trophy,
  Target,
  Heart,
  Plus,
} from "lucide-react"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("personal")

  // Mock user data
  const user = {
    name: "João Silva",
    email: "joao.silva@example.com",
    joinDate: "Outubro 2022",
    avatar: "/placeholder.svg?height=100&width=100",
    stats: {
      totalRuns: 124,
      totalDistance: 842.5,
      totalTime: 4680,
      avgPace: 5.56,
      level: "Avançado",
      streak: 8,
    },
    personal: {
      age: 32,
      height: 178,
      weight: 74,
      gender: "Masculino",
      restingHeartRate: 62,
    },
    goals: {
      weeklyDistance: {
        current: 18.5,
        target: 25,
      },
      monthlyRuns: {
        current: 12,
        target: 20,
      },
      paceImprovement: {
        current: 5.56,
        target: 5.0,
      },
    },
    achievements: [
      { id: 1, name: "Maratonista", description: "Completou uma corrida de 42km", date: "2023-08-15", icon: "🏆" },
      { id: 2, name: "Madrugador", description: "5 corridas antes das 7h", date: "2023-09-02", icon: "🌅" },
      { id: 3, name: "Consistente", description: "Correu por 10 dias seguidos", date: "2023-09-20", icon: "📆" },
      { id: 4, name: "Velocista", description: "Manteve ritmo abaixo de 5min/km", date: "2023-10-05", icon: "⚡" },
    ],
  }

  // Format minutes to hours and minutes
  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${hours}h ${mins}min`
  }

  // Format pace (min/km)
  const formatPace = (pace: number) => {
    const minutes = Math.floor(pace)
    const seconds = Math.round((pace - minutes) * 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  // Calculate progress percentage
  const calculateProgress = (current: number, target: number) => {
    return Math.min(Math.round((current / target) * 100), 100)
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
            <a href="/dashboard" className="flex items-center">
              <Home className="mr-2 h-4 w-4" />
              Dashboard
            </a>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <a href="/dashboard" className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              Corridas
            </a>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <a href="/dashboard" className="flex items-center">
              <BarChart3 className="mr-2 h-4 w-4" />
              Estatísticas
            </a>
          </Button>
          <Button variant="ghost" className="w-full justify-start bg-gray-100 dark:bg-gray-800" asChild>
            <a href="/profile" className="flex items-center">
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
            <div className="flex-1">
              <h1 className="text-lg font-semibold">Perfil</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              <Avatar className="h-8 w-8 border-2 border-white dark:border-gray-800">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="bg-gradient-to-br from-red-500 to-amber-500 text-white">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-auto p-4 md:p-6">
          {/* Profile header */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="relative">
                <Avatar className="h-24 w-24 border-4 border-white dark:border-gray-800 shadow-md">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="text-3xl bg-gradient-to-br from-red-500 to-amber-500 text-white">
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute bottom-0 right-0 h-8 w-8 rounded-full shadow-md"
                >
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-bold">{user.name}</h1>
                    <p className="text-gray-500 dark:text-gray-400">
                      {user.email} · Membro desde {user.joinDate}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge className="bg-gradient-to-r from-red-500 to-amber-500 hover:from-red-600 hover:to-amber-600 text-white border-0">
                        {user.stats.level}
                      </Badge>
                      <Badge variant="outline" className="gap-1">
                        <Flame className="h-3 w-3 text-amber-500" />
                        {user.stats.streak} dias seguidos
                      </Badge>
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-red-500 to-amber-500 hover:from-red-600 hover:to-amber-600 text-white border-0">
                    <Edit className="mr-2 h-4 w-4" />
                    Editar Perfil
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats overview */}
          <div className="grid gap-4 md:grid-cols-4 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total de Corridas</CardTitle>
                <Calendar className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{user.stats.totalRuns}</div>
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
                <div className="text-2xl font-bold">{user.stats.totalDistance.toFixed(1)} km</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tempo Total</CardTitle>
                <Clock className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatTime(user.stats.totalTime)}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Ritmo Médio</CardTitle>
                <Timer className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatPace(user.stats.avgPace)} min/km</div>
              </CardContent>
            </Card>
          </div>

          {/* Tabs for profile sections */}
          <Tabs defaultValue="personal" className="space-y-4" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-4 md:w-[600px]">
              <TabsTrigger value="personal">Dados Pessoais</TabsTrigger>
              <TabsTrigger value="goals">Metas</TabsTrigger>
              <TabsTrigger value="achievements">Conquistas</TabsTrigger>
              <TabsTrigger value="settings">Configurações</TabsTrigger>
            </TabsList>

            {/* Personal Information Tab */}
            <TabsContent value="personal" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Informações Pessoais</CardTitle>
                  <CardDescription>Gerencie seus dados pessoais e biométricos</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input id="name" defaultValue={user.name} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue={user.email} />
                    </div>
                  </div>

                  <Separator />
                  <h3 className="text-lg font-medium">Dados Biométricos</h3>

                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="age">Idade</Label>
                      <Input id="age" type="number" defaultValue={user.personal.age} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender">Gênero</Label>
                      <select
                        id="gender"
                        defaultValue={user.personal.gender}
                        className="w-full p-2 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
                      >
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                        <option value="Outro">Outro</option>
                        <option value="Prefiro não informar">Prefiro não informar</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="heart-rate">Freq. Cardíaca em Repouso</Label>
                      <div className="relative">
                        <Input id="heart-rate" type="number" defaultValue={user.personal.restingHeartRate} />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500 dark:text-gray-400">
                          bpm
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="height">Altura</Label>
                      <div className="relative">
                        <Input id="height" type="number" defaultValue={user.personal.height} />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500 dark:text-gray-400">
                          cm
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="weight">Peso</Label>
                      <div className="relative">
                        <Input id="weight" type="number" step="0.1" defaultValue={user.personal.weight} />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500 dark:text-gray-400">
                          kg
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button className="bg-gradient-to-r from-red-500 to-amber-500 hover:from-red-600 hover:to-amber-600 text-white border-0">
                    Salvar Alterações
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Zonas de Frequência Cardíaca</CardTitle>
                  <CardDescription>
                    Suas zonas de treinamento baseadas na sua frequência cardíaca máxima
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <span className="font-medium">Zona 1 (50-60%)</span>
                      </div>
                      <span className="text-gray-500 dark:text-gray-400">94-113 bpm</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="font-medium">Zona 2 (60-70%)</span>
                      </div>
                      <span className="text-gray-500 dark:text-gray-400">113-132 bpm</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <span className="font-medium">Zona 3 (70-80%)</span>
                      </div>
                      <span className="text-gray-500 dark:text-gray-400">132-151 bpm</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                        <span className="font-medium">Zona 4 (80-90%)</span>
                      </div>
                      <span className="text-gray-500 dark:text-gray-400">151-170 bpm</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <span className="font-medium">Zona 5 (90-100%)</span>
                      </div>
                      <span className="text-gray-500 dark:text-gray-400">170-188 bpm</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Goals Tab */}
            <TabsContent value="goals" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Metas de Corrida</CardTitle>
                  <CardDescription>Defina e acompanhe suas metas de corrida</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Target className="h-5 w-5 text-red-500" />
                          <div>
                            <h4 className="font-medium">Distância Semanal</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {user.goals.weeklyDistance.current} de {user.goals.weeklyDistance.target} km
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                      <Progress
                        value={calculateProgress(user.goals.weeklyDistance.current, user.goals.weeklyDistance.target)}
                        className="h-2 bg-gray-100 dark:bg-gray-800"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-5 w-5 text-amber-500" />
                          <div>
                            <h4 className="font-medium">Corridas Mensais</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {user.goals.monthlyRuns.current} de {user.goals.monthlyRuns.target} corridas
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                      <Progress
                        value={calculateProgress(user.goals.monthlyRuns.current, user.goals.monthlyRuns.target)}
                        className="h-2 bg-gray-100 dark:bg-gray-800"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-blue-500" />
                          <div>
                            <h4 className="font-medium">Melhoria de Ritmo</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {formatPace(user.goals.paceImprovement.current)} para{" "}
                              {formatPace(user.goals.paceImprovement.target)} min/km
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                      <Progress
                        value={calculateProgress(user.goals.paceImprovement.target, user.goals.paceImprovement.current)}
                        className="h-2 bg-gray-100 dark:bg-gray-800"
                      />
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-medium mb-4">Adicionar Nova Meta</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="goal-type">Tipo de Meta</Label>
                        <select
                          id="goal-type"
                          className="w-full p-2 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
                        >
                          <option value="distance">Distância</option>
                          <option value="runs">Número de Corridas</option>
                          <option value="pace">Ritmo</option>
                          <option value="time">Tempo</option>
                          <option value="calories">Calorias</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="goal-period">Período</Label>
                        <select
                          id="goal-period"
                          className="w-full p-2 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
                        >
                          <option value="weekly">Semanal</option>
                          <option value="monthly">Mensal</option>
                          <option value="yearly">Anual</option>
                          <option value="custom">Personalizado</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="goal-target">Meta</Label>
                        <Input id="goal-target" type="number" placeholder="Ex: 30" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="goal-unit">Unidade</Label>
                        <select
                          id="goal-unit"
                          className="w-full p-2 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
                        >
                          <option value="km">Quilômetros (km)</option>
                          <option value="runs">Corridas</option>
                          <option value="min/km">Min/km</option>
                          <option value="minutes">Minutos</option>
                          <option value="kcal">Calorias (kcal)</option>
                        </select>
                      </div>
                    </div>
                    <Button className="mt-4 bg-gradient-to-r from-red-500 to-amber-500 hover:from-red-600 hover:to-amber-600 text-white border-0">
                      <Plus className="mr-2 h-4 w-4" />
                      Adicionar Meta
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Achievements Tab */}
            <TabsContent value="achievements" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Conquistas</CardTitle>
                  <CardDescription>Suas conquistas e medalhas de corrida</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {user.achievements.map((achievement) => (
                      <div
                        key={achievement.id}
                        className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50"
                      >
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-red-500/20 to-amber-500/20 flex items-center justify-center text-2xl">
                          {achievement.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">{achievement.name}</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{achievement.description}</p>
                          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                            Conquistado em {new Date(achievement.date).toLocaleDateString("pt-BR")}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 rounded-lg border border-dashed border-gray-300 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/20 text-center">
                    <Trophy className="h-8 w-8 mx-auto text-amber-500 mb-2" />
                    <h3 className="font-medium">Próximas Conquistas</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Corra 50km em um mês para desbloquear "Ultramaratonista"
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Complete 15 corridas noturnas para desbloquear "Coruja"
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Configurações da Conta</CardTitle>
                  <CardDescription>Gerencie suas preferências e configurações de conta</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Preferências do Aplicativo</h3>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Bell className="h-5 w-5 text-gray-500" />
                        <div>
                          <h4 className="font-medium">Notificações</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Receber notificações de corridas e metas
                          </p>
                        </div>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Heart className="h-5 w-5 text-gray-500" />
                        <div>
                          <h4 className="font-medium">Integração com Saúde</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Sincronizar com Apple Health/Google Fit
                          </p>
                        </div>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Settings className="h-5 w-5 text-gray-500" />
                        <div>
                          <h4 className="font-medium">Tema Escuro</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Alternar entre tema claro e escuro</p>
                        </div>
                      </div>
                      <Switch />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Globe className="h-5 w-5 text-gray-500" />
                        <div>
                          <h4 className="font-medium">Unidades de Medida</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Métrico (km) ou Imperial (milhas)</p>
                        </div>
                      </div>
                      <select className="p-2 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                        <option value="metric">Métrico (km)</option>
                        <option value="imperial">Imperial (milhas)</option>
                      </select>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Segurança</h3>

                    <div className="space-y-2">
                      <Label htmlFor="current-password">Senha Atual</Label>
                      <Input id="current-password" type="password" />
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="new-password">Nova Senha</Label>
                        <Input id="new-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
                        <Input id="confirm-password" type="password" />
                      </div>
                    </div>

                    <Button className="bg-gradient-to-r from-red-500 to-amber-500 hover:from-red-600 hover:to-amber-600 text-white border-0">
                      Atualizar Senha
                    </Button>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-red-500">Zona de Perigo</h3>

                    <div className="p-4 rounded-lg border border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/20">
                      <h4 className="font-medium mb-2">Excluir Conta</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        Esta ação não pode ser desfeita. Todos os seus dados serão permanentemente removidos.
                      </p>
                      <Button variant="destructive">Excluir Minha Conta</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

function Timer(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function Globe(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

