import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const options = [
  {
    title: "Trial Pack",
    description: "Perfect for first-time buyers",
    price: "₹199",
    features: ["3 different fragrances", "10 sticks each", "Travel-friendly packaging", "Money-back guarantee"],
    image: "/placeholder.svg",
  },
  {
    title: "Premium Pack",
    description: "Most popular choice",
    price: "₹499",
    features: ["5 premium fragrances", "20 sticks each", "Decorative holder included", "Free shipping"],
    image: "/placeholder.svg",
  },
]

export function ProductOptionsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Pack</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {options.map((option, index) => (
            <div key={index} className="rounded-lg border bg-white p-6">
              <Image
                src={option.image || "/placeholder.svg"}
                alt={option.title}
                width={300}
                height={200}
                className="rounded-lg mb-4 w-full object-cover"
              />
              <h3 className="text-xl font-bold mb-2">{option.title}</h3>
              <p className="text-gray-600 mb-4">{option.description}</p>
              <p className="text-2xl font-bold mb-4">{option.price}</p>
              <ul className="space-y-2 mb-6">
                {option.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full" asChild>
                <Link href="/shop">Buy Now</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

