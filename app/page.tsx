import Link from "next/link"
import { ShoppingBag, Store, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FeaturedProducts } from "@/components/featured-products"
import { CategoryList } from "@/components/category-list"
import { SearchBar } from "@/components/search-bar"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Your One-Stop Marketplace
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Shop thousands of products or start selling today. Join our growing community of buyers and sellers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="lg">
                <Link href="/shop">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Shop Now
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/seller/dashboard">
                  <Store className="mr-2 h-4 w-4" />
                  Sell Products
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 border-b">
        <div className="container px-4 md:px-6">
          <SearchBar />
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold tracking-tight">Featured Products</h2>
            <Link href="/shop" className="flex items-center text-primary">
              View all
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <FeaturedProducts />
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-muted/50">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tight mb-8">Shop by Category</h2>
          <CategoryList />
        </div>
      </section>
    </div>
  )
}

