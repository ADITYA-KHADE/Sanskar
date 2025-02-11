import type { Product } from "@/lib/google-sheets"
import Image from "next/image"
import Link from "next/link"
import { formatPrice } from "@/lib/utils"

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Link key={product.id} href={`/shop/${product.id}`} className="group relative">
          <div className="aspect-square overflow-hidden rounded-lg border bg-white">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={500}
              height={500}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
            {product.stock < 1 && (
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <p className="text-white font-semibold">Out of Stock</p>
              </div>
            )}
          </div>
          <div className="mt-4 space-y-1">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">{formatPrice(product.price)}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

