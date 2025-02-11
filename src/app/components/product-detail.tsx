"use client"

import { useState } from "react"
import Image from "next/image"
import type { Product } from "@/lib/google-sheets"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useCartStore } from "@/lib/store"
import { formatPrice } from "@/lib/utils"
import { Minus, Plus } from "lucide-react"

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1)
  const { toast } = useToast()
  const addItem = useCartStore((state) => state.addItem)

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.image,
    })

    toast({
      title: "Added to cart",
      description: `${quantity} × ${product.name} added to your cart`,
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative aspect-square">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl font-bold">{formatPrice(product.price)}</p>
          <p className="text-gray-600">{product.description}</p>

          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded-lg">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2" disabled={quantity <= 1}>
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-4 py-2 border-x">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="p-2" disabled={quantity >= product.stock}>
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <Button onClick={handleAddToCart} disabled={product.stock < 1} className="flex-1">
              {product.stock < 1 ? "Out of Stock" : "Add to Cart"}
            </Button>
          </div>

          <div className="border-t pt-6">
            <h3 className="font-semibold mb-2">Product Details</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Category: {product.category}</li>
              <li>Stock: {product.stock} units</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

