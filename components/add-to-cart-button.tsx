"use client"

import { useState } from "react"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

interface Product {
  id: string
  title: string
  price: number
  image: string
}

export function AddToCartButton({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)
  const { toast } = useToast()

  const addToCart = () => {
    setIsAdding(true)

    // Simulate adding to cart with localStorage
    setTimeout(() => {
      // In a real app, we would store the cart in localStorage
      // const cart = JSON.parse(localStorage.getItem('cart') || '[]')
      // cart.push({ ...product, quantity })
      // localStorage.setItem('cart', JSON.stringify(cart))

      toast({
        title: "Added to cart",
        description: `${quantity} × ${product.title} has been added to your cart.`,
      })

      setIsAdding(false)
    }, 800)
  }

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          disabled={quantity <= 1}
        >
          -
        </Button>
        <span className="w-8 text-center">{quantity}</span>
        <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>
          +
        </Button>
      </div>
      <Button className="w-full" onClick={addToCart} disabled={isAdding}>
        <ShoppingCart className="mr-2 h-4 w-4" />
        {isAdding ? "Adding..." : "Add to Cart"}
      </Button>
    </div>
  )
}

