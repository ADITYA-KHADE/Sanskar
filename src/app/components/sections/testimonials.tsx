import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Priya S.",
    location: "Mumbai",
    comment:
      "The quality of the products is exceptional. I love how they maintain the traditional authenticity while being eco-friendly.",
    rating: 5,
    image: "/placeholder.svg",
  },
  {
    name: "Rajesh K.",
    location: "Delhi",
    comment: "Best agarbatti I've ever used. The fragrance is pure and long-lasting. Will definitely buy again!",
    rating: 5,
    image: "/placeholder.svg",
  },
  {
    name: "Meera P.",
    location: "Bangalore",
    comment: "Great customer service and quick delivery. The products are exactly as described.",
    rating: 5,
    image: "/placeholder.svg",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 rounded-lg border bg-white shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

