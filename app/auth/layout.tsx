import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Authentication - E-Commerce Marketplace",
  description: "Login or register for an account",
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen">{children}</div>
}

