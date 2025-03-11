import Image from "next/image"
import { notFound } from "next/navigation"
import { AddToCartButton } from "@/components/add-to-cart-button"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// This would normally come from a database or API
const getProduct = (id: string) => {
  const products = [
    {
      id: "1",
      title: "Wireless Headphones",
      price: 99.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "Electronics",
      description:
        "High-quality wireless headphones with noise cancellation and long battery life. Perfect for music lovers and professionals alike.",
      features: ["Noise cancellation", "30-hour battery life", "Bluetooth 5.0", "Comfortable ear cups"],
      specifications: {
        Brand: "AudioTech",
        Model: "WH-1000",
        Color: "Black",
        Weight: "250g",
        Connectivity: "Bluetooth 5.0",
        Battery: "30 hours",
      },
      seller: {
        name: "AudioTech Official",
        rating: 4.8,
        products: 45,
      },
    },
  ]

  return products.find((product) => product.id === id)
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProduct(params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="container px-4 md:px-6 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative aspect-square">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-sm text-muted-foreground">{product.category}</p>
            <h1 className="text-3xl font-bold mt-1">{product.title}</h1>
            <div className="mt-4 text-3xl font-bold">${product.price.toFixed(2)}</div>
          </div>

          <p className="text-muted-foreground">{product.description}</p>

          <div className="space-y-2">
            <h3 className="font-medium">Features:</h3>
            <ul className="list-disc list-inside space-y-1">
              {product.features.map((feature, index) => (
                <li key={index} className="text-muted-foreground">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <AddToCartButton product={product} />
            <Button variant="outline">Add to Wishlist</Button>
          </div>

          <div className="pt-6 border-t">
            <div className="flex items-center space-x-2">
              <div className="font-medium">Seller:</div>
              <div className="text-muted-foreground">{product.seller.name}</div>
            </div>
            <div className="flex items-center space-x-2 mt-1">
              <div className="font-medium">Rating:</div>
              <div className="text-muted-foreground">{product.seller.rating}/5</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <Tabs defaultValue="specifications">
          <TabsList>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
          </TabsList>
          <TabsContent value="specifications" className="p-4 border rounded-md mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b">
                  <span className="font-medium">{key}</span>
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="p-4 border rounded-md mt-4">
            <p className="text-muted-foreground">No reviews yet.</p>
          </TabsContent>
          <TabsContent value="shipping" className="p-4 border rounded-md mt-4">
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Shipping</h3>
                <p className="text-muted-foreground">
                  Free shipping on orders over $50. Standard delivery takes 3-5 business days.
                </p>
              </div>
              <div>
                <h3 className="font-medium">Returns</h3>
                <p className="text-muted-foreground">
                  Return items within 30 days of delivery for a full refund. Customer is responsible for return shipping
                  costs.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

