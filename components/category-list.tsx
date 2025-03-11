import Link from "next/link"
import { Laptop, Shirt, Home, Gift, Music, Book } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    name: "Electronics",
    icon: Laptop,
    slug: "electronics",
    color: "bg-blue-100 dark:bg-blue-900",
    textColor: "text-blue-500 dark:text-blue-300",
  },
  {
    name: "Fashion",
    icon: Shirt,
    slug: "fashion",
    color: "bg-pink-100 dark:bg-pink-900",
    textColor: "text-pink-500 dark:text-pink-300",
  },
  {
    name: "Home & Garden",
    icon: Home,
    slug: "home-garden",
    color: "bg-green-100 dark:bg-green-900",
    textColor: "text-green-500 dark:text-green-300",
  },
  {
    name: "Gifts",
    icon: Gift,
    slug: "gifts",
    color: "bg-purple-100 dark:bg-purple-900",
    textColor: "text-purple-500 dark:text-purple-300",
  },
  {
    name: "Music",
    icon: Music,
    slug: "music",
    color: "bg-red-100 dark:bg-red-900",
    textColor: "text-red-500 dark:text-red-300",
  },
  {
    name: "Books",
    icon: Book,
    slug: "books",
    color: "bg-yellow-100 dark:bg-yellow-900",
    textColor: "text-yellow-500 dark:text-yellow-300",
  },
]

export function CategoryList() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <Card className="h-full transition-all duration-200 hover:shadow-md">
            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
              <div className={`rounded-full p-3 mb-4 ${category.color}`}>
                <category.icon className={`h-6 w-6 ${category.textColor}`} />
              </div>
              <span className="font-medium">{category.name}</span>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

