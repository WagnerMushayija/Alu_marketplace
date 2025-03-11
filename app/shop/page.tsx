import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"

export default function ShopPage() {
  return (
    <div className="container px-4 md:px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">Shop All Products</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4">
          <ProductFilters />
        </div>
        <div className="md:w-3/4">
          <ProductGrid />
        </div>
      </div>
    </div>
  )
}

