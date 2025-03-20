"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ChevronRight, Flame, Timer, BarChart3 } from "lucide-react"
import DragonLogo from "@/components/dragon-logo"
import Header from "@/components/ui/header"

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-purple-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-purple-500/10"
              initial={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
              }}
              animate={{
                y: [null, Math.random() * -500 - 100],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.random() * 20 + 15,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 10,
              }}
            />
          ))}
        </div>
      </div>

      {/* Dragon path animation */}
      <motion.div
        className="absolute top-1/4 w-full h-40 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        <svg viewBox="0 0 1200 100" className="w-full h-full">
          <motion.path
            d="M0,50 Q300,100 600,50 T1200,50"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff4d4d" />
              <stop offset="100%" stopColor="#f9cb28" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
      <Header />
      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-32 md:pt-32 md:pb-40">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-block"
            >
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-sm font-medium backdrop-blur-sm border border-white/10">
                🔥 New running app
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-red-200 to-amber-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Unleash the <span className="text-red-500">Dragon</span> in your race
            </motion.h1>

            <motion.p
              className="text-xl text-white/70 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Track, analyze and push your limits with the most powerful running app. Turn every step into an epic journey.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <Link href="/register">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-amber-500 hover:from-red-600 hover:to-amber-600 text-white border-0 h-14 px-8 text-lg rounded-xl shadow-lg shadow-red-500/20 hover:shadow-red-500/40 transition-all"
                >
                  Start Now <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#demo">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-black border-white/20 hover:bg-white/10 hover:text-white h-14 px-8 text-lg rounded-xl"
                >
                  Ver Demo
                </Button>
              </Link>
            </motion.div>

            <motion.div
              className="flex items-center gap-8 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-black/10 bg-gradient-to-br from-orange-100 to-red-100" />
                <div className="w-10 h-10 rounded-full border-2 border-black/10 bg-gradient-to-br from-orange-200 to-red-200" />
                <div className="w-10 h-10 rounded-full border-2 border-black/10 bg-gradient-to-br from-orange-300 to-red-300" />
                <div className="w-10 h-10 rounded-full border-2 border-black/10 bg-gradient-to-br from-orange-400 to-red-400" />
              </div>
              <div className="text-white/70 text-sm">
                <span className="font-bold text-white">1,000+</span> runners have already joined
              </div>
            </motion.div>
          </div>

          <motion.div
            className="relative mt-10 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="relative z-10 bg-gradient-to-br from-gray-900 to-black p-2 rounded-3xl border border-white/10 shadow-2xl shadow-red-500/10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-amber-500/20 backdrop-blur-3xl" />

              <div className="relative z-10 bg-black rounded-2xl overflow-hidden aspect-[9/16] md:aspect-[9/19]">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black">
                  {/* App UI mockup */}
                  <div className="h-full flex flex-col">
                    {/* App header */}
                    <div className="p-4 border-b border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <DragonLogo className="h-6 w-6 text-red-500" />
                        <span className="font-bold text-white">DragonRunner</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-amber-500" />
                    </div>

                    {/* App content */}
                    <div className="flex-1 p-4 space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-white font-bold">Olá, Corredor!</h3>
                        <p className="text-white/60 text-sm">Vamos acompanhar seu progresso</p>
                      </div>

                      <motion.div
                        className="bg-white/5 rounded-xl p-4 border border-white/10"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white/80 text-sm">Distância Total</span>
                          <span className="text-white font-bold">142.5 km</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-red-500 to-amber-500"
                            initial={{ width: "0%" }}
                            animate={{ width: "65%" }}
                            transition={{ delay: 1.5, duration: 1 }}
                          />
                        </div>
                        <div className="flex justify-between text-xs text-white/60 mt-1">
                          <span>Meta: 200 km</span>
                          <span>65%</span>
                        </div>
                      </motion.div>

                      <div className="grid grid-cols-2 gap-3">
                        <motion.div
                          className="bg-white/5 rounded-xl p-3 border border-white/10"
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 1.7, duration: 0.5 }}
                        >
                          <Flame className="h-5 w-5 text-red-500 mb-2" />
                          <div className="text-white font-bold text-lg">12,450</div>
                          <div className="text-white/60 text-xs">Calorias</div>
                        </motion.div>

                        <motion.div
                          className="bg-white/5 rounded-xl p-3 border border-white/10"
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 1.9, duration: 0.5 }}
                        >
                          <Timer className="h-5 w-5 text-amber-500 mb-2" />
                          <div className="text-white font-bold text-lg">5:24</div>
                          <div className="text-white/60 text-xs">Ritmo Médio</div>
                        </motion.div>
                      </div>

                      <motion.div
                        className="bg-white/5 rounded-xl p-4 border border-white/10 h-40 flex items-center justify-center"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 2.1, duration: 0.5 }}
                      >
                        <div className="w-full h-full relative">
                          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between h-[80%]">
                            {[40, 65, 30, 80, 50, 90, 60].map((height, i) => (
                              <motion.div
                                key={i}
                                className="w-[8%] bg-gradient-to-t from-red-500 to-amber-500 rounded-t-sm"
                                style={{ height: `${height}%` }}
                                initial={{ height: 0 }}
                                animate={{ height: `${height}%` }}
                                transition={{ delay: 2.3 + i * 0.1, duration: 0.7 }}
                              />
                            ))}
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20" />
                        </div>
                      </motion.div>
                    </div>

                    {/* App footer */}
                    <div className="p-4 border-t border-white/10">
                      <motion.button
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 to-amber-500 text-white font-bold"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Iniciar Corrida
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-red-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl" />

            {/* Floating badges */}
            <motion.div
              className="absolute -left-10 top-1/4 bg-white/10 backdrop-blur-lg rounded-xl p-3 border border-white/10 shadow-xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.5, duration: 0.5 }}
              style={{ y: scrollY * 0.1 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                  <Flame className="h-4 w-4 text-red-500" />
                </div>
                <div>
                  <div className="text-white font-bold">350</div>
                  <div className="text-white/60 text-xs">kcal/hora</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -right-5 bottom-1/3 bg-white/10 backdrop-blur-lg rounded-xl p-3 border border-white/10 shadow-xl"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.7, duration: 0.5 }}
              style={{ y: scrollY * -0.1 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <BarChart3 className="h-4 w-4 text-amber-500" />
                </div>
                <div>
                  <div className="text-white font-bold">+15%</div>
                  <div className="text-white/60 text-xs">esta semana</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-20 fill-background">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,130.83,141.14,213.2,141.14c62.5,0,125.91-16.77,186.19-32.86Z" />
        </svg>
      </div>
    </div>
  )
}

