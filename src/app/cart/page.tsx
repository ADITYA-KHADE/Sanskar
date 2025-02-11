"use client"

import { useCartStore } from "@/lib/store"
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/utils"
import Image from "next/image"
import { Minus, Plus, Trash2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function CartPage() {
  const { items, removeItem, updateQuantity, total } = useCartStore()
  const router = useRouter()

  const handleCheckout = async () => {
    try {
      const stripe = await stripePromise

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items }),
      })

      const { sessionId } = await response.json()

      // Redirect to Stripe Checkout
      const result = await stripe?.redirectToCheckout({
        sessionId,
      })

      if (result?.error) {
        console.error(result.error)
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <Button onClick={() => router.push("/shop")}>Continue Shopping</Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4 border rounded-lg p-4 bg-white">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                width={100}
                height={100}
                className="rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">{formatPrice(item.price)}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                    className="p-1"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1">
                    <Plus className="w-4 h-4" />
                  </button>
                  <button onClick={() => removeItem(item.id)} className="ml-auto text-red-500">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="border rounded-lg p-6 bg-white h-fit space-y-4">
          <h2 className="font-semibold">Order Summary</h2>
          <div className="border-t pt-4">
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>{formatPrice(total)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>{total > 499 ? "Free" : formatPrice(50)}</span>
            </div>
            <div className="flex justify-between font-bold border-t pt-2">
              <span>Total</span>
              <span>{formatPrice(total > 499 ? total : total + 50)}</span>
            </div>
          </div>
          <Button onClick={handleCheckout} className="w-full">
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  )
}

