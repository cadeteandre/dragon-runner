"use client"

import { motion } from "framer-motion"

interface DragonLogoProps {
  className?: string
}

export default function DragonLogo({ className = "h-6 w-6" }: DragonLogoProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ rotate: -10 }}
      animate={{ rotate: 0 }}
      transition={{ duration: 0.5 }}
    >
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <motion.path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
          fill="currentColor"
          opacity="0.2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.path
          d="M20 12c0-4.42-3.58-8-8-8-1.95 0-3.74.7-5.13 1.87L12 12l-5.13 6.13C8.26 19.3 10.05 20 12 20c4.42 0 8-3.58 8-8z"
          fill="currentColor"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <motion.path
          d="M6.87 5.87C5.7 7.26 5 9.05 5 11c0 1.95.7 3.74 1.87 5.13L12 12 6.87 5.87z"
          fill="currentColor"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        />
        <motion.path
          d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />
      </svg>
    </motion.div>
  )
}

