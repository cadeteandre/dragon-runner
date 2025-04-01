"use client";

import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';
import { usePathname } from "next/navigation"
import Header from "@/components/ui/header"
import { DashboardHeader } from "@/components/dashboard-header"

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isDashboard = pathname?.startsWith("/dashboard")

  return (
    <ClerkProvider>
      <html lang="pt-BR">
        <body
          // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {isDashboard ? <DashboardHeader /> : <Header />}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
