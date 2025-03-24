"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Header from "@/components/ui/header"
import Hero from "@/components/ui/hero"
import Stats from "@/components/ui/stats"

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
      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-32 md:pt-32 md:pb-40">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <Hero />
          <Stats />
        </div>
      </div>
    </div>
  )
}

