"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart, User, Menu, X, Store } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isSellerDashboard = pathname?.startsWith("/seller")

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
          <Link href="/" className="flex items-center gap-2">
            <ShoppingCart className="h-6 w-6" />
            <span className="font-bold text-xl">Marketplace</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {isSellerDashboard ? (
            <>
              <Link
                href="/seller/dashboard"
                className={`text-sm font-medium ${pathname === "/seller/dashboard" ? "text-primary" : "text-muted-foreground"}`}
              >
                Dashboard
              </Link>
              <Link
                href="/seller/products"
                className={`text-sm font-medium ${pathname === "/seller/products" ? "text-primary" : "text-muted-foreground"}`}
              >
                Products
              </Link>
              <Link
                href="/seller/orders"
                className={`text-sm font-medium ${pathname === "/seller/orders" ? "text-primary" : "text-muted-foreground"}`}
              >
                Orders
              </Link>
              <Link
                href="/seller/analytics"
                className={`text-sm font-medium ${pathname === "/seller/analytics" ? "text-primary" : "text-muted-foreground"}`}
              >
                Analytics
              </Link>
              <Link
                href="/seller/messages"
                className={`text-sm font-medium ${pathname === "/seller/messages" ? "text-primary" : "text-muted-foreground"}`}
              >
                Messages
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/"
                className={`text-sm font-medium ${pathname === "/" ? "text-primary" : "text-muted-foreground"}`}
              >
                Home
              </Link>
              <Link
                href="/shop"
                className={`text-sm font-medium ${pathname === "/shop" ? "text-primary" : "text-muted-foreground"}`}
              >
                Shop
              </Link>
              <Link
                href="/categories"
                className={`text-sm font-medium ${pathname === "/categories" ? "text-primary" : "text-muted-foreground"}`}
              >
                Categories
              </Link>
            </>
          )}
        </nav>

        <div className="flex items-center gap-4">
          {isSellerDashboard ? (
            <Button variant="outline" size="sm" asChild>
              <Link href="/">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Buyer View
              </Link>
            </Button>
          ) : (
            <>
              <Link href="/cart" className="flex items-center justify-center h-10 w-10 rounded-full bg-muted">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Cart</span>
              </Link>
              <Link href="/profile" className="flex items-center justify-center h-10 w-10 rounded-full bg-muted">
                <User className="h-5 w-5" />
                <span className="sr-only">Profile</span>
              </Link>
              <Button variant="outline" size="sm" asChild className="hidden md:flex">
                <Link href="/seller/dashboard">
                  <Store className="h-4 w-4 mr-2" />
                  Seller Dashboard
                </Link>
              </Button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background md:hidden">
          <nav className="container flex flex-col gap-6 p-6">
            {isSellerDashboard ? (
              <>
                <Link href="/seller/dashboard" className="text-lg font-medium" onClick={toggleMenu}>
                  Dashboard
                </Link>
                <Link href="/seller/products" className="text-lg font-medium" onClick={toggleMenu}>
                  Products
                </Link>
                <Link href="/seller/orders" className="text-lg font-medium" onClick={toggleMenu}>
                  Orders
                </Link>
                <Link href="/seller/analytics" className="text-lg font-medium" onClick={toggleMenu}>
                  Analytics
                </Link>
                <Link href="/seller/messages" className="text-lg font-medium" onClick={toggleMenu}>
                  Messages
                </Link>
                <Button variant="outline" asChild className="mt-4">
                  <Link href="/" onClick={toggleMenu}>
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Buyer View
                  </Link>
                </Button>
              </>
            ) : (
              <>
                <Link href="/" className="text-lg font-medium" onClick={toggleMenu}>
                  Home
                </Link>
                <Link href="/shop" className="text-lg font-medium" onClick={toggleMenu}>
                  Shop
                </Link>
                <Link href="/categories" className="text-lg font-medium" onClick={toggleMenu}>
                  Categories
                </Link>
                <Link href="/cart" className="text-lg font-medium" onClick={toggleMenu}>
                  Cart
                </Link>
                <Link href="/profile" className="text-lg font-medium" onClick={toggleMenu}>
                  Profile
                </Link>
                <Button variant="outline" asChild className="mt-4">
                  <Link href="/seller/dashboard" onClick={toggleMenu}>
                    <Store className="h-4 w-4 mr-2" />
                    Seller Dashboard
                  </Link>
                </Button>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}

