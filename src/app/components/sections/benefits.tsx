import { Check } from "lucide-react"

const benefits = [
  {
    title: "100% Natural Ingredients",
    description: "All our products are made from pure, natural ingredients sourced directly from trusted farmers",
  },
  {
    title: "Traditional Manufacturing",
    description: "Following age-old traditional methods to preserve authenticity and quality",
  },
  {
    title: "Eco-Friendly Packaging",
    description: "Sustainable packaging that's good for both you and the environment",
  },
  {
    title: "Direct from Artisans",
    description: "Supporting local artisans and their traditional craftsmanship",
  },
  {
    title: "Quality Guaranteed",
    description: "Every product undergoes strict quality checks before reaching you",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4 p-6 rounded-lg border bg-white shadow-sm">
              <div className="rounded-full bg-green-100 p-2">
                <Check className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

