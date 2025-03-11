"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

interface Product {
  id: number
  title: string
  price: number
  image: string
  category: string
}

export function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    // Simulate fetching products
    const fetchProducts = async () => {
      try {
        // In a real app, this would be an API call
        setTimeout(() => {
          setProducts([
            {
              id: 1,
              title: "Wireless Headphones",
              price: 99.99,
              image: "/placeholder.svg?height=200&width=200",
              category: "Electronics",
            },
            {
              id: 2,
              title: "Smart Watch",
              price: 149.99,
              image: "/placeholder.svg?height=200&width=200",
              category: "Electronics",
            },
            {
              id: 3,
              title: "Running Shoes",
              price: 79.99,
              image: "/placeholder.svg?height=200&width=200",
              category: "Fashion",
            },
            {
              id: 4,
              title: "Coffee Maker",
              price: 59.99,
              image: "/placeholder.svg?height=200&width=200",
              category: "Home",
            },
          ])
          setLoading(false)
        }, 1000)
      } catch (error) {
        console.error("Error fetching products:", error)
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const addToCart = (product: Product) => {
    // In a real app, this would add the product to the cart in localStorage
    toast({
      title: "Added to cart",
      description: `${product.title} has been added to your cart.`,
    })
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="h-48 bg-muted animate-pulse" />
            <CardContent className="p-4">
              <div className="h-4 w-3/4 bg-muted animate-pulse rounded mb-2" />
              <div className="h-4 w-1/2 bg-muted animate-pulse rounded" />
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <div className="h-10 w-full bg-muted animate-pulse rounded" />
            </CardFooter>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden transition-all duration-200 hover:shadow-lg">
          <Link href={`/product/${product.id}`}>
            <div className="relative h-48 overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </Link>
          <CardContent className="p-4">
            <div className="text-sm text-muted-foreground mb-1">{product.category}</div>
            <Link href={`/product/${product.id}`} className="font-medium hover:underline">
              {product.title}
            </Link>
            <div className="mt-2 font-bold">${product.price.toFixed(2)}</div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button variant="default" className="w-full" onClick={() => addToCart(product)}>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

