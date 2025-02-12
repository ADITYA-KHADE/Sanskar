import { Shield, Truck, CreditCard, Clock } from "lucide-react"

const concerns = [
  {
    icon: Shield,
    title: "Quality Concerns?",
    description: "Every product is quality tested and comes with a satisfaction guarantee",
  },
  {
    icon: Truck,
    title: "Shipping Worries?",
    description: "Free shipping on orders above ₹499 with fast 3-5 day delivery",
  },
  {
    icon: CreditCard,
    title: "Payment Security?",
    description: "100% secure payments with multiple options including COD",
  },
  {
    icon: Clock,
    title: "Product Freshness?",
    description: "Made fresh in small batches with best-before date on all products",
  },
]

export function ConcernsSection() {
  return (
    <section className="py-16 bg-yellow-400">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Common Concerns Addressed</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {concerns.map((concern, index) => (
            <div key={index} className="flex items-start gap-4 p-6 rounded-lg border bg-white">
              <concern.icon className="w-8 h-8 text-primary shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">{concern.title}</h3>
                <p className="text-gray-600">{concern.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

